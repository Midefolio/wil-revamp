// const baseUrl = "http://localhost:4000/api/v1";
// const baseUrl = " http://192.168.201.76:4000/api/v1";
const baseUrl = " https://will-revamp-be.onrender.com/api/v1";
const loginApi = `${baseUrl}/userAuth/login`;
const allPosts = `${baseUrl}/userAuth/allBlogs`;
const searchpostsApi = `${baseUrl}/userAuth/searchposts`;
const postApi = `${baseUrl}/userAuth/posts`;
const addBlog = `${baseUrl}/blogs/add`;
const allBlogsApi = `${baseUrl}/blogs/all`;
const deleteBlogApi = `${baseUrl}/blogs/delete`;
const searchApi = `${baseUrl}/blogs/search`;
const updateApi = `${baseUrl}/blogs/update`;


export {
  loginApi,
  addBlog,
  allBlogsApi,
  deleteBlogApi,
  searchApi,
  updateApi,
  allPosts,
  postApi,
  searchpostsApi
};
