const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    UID: {
        type: Number,
        required: true,
        unique: true,
    },
    user_id: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
})

module.exports = mongoose.model("User", UserSchema);