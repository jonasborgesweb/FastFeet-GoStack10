import { Router } from 'express';

// Importando as Controllers
import SessionController from './app/controllers/SessionController';
import userController from './app/controllers/UserController';
import recipientController from './app/controllers/RecipientController';

// Importando os Middlewares
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', userController.store);

routes.use(authMiddlewares);

routes.put('/users', userController.update);
routes.post('/recipients', recipientController.store);
routes.put('/recipients', recipientController.update);

export default routes;
