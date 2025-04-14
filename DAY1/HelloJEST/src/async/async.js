const axios = require("axios");

const fetchPost = async id => {
  console.log("Within Fetch Post");
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return results.data;
};

const fetchPostToReturnAPromise = id => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
module.exports = { fetchPost, fetchPostToReturnAPromise };
