import express, { Application } from 'express';
import UrlRoute from './routes/url.route';
import logger from './utils/logger';
import { PORT, HOST_NAME } from './config';

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }
  
  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(): void {
    const urlRoute: UrlRoute = new UrlRoute();
    this.app.use('/', urlRoute.getRouter());
  }

 

  public start(): void {
    this.app.listen(PORT, () => {
      logger.info(`App is started as  http://${HOST_NAME}:${PORT}`);
    });
  }

  public getServer(): Application {
    return this.app;
  }
}
export default App;
