import {
  deleteFavorite,
  getFavorites,
  putFavorite
} from '@heuritech-interview/api';

export class FavoritesController {
  static async getFavorites(req, res) {
    try {
      const payload = await getFavorites(req.query);
      return res.status(200).json(payload);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async deleteFavorite(req, res) {
    try {
      const payload = await deleteFavorite(req.params.id);
      return res.status(204).send(payload);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async putFavorite(req, res) {
    try {
      const payload = await putFavorite(req.params.id);
      return res.status(204).send(payload);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}
