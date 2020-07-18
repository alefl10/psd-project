import { Router } from 'express';
import { getStudents } from '../controllers/companiesControllers';

const companyRouter = Router();

companyRouter.route('/students')
	.get(getStudents);

export default companyRouter;
