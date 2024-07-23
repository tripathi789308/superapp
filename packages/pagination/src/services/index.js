const api = {
  getPosts: async () => {
    return (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
  },
  getPostsColumns: () => {
    return ["User", "Id", "Title", "Body"];
  },
};

export default api;
