import { Router } from 'express';
import { postEvent, postCompany, getStudents, getStudent, updateStudent } from '../controllers/adminsControllers';

const adminsRouter = Router();

adminsRouter.route('/events')
	.post(postEvent);

adminsRouter.route('/companies')
	.post(postCompany);

adminsRouter.route('/students')
	.get(getStudents);

adminsRouter.route('/students/:studentID')
	.get(getStudent)
	.put(updateStudent);

export default adminsRouter;
