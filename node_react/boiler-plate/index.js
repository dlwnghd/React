const express = require("express");
const app = express();
const port = 5000;  // 백포트 번호
const { User } = require("./models/User");  // User.js에 만들어둔 User모델을 가져온다
const bodyParser = require("body-parser")   // package.json에 있는 body-parser를 가져온다.
const config = require('./config/key');

// bodyParser에 옵션주기

// application/x-www-form-urlencoded 같이 된 정보를 분석해서 가져오는 역할
app.use(bodyParser.urlencoded({extended: true}));   // requset에 

// application/json과 같이 json타입으로 된 데이터를 가져오는 역할
app.use(bodyParser.json());


const mongoose = require("mongoose") // mongoose 변수 생성

// 버전이 바뀌면서 strictQuery가 필요하다고 해서 추가함
mongoose.set("strictQuery", true);

// 몽고DB에서 만들어준 user ip를 사용하기위한 connect함수
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



// 루트 디렉토리에 app을 열어줌(get방식)
app.get("/", (req, res) => {
    res.send("Hello World!~~안녕하세요 ~유후 ");
});

// 회원가입을 위한 route(post방식)
app.post('/register', (req, res) => {

    // 회원 가입 할때 필요한 정보들을 client에서 가져오면(사용자가 웹사이트에 타이핑한 데이터들)
    // 그것들을 데이터 베이스에 넣어준다.

        // 가져온 User 모델을 변수에 저장
        const user = new User(req.body) // request에 넣을 수 있게 해주는 것은 bodyParser가 있기 때문

        // user모델에 저장
        user.save((err, userInfo) =>{   // 콜백함수로 만약 user모델에 저장하는데 오류가 발생한다면
            if(err) return res.json({sucess: false, err})   // json파일에 sucess가 실패한것과 에러 메세지를 담아서 돌려줌
            return res.status(200).json({   // 만약 오류가 발생하지 않는다면 응답성공 상태와
                sucess:true // json파일에 sucees가 성공한 메세지를 돌려줌
            })
        }) 
})



// 포트번호에 앱을 실행함
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
