// src/api/wordpress.js
export const fetchPosts = async () => {
  try {
    const response = await fetch("https://moccasin-ostrich-906220.hostingersite.com/wp-json/wp/v2/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
