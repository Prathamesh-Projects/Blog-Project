// src/pages/CategoryPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { WP_API } from "@/config/wp";

// helper to clean HTML
const stripHtml = (html) => (html ? html.replace(/<[^>]*>?/gm, "") : "");

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔑 Map frontend slug to WP category ID
  const categoryMap = {
    "finance-&-economy": 2,
    education: 3,
    "polity-governance": 5,
    "environment-ecology": 7,
    // add more categories here...
  };

  const categoryId = categoryMap[categoryName];

  useEffect(() => {
    if (!categoryId) return;

    setLoading(true);
    fetch(
      `${WP_API}/posts?categories=${categoryId}&per_page=6&_fields=id,title,excerpt`
    )
      .then((r) => r.json())
      .then((data) => {
        const mapped = data.map((p) => ({
          id: p.id,
          title: stripHtml(p.title.rendered),
          excerpt: stripHtml(p.excerpt.rendered),
        }));
        setPosts(mapped);
      })
      .catch((err) => console.error("WP fetch error:", err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="pt-16 min-h-screen ">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold capitalize">
          {categoryName.replace(/-/g, " ")}
        </h1>
        <p className="mt-2 text-blue-100">
          Explore latest articles under {categoryName.replace(/-/g, " ")}
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Posts Section */}
        <div className="md:col-span-2 space-y-6">
          {loading && <p className="p-4">Loading posts...</p>}
          {!loading && posts.length === 0 && (
            <p className="p-4">No posts found in this category.</p>
          )}

          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/post/${post.id}`}
                className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-3 line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-bold mb-4">About {categoryName}</h3>
            <p className="text-gray-600 text-sm">
              Latest updates, insights and analysis about{" "}
              {categoryName.replace(/-/g, " ")}.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-bold mb-4">Other Categories</h3>
            <ul className="space-y-2 text-blue-600 font-medium">
              <li>
                <Link to="/category/finance-&-economy">Finance & Economy</Link>
              </li>
              <li>
                <Link to="/category/education">Education</Link>
              </li>
              <li>
                <Link to="/category/polity-governance">Polity & Governance</Link>
              </li>
              <li>
                <Link to="/category/environment-ecology">
                  Environment & Ecology
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
