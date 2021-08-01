const fs = require('fs').promises;

class JwtSecret 
{
    constructor() {}

    async getKey()
    {
        try
        {
            return await fs.readFile(`${__dirname}/Secret.key`, 'utf8');
            
        } catch (err) {
            console.error(err.stack);
            throw err;
        }
    }
}

module.exports = new JwtSecret();