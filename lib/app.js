import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import charactersController from './controllers/characters.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json());

app.use('/api/v1/characters', charactersController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
