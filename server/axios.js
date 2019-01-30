const instance = require('axios')
const axios = instance.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: function (params) {
    return Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&')
  }
});

module.exports = axios