import { getTrends } from '@heuritech-interview/api';

export class TrendsController {
  static async getTrends(req, res) {
    try {
      const payload = await getTrends(req.query);
      return res.json(payload);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}
