import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

export async function listCourses(req: Request, res: Response) {
  const courses = await prisma.course.findMany({
    include: {
      students: {
        select: {
          student: true
        }
      }
    }
  })

  return res.json(courses)
}

export async function createCourse(req: Request, res: Response) {
  const { name, description } = req.body

  const course = await prisma.course.create({
    data: { name, description },
    include: {
      students: {
        select: {
          student: true
        }
      }
    }
  })

  return res.status(201).json(course)
}

export async function updateCourseConnectingStudent(req: Request, res: Response) {
  const { id } = req.params
  const { studentId } = req.body

  const course = await prisma.course.update({
    where: { id: Number(id) },
    data: {
      students: {
        create: {
          student: {
            connect: {
              id: studentId,
            }
          }
        }
      }
    },
    include: {
      students: {
        select: {
          student: true
        }
      }
    }
  })

  return res.json(course)
}
