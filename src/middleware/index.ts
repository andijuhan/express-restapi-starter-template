import express from 'express';

export const isAuthenticated = async (
   req: express.Request,
   res: express.Response,
   next: express.NextFunction
) => {
   try {
      //mendapatkan sesion token dari cookie browser
      const sessionToken = req.cookies['APP-AUTH'];

      if (!sessionToken) {
         return res.sendStatus(403);
      }

      return next();
   } catch (error) {
      console.log(error);
   }
};
