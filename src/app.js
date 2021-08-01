const app = require('express')();
const consign = require('consign');

consign({ cwd: 'src', verbose: false })
    .include('./config/passport.js')
    .include('./config/middlewares.js')
    .include('./enum')
    .include('./utils')
    .include('./routes')
    .include('./models')
    .include('./services')
    .include('./errors')
    .include('./enum')
    .then('./config/router.js')
    .into(app);

module.exports = app;