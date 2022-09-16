const express = require('express'); // express 모듈을 불러오는 코드
const app = express(); // app이란 변수에 express를 담음
const PORT = process.env.PORT || 4000; // 4000이란 포트 번호에 서버 할당

app.get('/', (req, res) => {
    res.send(`Welcome to Jungi's blog`);
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})