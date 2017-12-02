var axios = require('axios');

const COSMIC_URL = 'https://api.cosmicjs.com/v1/matttea-blog-app/object-type/articles';

module.exports = {
  getBlogs: function (blogs) {
    var requestUrl = `${COSMIC_URL}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res.data); // maybe just res
      return res.data; // maybe just res
    }, function (err) {
      alert('promise error', err);
    });
  }
}
