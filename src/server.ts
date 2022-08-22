import App from './app';
import logger from './utils/logger';

const app = new App();
app.start();

process.on('uncaughtException', err => {
  logger.error(err);
  process.exit(1);
});

process.on('unhandledRejection', err => {
  logger.error(err);
  process.exit(1);
});
