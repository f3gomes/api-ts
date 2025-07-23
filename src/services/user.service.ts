import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config';
import { prisma } from '../lib/client';
import { User } from '../generated/prisma';

const secret = config.JWT_SECRET_KEY!;

const findUserByUserName = async (userName: string) => {
  return await prisma.user.findUnique({ where: { userName } });
};

const comparePasswords = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

const generateToken = async (user: User) => {
  return jwt.sign({ userId: user.id }, secret, { expiresIn: '1d' });
};

const createUser = async (data: User): Promise<any> => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(data.password, salt);

  const updatedData = {
    ...data,
    password: hashedPassword,
  };

  return prisma.user.create({ data: updatedData });
};

export default {
  createUser,
  generateToken,
  comparePasswords,
  findUserByUserName,
};
