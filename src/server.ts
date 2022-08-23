import App from './app';
import logger from './utils/logger';

const app = new App();
app.start();

process.on('uncaughtException', error => {
  logger.error(error,'uncaughtException');
  process.exit(1);
});

process.on('unhandledRejection', error => {
  logger.error(error,'unhandledRejection');
  process.exit(1);
});
