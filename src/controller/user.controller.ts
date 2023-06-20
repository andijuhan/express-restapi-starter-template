import express from 'express';
import prisma from '../utils/prisma';

export const getAllUsers = async (
   req: express.Request,
   res: express.Response
) => {
   try {
      return res.status(200).json({ message: 'oke' }).end();
   } catch (error) {
      console.log(error);
      return res.sendStatus(400);
   }
};
