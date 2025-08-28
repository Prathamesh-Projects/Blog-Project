import React, { useEffect, useState } from "react";

const WordPressPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://moccasin-ostrich-906220.hostingersite.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📝 Latest Posts</h2>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="p-4 border rounded-lg shadow-sm">
              <h3
                className="text-xl font-semibold"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Read more →
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WordPressPosts;
