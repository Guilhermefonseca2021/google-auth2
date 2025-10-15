import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  envVars: process.env.EXPRESS_NODE_SESSION || '',
  frontendUrl: process.env.FRONTEND_URL || ''
};

export default config