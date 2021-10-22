import { Router } from 'express';
import { TrendsController } from './trends.controller';

const TrendsRouter = Router();

TrendsRouter.route('/').get(TrendsController.getTrends);

export { TrendsRouter };
