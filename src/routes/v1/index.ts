import express from 'express';
import userController from '../../controllers/user.controller';
import { validateData } from '../../middlewares/validation';
import { userSchema } from '../../schemas/user.schema';

export const userRouter = express.Router();

userRouter.post('/login', userController.login);
userRouter.post('/user/new', validateData(userSchema), userController.postUser);
