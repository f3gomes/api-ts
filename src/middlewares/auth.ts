import config from '../config';
import jwt from 'jsonwebtoken';
import { NextFunction } from 'express';

const auth = (req: any, res: any, next: NextFunction) => {
  let token = '';
  const { authorization } = req.headers;
  const secret = config.JWT_SECRET_KEY!;

  if (!authorization)
    return res.status(401).json({
      message: 'Você deve fornecer um token para acessar essa rota',
    });

  token = authorization.split(' ')[1];

  try {
    jwt.verify(token, secret);
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  return next();
};

export default {
  auth,
};
