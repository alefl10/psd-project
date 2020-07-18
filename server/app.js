import express from 'express';
import appMiddleware from './api/middleware/appMiddleware';
import apiRouter from './api/routes/indexRoutes';

// Set up API Routes
const setAPIRoutes = app => {
	app.use('/api/v1/', apiRouter);
};

const server = {
	startServer: () => new Promise((resolve, reject) => {
		const app = express();
		appMiddleware(app);
		resolve(app);
	}),
	setAPIRoutes,
};

export default server;
