import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

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
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-snug"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Post Content */}
<div
  className="
    prose prose-lg max-w-none
    prose-headings:font-semibold
    prose-a:text-blue-600 hover:prose-a:underline

    prose-p:[background-color:unset]
    prose-p:[color:unset]
    prose-span:[background-color:unset]
    prose-span:[color:unset]
  "
  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
/>

      </div>
    </div>
  );
};

export default BlogPost;
