import express from 'express';
import userRouter from './userRouter';

const router = express.Router();

export default (): express.Router => {
   userRouter(router);
   return router;
};
