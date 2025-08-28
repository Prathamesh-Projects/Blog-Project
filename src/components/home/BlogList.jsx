import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://moccasin-ostrich-906220.hostingersite.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Latest Blogs</h2>
      {posts.map((post) => (
        <div key={post.id} className="mb-8 p-4 border rounded-lg shadow">
          {/* Title */}
          <h3
            className="text-xl font-semibold text-blue-600"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Excerpt */}
          <div
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />

          {/* Link to full post (on WP site) */}
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 mt-2 inline-block"
          >
            Read More →
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
