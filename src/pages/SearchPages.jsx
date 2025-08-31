// src/pages/SearchPage.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";

// Dummy data – replace this with your real posts (WP or local JSON)
const allPosts = [
  { id: 1, title: "Marathi Poem: Inspiration", category: "Poems & Stories", link: "/poems/1" },
  { id: 2, title: "Digital India Initiative", category: "Current Affairs", link: "/current-affairs/2" },
  { id: 3, title: "Hedge Fund", category: "Finance & Economy", link: "/post/19" },
  { id: 4, title: "Chandrayaan-3 Success Story", category: "AI & Technology", link: "/ai-&-technology/4" },
  { id: 5, title: "History of the Maratha Empire", category: "History & Culture", link: "/history/5" },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = () => {
  const query = useQuery();
  const searchTerm = query.get("q")?.toLowerCase() || "";

  // Filter posts based on title or category
  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{searchTerm}"</h1>

      {filteredPosts.length > 0 ? (
        <ul className="space-y-4">
          {filteredPosts.map((post) => (
            <li key={post.id} className="p-4 border rounded-lg hover:shadow-md transition">
              <Link to={post.link} className="text-blue-600 font-semibold hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-600 text-sm">{post.category}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No posts found matching your search.</p>
      )}
    </div>
  );
};

export default SearchPage;
