const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = async() => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT)
        console.log("몽고DB 연결 성공")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = dbConnect