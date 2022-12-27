require('dotenv').config();
const config={
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
    PORT:process.env.PORT,
}
module.exports=config;