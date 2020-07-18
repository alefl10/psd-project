import { Router } from 'express';
import { postResume } from '../controllers/studentsControllers';

const studentRouter = Router();

studentRouter.route('/resume')
	.post(postResume);

export default studentRouter;
