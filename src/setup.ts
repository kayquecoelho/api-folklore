import dotenv from 'dotenv';

let envFile = '.env';

if (process.env.NODE_ENV === 'development') envFile = '.env.development';
if (process.env.NODE_ENV === 'test') envFile = '.env.test';

export default dotenv.config({ path: envFile });
