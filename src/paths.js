export const routePaths = {
  hot: "/hot",
  new: "/new",
  post: {
    pattern: "/post/:id",
    build: function(id) {
      return `/post/${id}`;
    }
  }
};

export const apiPaths = {
  search: "https://hn.algolia.com/api/v1/search"
};
