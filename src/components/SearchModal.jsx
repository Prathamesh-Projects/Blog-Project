import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ isOpen, onClose, data }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredResults = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50">
      <div className="bg-white w-full max-w-lg mt-20 rounded-xl shadow-lg p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-4 max-h-60 overflow-y-auto">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(item.href);
                  onClose();
                }}
                className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                {item.title}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
