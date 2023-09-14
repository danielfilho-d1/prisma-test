import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

export async function listStudents(req: Request, res: Response) {
  const students = await prisma.student.findMany({
    include: {
      courses: {
        select: {
          course: true
        }
      }
    }
  })

  return res.json(students)
}

export async function createStudent(req: Request, res: Response) {
  const { name } = req.body

  const student = await prisma.student.create({
    data: { name },
    include: {
      courses: {
        select: {
          course: true
        }
      }
    }
  })

  return res.status(201).json(student)
}

export async function updateStudentConnectingCourse(req: Request, res: Response) {
  const { id } = req.params
  const { courseId } = req.body

  const student = await prisma.student.update({
    where: { id: Number(id) },
    data: {
      courses: {
        create: {
          course: {
            connect: {
              id: courseId,
            }
          }
        }
      }
    },
    include: {
      courses: {
        select: {
          course: true
        }
      }
    }
  })

  return res.json(student)
}
