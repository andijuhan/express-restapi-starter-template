import jwt, { Secret } from 'jsonwebtoken';

const secretKey: Secret = 'ini-sangat-rahasia';

export const createSessionToken = (userId: string): string => {
   const payload = { userId };

   const option = {
      expiresIn: '1d',
   };

   const token = jwt.sign(payload, secretKey, option);
   return token;
};

export const validateSessionToken = (token: string): object | null => {
   try {
      const decoded = jwt.verify(token, secretKey);
      return decoded as object;
   } catch (error) {
      console.log('gagal memvalidasi session token : ' + error);
      return null;
   }
};
