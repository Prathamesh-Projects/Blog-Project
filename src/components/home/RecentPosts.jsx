import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Eye } from "lucide-react";

const RecentPosts = ({ posts }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Latest Updates
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest news and analysis
            </p>
          </div>
          <Link to="/category/latest">
            <Button variant="outline" className="hidden md:flex">
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col justify-between"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/post/${post.id}`} className="flex flex-col h-full p-6">
                {/* Category */}
                {post.category && (
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4 self-start">
                    {post.category}
                  </span>
                )}

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />

                {/* Excerpt */}
                <p
                  className="text-gray-600 text-sm mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />

                {/* Footer (meta info) */}
                <div className="mt-auto flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime || "3 min read"}
                    </span>
                    {/* <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views || "120"}
                    </span> */}
                  </div>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
