require('dotenv').config({ path: __dirname + '/.env' });

const app = require('./src/app');

const PORT = process.env.PORT ? process.env.PORT : process.env.APP_PORT;

app.set('port', PORT);

app.listen(PORT, () => console.log(`Server listening on port ${ PORT }`));