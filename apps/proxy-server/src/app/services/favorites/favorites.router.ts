import { Router } from 'express';
import { FavoritesController } from './favorites.controller';

const FavoritesRouter = Router();

FavoritesRouter.route('/').get(FavoritesController.getFavorites);

FavoritesRouter.route('/:id').put(FavoritesController.putFavorite);

FavoritesRouter.route('/:id').delete(FavoritesController.deleteFavorite);

export { FavoritesRouter };
