import logger from 'morgan';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerSpec = YAML.load('./spec.yaml');

export default function (app) {
	// Set up morgan logger
	app.use(logger('dev'));

	// Body Parser Middleware + Parse application/json
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	// CONFIGURE SWAGGER
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
