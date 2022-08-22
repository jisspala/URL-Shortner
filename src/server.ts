import App from './app';

const app = new App();
app.start();

process.on('uncaughtException', err => {
    console.error(err);
    process.exit(1);
  });
  
  process.on('unhandledRejection', err => {
    console.error(err);
    process.exit(1);
  });
