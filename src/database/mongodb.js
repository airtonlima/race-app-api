const { MongoClient } = require('mongodb');

const config = {
    IP: process.env.MONGODB_IP,
    PORT: process.env.MONGODB_PORT,
    USERNAME: process.env.MONGODB_USERNAME,
    PASSWORD: process.env.MONGODB_PASSWORD,
    DATABASE: process.env.MONGODB_DATABASE,
    COLLECTION: 'races'
};

class MongoDB
{
    constructor() {}

    async factory()
    {
        // Replace the following with your MongoDB deployment's connection string.
        // ${config.USERNAME}:${config.PASSWORD}@
        const URI = `mongodb://${config.IP}:${config.PORT}/?autdhSource=admin&readPreference=primary&ssl=false`;
        return await new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async findOne(filter = {})
    {
        const client = await this.factory();

        try
        {
            await client.connect();

            const database = client.db(config.DATABASE);
            const collection = database.collection(config.COLLECTION);

            return await collection.findOne(filter);
            
        } catch (err) {
            throw err;
        } finally {
            await client.close();
        }
    }

    async find(filter = {})
    {
        const client = await this.factory();

        try
        {
            await client.connect();

            const database = client.db(config.DATABASE);
            const collection = database.collection(config.COLLECTION);

            return await collection.find(filter).toArray();
            
        } catch (err) {
            throw err;
        } finally {
            await client.close();
        }
    }

    async aggregate(pipeline)
    {
        const client = await this.factory();

        try
        {
            await client.connect();

            const database = client.db(config.DATABASE);
            const collection = database.collection(config.COLLECTION);

            return await collection.aggregate(pipeline).toArray();
            
        } catch (err) {
            throw err;
        } finally {
            await client.close();
        }
    }

    async insert(params)
    {
        const client = await this.factory();

        try
        {
            await client.connect();

            const database = client.db(config.DATABASE);
            const collection = database.collection(config.COLLECTION);

            return await collection.insert(params);
            
        } catch (err) {
            throw err;
        } finally {
            await client.close();
        }
    }
}

module.exports = new MongoDB();
