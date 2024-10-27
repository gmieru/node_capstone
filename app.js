const express = require("express");
const dbConnect = require("./config/dbConnect");
const cors = require('cors');
const morgan = require('morgan');
require("dotenv").config();


//app = express서버, port = 3000
const app = express();
const port = 3000;

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");


//DB 연결
dbConnect()

// 미들웨어 추가
app.use(express.json()); // JSON 데이터 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 데이터 파싱
app.use(cors()); // CORS 허용
app.use(morgan('dev')); // 로그 출력
app.use(express.static(`${__dirname}/src/public`)); // login.js를 src로 연결


// 라우터 연결
const loginRoutes = require('./routes/loginRoutes');
const mainRoutes = require('./routes/mainRoutes');
const createRoutes = require('./routes/createRoutes');
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");

app.use('/login', loginRoutes);
app.use('/main', mainRoutes);
app.use('/create', createRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);


app.listen(port, () => {
    console.log(`${port}번 포트 서버 실행 중`)
})