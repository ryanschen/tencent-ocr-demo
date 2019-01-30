const md5 = require('md5')

const getSign = function (args, appkey) {
  let keys = Object.keys(args)
  keys = keys.sort()
  let newArgs = {}
  keys.forEach(function (key) {
    if (args[key] !== '') {
      newArgs[key] = args[key]
    }
  })

  let string = ''
  for (let k in newArgs) {
    string += '&' + k + '=' + encodeURIComponent(newArgs[k])
  }
  string = string.substr(1) + '&app_key=' + appkey
  return md5(string).toLocaleUpperCase()
};

const createNonceStr = function () {
  return Math.random().toString(36).substr(2, 15)
}

const createTimestamp = function () {
  return parseInt(new Date().getTime() / 1000) + ''
}

module.exports = {
  getSign,
  createNonceStr,
  createTimestamp
}