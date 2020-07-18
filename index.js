/* eslint-disable no-unused-vars */
import server from './server/app';
// import config from './server/config/config';

const PORT = 5000;

server.startServer()
	.then(app => {
		// Redundant checking... but just in case
		// const PORT = process.env.NODE_ENV ? config.serverPORT : 4000;
		app.listen(PORT, () => {
			console.log(`Server is up and running on ${PORT}`);
			server.setAPIRoutes(app);
		});

		// ERROR HANDLING
		app.on('error', error => {
			console.log('SERVER error', error);
		});
	});
// .catch(err => console.log('ERROR));
