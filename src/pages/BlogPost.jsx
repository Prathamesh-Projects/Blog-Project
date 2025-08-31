import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

const WP_API = "https://moccasin-ostrich-906220.hostingersite.com/wp-json/wp/v2";

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${WP_API}/posts/${postId}?_embed`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
        setIsLoading(false);
      });
  }, [postId]);

  if (isLoading) return <p className="p-10 text-center">Loading post...</p>;
  if (!post) return <p className="p-10 text-center">Post not found.</p>;

  const currentUrl = window.location.href;

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title.rendered} - UPSC Civil Services Preparation</title>
        <meta
          name="description"
          content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Share Section under title */}
        <div className="flex flex-col items-center md:items-start mb-10">
          <p className="text-gray-600 text-sm font-medium mb-3">
            Share this article
          </p>
          <div className="flex space-x-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title.rendered)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-sky-500 hover:text-white transition"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title.rendered + " " + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-600 hover:text-white transition"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-700 hover:text-white transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Post Content */}
        <div
          className="
            prose prose-lg max-w-none
            prose-headings:font-semibold
            prose-a:text-blue-600 hover:prose-a:underline
          "
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </div>
  );
};

export default BlogPost;
