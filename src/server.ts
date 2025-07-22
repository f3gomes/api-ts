import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import corsOptions from './config/cors';

import config from '@/config';
import limiter from '@/lib/express-rate-limit';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  compression({
    threshold: 1024,
  }),
);

app.use(helmet());
app.use(limiter);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello API',
  });
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port http://localhost:${config.PORT}`);
});
