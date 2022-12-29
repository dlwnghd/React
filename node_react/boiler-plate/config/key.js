// 환경변수에 따라
if(process.env.NODE_ENV === 'production') {     // (1) Deploy(배포) 한 후
    module.exports = require('./prod');
} else {                                        // (2) 그 외 일반적으로 Local 환경이라면
    module.exports = require('./dev')
}