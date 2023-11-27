import { Router } from 'express';
import chatRouter from './chat.routes';

const routes = Router();

routes.use('/chat', chatRouter);

export default routes;