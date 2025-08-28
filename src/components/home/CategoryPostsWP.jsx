// src/components/home/CategoryPostsWP.jsx
import React, { useEffect, useState } from "react";
import RecentPosts from "./RecentPosts"; // reuse your grid/card UI
import { WP_API, FALLBACK_IMG } from "@/config/wp";

const stripHtml = (html) => (html ? html.replace(/<[^>]*>?/gm, "") : "");

export default function CategoryPostsWP({ categoryId, title, limit = 4 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = `${WP_API}/posts?categories=${categoryId}&per_page=${limit}&_embed`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const mapped = (Array.isArray(data) ? data : []).map((p) => {
          const image =
            p?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMG;

          return {
            id: p.id,
            title: p?.title?.rendered || "",
            excerpt: p?.excerpt?.rendered || "",
            category: title,
            date: p.date,
            readTime: "5 min read",
            views: "—",
            image,
            url: p.link,
          };
        });
        setItems(mapped);
      })
      .catch((err) => console.error("WP category fetch error:", err));
  }, [categoryId, limit, title]);

  if (!items.length) return null;

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <RecentPosts posts={items} />
    </section>
  );
}
