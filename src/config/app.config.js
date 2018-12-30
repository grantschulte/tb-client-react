import prodConfig from './app.config.prod';
import devConfig from './app.config.dev';

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

export default config;