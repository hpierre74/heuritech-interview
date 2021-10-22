import { getMoodboard } from '@heuritech-interview/api';

export class MoodboardsController {
  static async getMoodboard(req, res) {
    try {
      const payload = await getMoodboard(req.params.id);
      return res.json(payload);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}
