import { User } from '../generated/prisma';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from '../services/user.service';

const login = async (req: Request, res: Response): Promise<any> => {
  const { userName, password } = req.body;

  try {
    const user = await userService.findUserByUserName(userName);

    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Usuário não encontrado' });
    }

    const isPasswordMatch = await userService.comparePasswords(
      password,
      user.password,
    );

    if (!isPasswordMatch) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Senha incorreta' });
    }

    const token = await userService.generateToken(user);

    return res.status(StatusCodes.OK).json({ userName, token });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

const postUser = async (req: Request, res: Response): Promise<User | any> => {
  try {
    const user = await userService.createUser(req.body);
    delete user.password;

    return res.status(StatusCodes.CREATED).json({ user });
  } catch (error: any) {
    const errorMessages = error.message.split('\n');
    const lastErrorMessage = errorMessages[errorMessages.length - 1];

    res.status(500).json({ error: lastErrorMessage });
    console.log(error);
  }
};

export default {
  postUser,
  login,
};
