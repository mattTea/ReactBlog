var axios = require('axios');

const COMMENTS_URL = 'https://api.cosmicjs.com/v1/matttea-blog-app/object-type/comments';

module.exports = {
  getComments: function (comments) {
    var requestUrl = `${COMMENTS_URL}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res.data); // maybe just res
      return res.data; // maybe just res
    }, function (err) {
      alert('promise error', err);
    });
  }
}
