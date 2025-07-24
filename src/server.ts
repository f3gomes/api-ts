import cors from 'cors';
import helmet from 'helmet';
import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import corsOptions from './config/cors';

import config from './config';
import limiter from './lib/express-rate-limit';
import { userRouter } from './routes/v1/user.route';
import { courseRouter } from './routes/v1/course.route';

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

(async () => {
  try {
    app.get('/', (_req: Request, res: Response) => {
      res.json({
        message: 'API is on!',
      });
    });

    app.listen(config.PORT, () => {
      console.log(`Servidor online: http://localhost:${config.PORT}`);
    });

    app.use('/api/v1', userRouter);
    app.use('/api/v1', courseRouter);
  } catch (error) {
    console.log('Erro ao inciar o servidor', error);

    if (config.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
})();

export default app;
