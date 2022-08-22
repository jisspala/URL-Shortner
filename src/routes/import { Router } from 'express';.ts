import { Request,NextFunction, Response } from 'express';
import Joi from "joi";


class urlMiddleware {

  private urlSchema:Joi.StringSchema = Joi.string().uri().max(1000);

  public encode = async (req: Request, res: Response,next: NextFunction
  ): Promise<void> => {

    const validate = this.urlSchema.validate(req?.body?.url);
    
    if (validate && validate.error) {
      res.status(400).json({message:"url is not valid"})
    }
    else
    {
     next();
    }
  }

  public decode = async (req: Request, res: Response,next: NextFunction): Promise<void> => {
    const validate = this.urlSchema.validate(req?.query?.encodedUrl);
    if (validate && validate.error) {
      res.status(400).json({message:"encodedUrl is not valid"})
    }
    else
    {
     next();
    }
  }

}

export default urlMiddleware;



// export cont encodeMiddleware = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);

//     if (Authorization) {
//       const secretKey: string = SECRET_KEY;
//       const verificationResponse = (await verify(Authorization, secretKey)) as DataStoredInToken;
//       const userId = verificationResponse.id;
//       const findUser = userModel.find(user => user.id === userId);

//       if (findUser) {
//         req.user = findUser;
//         next();
//       } else {
//         next(new HttpException(401, 'Wrong authentication token'));
//       }
//     } else {
//       next(new HttpException(404, 'Authentication token missing'));
//     }
//   } catch (error) {
//     next(new HttpException(401, 'Wrong authentication token'));
//   }
// };

