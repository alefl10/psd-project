import { Router } from 'express';
import admins from './adminsRoutes';
import companies from './companiesRoutes';
import students from './studentsRoutes';

const apiRouter = Router();

apiRouter.use('/admins', admins);
apiRouter.use('/companies', companies);
apiRouter.use('/students', students);

export default apiRouter;
