const req = require('./http.js')

module.exports = {
  login: (params) => req('POST', 'user/login', params)
}