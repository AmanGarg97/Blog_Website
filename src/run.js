const app = require('../src/server').app
const db = require('./models/db').db
const log = require('debug')('app:run')

async function run(){

    await db.sync({force : true})

    console.log('Database is ready')

    app.listen('2929' , () => {
        console.log("Server Started at http://localhost:2929")
    })

}

run()
