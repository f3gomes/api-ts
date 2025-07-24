import express from 'express';
import middleware from '../../middlewares/auth';
import courseController from '../../controllers/course.controller';
import { validateData } from '../../middlewares/validation';
import { courseSchema } from '../../schemas/course.schema';

export const courseRouter = express.Router();

courseRouter.get('/course/list', middleware.auth, courseController.findAll);

courseRouter.post(
  '/course/new',
  middleware.auth,
  validateData(courseSchema),
  courseController.create,
);

courseRouter.patch(
  '/course/edit/:id',
  middleware.auth,
  courseController.update,
);

courseRouter.delete(
  '/course/edit/:id',
  middleware.auth,
  courseController.remove,
);
