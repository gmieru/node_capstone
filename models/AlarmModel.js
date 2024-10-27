const mongoose = require("mongoose")
const Schema = mongoose.Schema

/*할일과 일정 둘 다 알림을 쓰기 때문에 구조를 변경할 필요가 있음
일정은 하루 전, 일주일 전 등 알림이 필요하고
할일은 30분 전 10분 전 이런것도 쓰이기 때문에
모델을 나누거나 해야할듯
*/
const AlarmSchema = new Schema({
    alarmTime: {
      type: String,
      required: true,
      enum: ["none", "hour", "day", "week", "month"],
      default: "none",
    },
  });
  
  module.exports = mongoose.model("Alarm", AlarmSchema);
  