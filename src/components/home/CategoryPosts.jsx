// src/components/home/CategoryPosts.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WP_API = "https://moccasin-ostrich-906220.hostingersite.com/wp-json/wp/v2";

const CategoryPosts = ({ categoryId, title, limit = 5 }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${WP_API}/posts?categories=${categoryId}&per_page=${limit}&_embed`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching category posts:", err));
  }, [categoryId, limit]);

  return (
    <div className="py-10 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            className="p-4 rounded-lg border hover:shadow-md transition"
          >
            <h3
              className="text-xl font-semibold mb-2"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div
              className="text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPosts;
