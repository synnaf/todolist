
if (process.env.NODE_ENV !== 'production') require('dotenv').config(); 

const config = {
    databaseUrl: process.env.MONGO_DB
} 

module.exports = config; 