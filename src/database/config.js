module.exports = {

    DATABASE_CONFIG: 
    {
        user: process.env.SQL_SERVER_USERNAME,
        password: process.env.SQL_SERVER_PASSWORD,
        server: process.env.SQL_SERVER_IP,
        port: Number(process.env.SQL_SERVER_PORT),
        instanceName: process.env.SQL_SERVER_INSTANCE,
        connectionTimeout: 60000,
        requestTimeout: 240000,
        pool:{
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            //tdsVersion: '7_1',
            encrypt: false, // Use this if you're on Windows Azure 
            enableArithAbort: true,
        }
    },

    DATABASE_CONFIG_SIGITM: 
    {
        user: 'RELATORIO',
        password: 'UHjbJ5EePd0nE#x3ZK5',
        connectString: '(DESCRIPTION =(ADDRESS_LIST =(ADDRESS = (PROTOCOL = TCP)(HOST = 10.240.47.114)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = 10.240.47.114)(PORT = 1521))(LOAD_BALANCE = yes))(CONNECT_DATA =(SERVER = DEDICATED)(SERVICE_NAME = SIGITM)(FAILOVER_MODE =(TYPE = SELECT)(METHOD = BASIC)(RETRIES = 200)(DELAY = 5))))'
    }
}