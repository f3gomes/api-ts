import { Request, Response } from 'express';
import { Course } from '../generated/prisma';
import { StatusCodes } from 'http-status-codes';
import courseService from '../services/course.service';

const create = async (req: Request, res: Response): Promise<Course | any> => {
  try {
    const course = await courseService.createCourse(req.body);

    return res.status(StatusCodes.CREATED).json({ course });
  } catch (error: any) {
    const errorMessages = error.message.split('\n');
    const lastErrorMessage = errorMessages[errorMessages.length - 1];

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: lastErrorMessage });
    console.log(error);
  }
};

const findAll = async (
  req: Request,
  res: Response,
): Promise<Course[] | any> => {
  try {
    const courses = await courseService.findAllCourses();

    return res.status(StatusCodes.OK).json({ courses });
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};

const update = async (req: Request, res: Response): Promise<Course[] | any> => {
  try {
    const updatedCourse = await courseService.updateCourse(
      req.params.id,
      req.body,
    );

    return res.status(StatusCodes.OK).json({ updatedCourse });
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};

const remove = async (req: Request, res: Response): Promise<Course[] | any> => {
  try {
    const deleteCourse = await courseService.deleteCourse(req.params.id);

    return res.status(StatusCodes.OK).json({ deleteCourse });
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};

export default {
  create,
  findAll,
  update,
  remove,
};
