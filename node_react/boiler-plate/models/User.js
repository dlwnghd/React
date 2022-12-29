const mongoose = require('mongoose');

// 유저 정보 스키마 생성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// 유저의 정보들을 모아두는 모델 생성
const User = mongoose.model('User', userSchema)

// 다른 파일에서도 사용할 수 있도록 exports 설정
module.exports = {User}