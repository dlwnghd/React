const express = require("express");
const app = express();
const port = 5000;                  // 백포트 번호

const mongoose = require("mongoose") // mongoose 변수 생성

// 버전이 바뀌면서 strictQuery가 필요하다고 해서 추가함
mongoose.set("strictQuery", true);

mongoose.connect('mongodb+srv://LeeJuhong:dlwnghd980513@boilerplate.bhjgkfc.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



// 루트 디렉토리에 app을 열어줌
app.get("/", (req, res) => {
    res.send("Hello World!~~안녕하세요 ~ ");
});

// 포트번호에 앱을 실행함
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
