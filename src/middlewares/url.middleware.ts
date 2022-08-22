import { Request, NextFunction, Response } from 'express';
import Joi from 'joi';
import constants from '../utils/constants';

class urlMiddleware {
  private urlSchema: Joi.StringSchema = Joi.string().uri().max(1000);

  public encode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const validate = this.urlSchema.validate(req?.body?.url);
    if (validate && validate.error) {
      res.status(400).json({ message: constants.INVALID_URL });
    } else {
      next();
    }
  };

  public decode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const validate = this.urlSchema.validate(req?.query?.encodedUrl);
    if (validate && validate.error) {
      res.status(400).json({ message: constants.INVALID_ENCODEDURL });
    } else {
      next();
    }
  };
}

export default urlMiddleware;
