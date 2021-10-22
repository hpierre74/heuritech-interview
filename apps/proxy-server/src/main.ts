/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';
import { TrendsRouter } from './app/services/trends/trends.router';
import { FavoritesRouter } from './app/services/favorites/favorites.router';
import { MoodboardsRouter } from './app/services/moodboards/moodboards.router';

const app = express();

app.use(cors());

// Expose api routes
app.use('/trends', TrendsRouter);
app.use('/favorite_trends', FavoritesRouter);
app.use('/moodboards', MoodboardsRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
