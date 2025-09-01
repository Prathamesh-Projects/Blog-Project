import React, { useEffect, useState } from "react";
import RecentPosts from "./RecentPosts";
import { WP_API, FALLBACK_IMG } from "@/config/wp";

const stripHtml = (html) => (html ? html.replace(/<[^>]*>?/gm, "") : "");

export default function RecentPostsWP({ limit = 6 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = `${WP_API}/posts?per_page=${limit}&_embed`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const mapped = (Array.isArray(data) ? data : []).map((p) => {
          const catName =
            p?._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";
          const image =
            p?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMG;

          return {
            id: p.id,
            title: p?.title?.rendered || "",
            excerpt: p?.excerpt?.rendered || "",

            category: catName,
            date: p.date,
            readTime: "5 min read", // dummy for now
            // views: "—",             // dummy for now
            image,
            url: p.link,            // WP full post link
          };
        });
        setItems(mapped);
      })
      .catch((err) => console.error("WP fetch error:", err));
  }, [limit]);

  return <RecentPosts posts={items} />;
}
