import express from 'express';
import { getAllUsers } from '../controller/user.controller';

export default (router: express.Router) => {
   router.get('/users', getAllUsers);
};
