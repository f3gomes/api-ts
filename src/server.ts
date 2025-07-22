import cors from 'cors';
import express from 'express';
import config from '@/config';
import { corsOptions } from './config/cors';

const app = express();

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello API',
  });
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port http://localhost:${config.PORT}`);
});
