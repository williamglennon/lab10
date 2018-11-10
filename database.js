var pgp = require('pg-promise')();

//const 
var dbConfig = process.env.DATABASE_URL; //{
   //host: 'localhost',
   //port: 5432,
   //database: 'lab6',
   //user: 'postgres',
   //password: 'postgres' // Fill in your PostgreSQL password here. Use empty string
                // if you did not set a password
//};

var db = pgp(dbConfig);

module.exports = db;
