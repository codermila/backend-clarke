const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '170317',
        database: 'clarkeenergia',
    }
});