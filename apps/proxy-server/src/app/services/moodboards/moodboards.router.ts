import { Router } from 'express';
import { MoodboardsController } from './moodboards.controller';

const MoodboardsRouter = Router();

MoodboardsRouter.route('/:id').get(MoodboardsController.getMoodboard);

export { MoodboardsRouter };
