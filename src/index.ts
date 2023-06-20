import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from './router';

const app = express();
const server = http.createServer(app);

app.use(
   cors({
      credentials: true,
      origin: ['http://localhost:3000'],
   })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', router());

server.listen(4000, () => {
   console.log('Server running on http://localhost:4000');
});
