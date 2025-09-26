const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
dotenv.config();

// ❗❗ 1. 라우터 파일 불러오기 (경로는 실제 파일 위치에 맞게 수정) ❗❗
const authRouter = require('./routes/authRoutes'); // authRoutes.js 파일이라고 가정

const app = express();
const PORT = process.env.PORT || 3000; // PORT가 없을 경우를 대비해 기본값 설정


app.use(cors({
    origin: process.env.FRONT_ORIGIN,
    credentials: true
}));
app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB 연결 성공"))
    .catch((err) => console.error("MongoDB 연결 실패:", err.message));


app.get("/", (_req, res) => res.send("PhotoMemo API OK"));

// ❗❗ 2. /api 경로에 라우터 등록 ❗❗
// 이렇게 하면 http://localhost:3000/api/register 로 요청을 보내야 합니다.
// 만약 이전처럼 /register로 하고 싶다면 app.use('/', authRouter); 로 하셔도 됩니다.
app.use('/api', authRouter);


// 이 에러 핸들러는 모든 라우터가 등록된 후에 와야 합니다.
app.use((req, res) => {
    // 404 Not Found 에러로 바꾸는 것이 더 적합합니다.
    res.status(404).json({ message: "요청한 경로를 찾을 수 없습니다." });
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});
