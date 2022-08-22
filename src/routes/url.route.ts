import { Router } from 'express';
import UrlController from '../controllers/url.controller';

class UrlRoute {
  private router: Router = Router();
  private urlController: UrlController = new UrlController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/encode', this.urlController.encode);
    this.router.get('/decode', this.urlController.decode);
  }

  public getRouter() {
    return this.router;
  }
}

export default UrlRoute;
