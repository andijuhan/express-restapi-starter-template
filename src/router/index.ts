import express from 'express';
import userRouter from './user.router';

const router = express.Router();

export default (): express.Router => {
   userRouter(router);
   return router;
};
