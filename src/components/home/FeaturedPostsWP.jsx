// src/components/home/FeaturedPostsWP.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, Eye } from "lucide-react";
import { WP_API } from "@/config/wp";

const FeaturedPostsWP = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch only sticky (featured) posts
    fetch(`${WP_API}/posts?sticky=true&_embed`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = (Array.isArray(data) ? data : []).map((p) => ({
          id: p.id,
          title: p.title.rendered,
          excerpt: p.excerpt.rendered,
          date: p.date,
          url: p.link,
        }));
        setPosts(mapped);
      })
      .catch((err) => console.error("Error fetching sticky posts:", err));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              Must-read content curated by our expert team
            </p>
          </div>
          <Link to="/category/featured">
            <Button variant="outline" className="hidden md:flex">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <motion.article
                key={post.id}
                className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Featured badge */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                  <Star className="w-3 h-3 fill-current text-yellow-300" />
                  <span>Featured</span>
                </div>

                <Link to={`/post/${post.id}`}>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <p
                    className="text-gray-600 mb-4 line-clamp-4"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        5 min read
                      </span>
                      {/* <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        100 views
                      </span> */}
                    </div>
                    <span>
                      {new Date(post.date).toLocaleDateString("en-IN")}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))
          ) : (
            <p>No featured posts found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsWP;
