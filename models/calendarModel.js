const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CalendarSchema = new Schema ({
    calendar_id: {
        type: Number,
        required: true,
        unique: true,
    },
    calendar_title: {
        type: String,
        required: true,
    },
    /* 이거 없어도 될 듯 화면에서 보여지는 부분은 제목만 보이므로 설명은 세부 일정에서 확인할 듯
    description: {
        type: String,
    },
    */
    isShared: {
        type: Boolean,
        default: false,
    },
    calendar_link: {
        type: String,
    },
    members: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

module.exports = mongoose.model("Calendar", Ca)