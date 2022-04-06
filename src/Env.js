(function () {

  require('../lib/env/index').config(

    Object.assign(

      {},

      require('../lib/env/options'),

      require('../lib/env/cli-options')(process.argv)

    )

  )

})()

