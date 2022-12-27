
const mongoose = require('mongoose')

async function connect() {
     return new Promise((resolve, reject) => {
        mongoose.connect('mongodb+srv://kartik:kartik-123@cluster0.ygh7srm.mongodb.net/?retryWrites=true&w=majority/Todos', (err) => {
            if (err) {
                console.log('Error in connecting to database')
                return reject(err);
            }
            resolve();
        })
    })
}

module.exports = connect;
