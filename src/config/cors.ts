import type { CorsOptions } from 'cors';
import config from '@/config';

export const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (
      !origin ||
      config.NODE_ENV === 'development' ||
      config.WHITELIST_ORIGINS.includes(origin)
    ) {
      callback(null, true);
    } else {
      callback(
        new Error(`CORS Error: ${origin} is not allowed by CORS`),
        false,
      );

      console.log(`CORS Error: ${origin} is not allowed by CORS`);
    }
  },
};
