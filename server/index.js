const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())

// 경고나 오류를 감지하지 못함
// 응용 프로그램/x-www-form-urlencoded 포스트 데이터의 파싱 지원
app.use(bodyParser.urlencoded({ extended: true }));
//json 데이터를 얻기 위해
// 응용 프로그램/json 형식 포스트 데이터의 파싱 지원
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));
app.use('/api/favorite', require('./routes/favorite'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/like', require('./routes/like'));


//노드 js 서버에 있는 이미지를 클라이언트에 표시합니다(react js).
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

if (process.env.NODE_ENV === "production") {

  // 동적 폴더 설정
  app.use(express.static("client/build"));

  // 모든 페이지 경로에 대한 index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});