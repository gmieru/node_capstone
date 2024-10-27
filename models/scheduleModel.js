const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ScheduleSchema = new Schema({
    // id를 MongoDB에서 제공해주는 _id 필드를 통해 식별할지 고민해보자
    schedule_id: {
        type: Number,
        required: true,
        unique: true,
    },
    schedule_title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    recurrence: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recurrence",
    },
    alarm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Alarm",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
}, {
    timestamps: true    //일정 생성 및 수정 시간을 자동으로 관리
})

module.exports = mongoose.model("Schedule", ScheduleSchema);