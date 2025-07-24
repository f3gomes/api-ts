import { prisma } from '../lib/client';
import { Course } from '../generated/prisma';

const createCourse = async (data: Course): Promise<any> => {
  const { title, description, duration, imageUrl } = data;

  const course = await prisma.course.create({
    data: {
      title,
      description,
      duration,
      imageUrl,
    },
  });

  return course;
};

const findAllCourses = async (): Promise<Course[]> => {
  const courses = await prisma.course.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  return courses;
};

const updateCourse = async (
  id: string,
  data: Partial<Course>,
): Promise<any> => {
  const course = await prisma.course.findUnique({ where: { id } });

  if (!course) {
    throw new Error('Curso não encontrado');
  }

  if (course) {
    const updatedCourse = await prisma.course.update({
      where: { id },
      data,
    });

    return updatedCourse;
  }
};

const deleteCourse = async (id: string): Promise<any> => {
  const course = await prisma.course.findUnique({ where: { id } });

  if (!course) {
    throw new Error('Curso não encontrado');
  }

  if (course) {
    const deletedCourse = await prisma.course.delete({ where: { id } });

    return deletedCourse;
  }
};

export default {
  createCourse,
  findAllCourses,
  updateCourse,
  deleteCourse,
};
