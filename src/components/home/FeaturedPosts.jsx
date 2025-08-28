import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Clock, Eye } from 'lucide-react';

const FEATURED_CATEGORY_ID = 11; // WordPress Featured category ID

const FeaturedPosts = ({ posts }) => {
  // Filter only posts that have category 11
  const featuredPosts = posts.filter(
    (post) => post.categories && post.categories.includes(FEATURED_CATEGORY_ID)
  );

  if (featuredPosts.length === 0) {
    return null; // Don’t render section if no featured posts
  }

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
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/post/${post.id}`}>
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    alt={post.title.rendered}
                    src={
                      post.featured_media_url ||
                      "https://images.unsplash.com/photo-1595872018818-97555653a011"
                    }
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime || "3 min read"}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views || "120"}
                      </span>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
