const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT,
    secret: process.env.COOKIE_SECRET,
    maxAge: parseInt(process.env.COOKIE_MAX_AGE)
};