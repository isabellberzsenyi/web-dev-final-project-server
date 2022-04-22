import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import userController from './controllers/users-controller.js';

const LOCAL_DB_URI = 'mongodb://localhost:27017/webdev'

mongoose.connect(LOCAL_DB_URI);

const app = express();

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

const sess = {
  secret: 'keyboard cat',
  cookie: {}
};
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess));

app.use(express.json());
userController(app);
app.get('/', (req, res) => {res.send('Hello!')});
app.listen(4000);