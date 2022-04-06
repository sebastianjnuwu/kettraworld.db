const JsonDatabase = require("./src/Json");

(function () {
  require('./lib/env/index').config(
    Object.assign(
      {},
      require('./lib/env/options'),
      require('./lib/env/cli-options')(process.argv)
    )
  )
})()


module.exports = { JsonDatabase };