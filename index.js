async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    throw error;
  }
}

// IMPORTANT: export for Mocha tests
module.exports = { getPosts };