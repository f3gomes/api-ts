import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'API is online',
    status: 'ok',
    version: '1.0.0',
    docs: '',
    timestamp: new Date().toISOString(),
  });
});

export default router;
