import { Router } from 'express'

import { createCourse, listCourses, updateCourseConnectingStudent } from './examples/courses'
import { createStudent, listStudents, updateStudentConnectingCourse } from './examples/students'

const router = Router()

router.get('/courses', listCourses)
router.post('/courses', createCourse)
router.put('/courses/:id', updateCourseConnectingStudent)

router.get('/students', listStudents)
router.post('/students', createStudent)
router.put('/students/:id', updateStudentConnectingCourse)

export const routes = router
