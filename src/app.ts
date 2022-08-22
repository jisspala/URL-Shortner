import express, { Application } from 'express';
import UrlRoute from './routes/url.route';
const PORT = 3000;
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
      console.info(`App is started`);
    });
  }

  public getServer(): Application {
    return this.app;
  }
}
export default App;
