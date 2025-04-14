const axios = require("axios");

const fetchPost = async id => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return results.data;
};

module.exports = fetchPost;
