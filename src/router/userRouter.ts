import express from 'express';
import { getAllUsers } from '../controller/userController';

export default (router: express.Router) => {
   router.get('/users', getAllUsers);
};
