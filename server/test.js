const getSign = require('./sign.js')

// const appkey = 's0Z9XHK9D9p3wyYR';
const appkey = 'a95eceb1ac8c24ee28b70f7dbba912bf';

const arr = {
  'app_id'     : 10000,
  'time_stamp' : 1493449657,
  'nonce_str'  : '20e3408a79',
  'key1'       : '腾讯AI开放平台',
  'key2'       : '示例仅供参考',
  'sign'       : ''
}
// arr['sign'] = getSign(arr, appkey)
console.log(getSign(arr, appkey));
// module.exports = arr;