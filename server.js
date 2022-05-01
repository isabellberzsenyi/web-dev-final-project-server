import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import userController from './controllers/users-controller.js';
import likesController from './controllers/likes-controller.js';
import commentsController from "./controllers/comments-controller.js";

const DB_CONNECTION_STRING = 'mongodb+srv://webdev:finalproject@cluster0.f1vq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB_CONNECTION_STRING);

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
likesController(app);
commentsController(app);
app.get('/', (req, res) => {res.send('Hello!')});
app.listen(process.env.PORT || 4000);