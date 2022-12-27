require('dotenv').config();
const config={
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
}
module.exports=config;