import express from 'express';
import config from '@/config';

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello API',
  });
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port http://localhost:${config.PORT}`);
});
