const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const connect = require('./schemas');

const drugsRouter = require('./routes/drug');
const authRouter = require('./routes/auth');
const passportConfig = require('./passport');

const app = express();
//passportConfig();
app.set('port', process.env.PORT || 3001);

//DB연결
connect();

//개발용일때만 사용
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: process.env.SCERET,
}))
app.use(cors());
app.use(passport.initialize());
app.use(passport.session())

app.use('/drug', drugsRouter);
app.use('/auth', authRouter);

app.use((err , req, res, next) => {
	console.log(err);
})
app.listen(app.get('port'), () => {
	console.log('서버 시작', app.get('port'), '번 포트에서 대기중');
})