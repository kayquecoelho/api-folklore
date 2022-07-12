import { Router } from 'express';
import songController from '../controllers/songController.js';
import validateSchema from '../middlewares/validateSchema.js';
import songSchema from '../schemas/songSchema.js';

const songRouter = Router();

songRouter.get('/', songController.getAll);
songRouter.get('/:songId', songController.getById);
songRouter.post('/', validateSchema(songSchema), songController.create);
songRouter.post('/:songId/view', songController.incrementViews);

export default songRouter;
