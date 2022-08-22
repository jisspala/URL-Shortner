import { Router } from 'express';
import UrlController from '../controllers/url.controller';
import urlMiddleware from '../middlewares/url.middleware'


class UrlRoute {
  private router: Router;
  private urlController: UrlController = new UrlController();
  private urlMiddleware:urlMiddleware = new urlMiddleware();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/encode', this.urlMiddleware.encode,this.urlController.encode);
    this.router.get('/decode', this.urlMiddleware.decode,this.urlController.decode);
  }

  public getRouter() {
    return this.router;
  }
}

export default UrlRoute;
