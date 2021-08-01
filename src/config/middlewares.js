const body_parser = require('body-parser')
const compression = require('compression')
const cors = require('cors')

global.fetch = require('node-fetch')

module.exports = app => {
    app.use(body_parser.json())
    app.use(compression())
    app.use(cors())
}