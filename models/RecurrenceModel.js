const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RecurrenceSchema = new Schema({
    isRecurring: {
      type: Boolean,
      default: false,
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"], // 반복 주기 설정
    },
    endRecurrence: {
      type: Date, // 반복 일정 종료 날짜
      // default: 1년
    },
  });
  
  module.exports = mongoose.model("Recurrence", RecurrenceSchema);
  