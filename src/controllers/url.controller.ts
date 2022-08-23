import { Request, Response } from 'express';
import constants from '../utils/constants';
import UrlService from '../services/url.service';
import { Result, EncodedData, DecodedData } from '../interfaces/url.interface';
import { validateEncodedUrl } from '../utils/util';

class UrlController {
  private urlService: UrlService = new UrlService();

  public encode = async (req: Request, res: Response): Promise<void> => {
    const url: string = req.body.url as string;

    const encodeResult: Result<EncodedData> = await this.urlService.encode(url);
    if (encodeResult.success) {
      res.status(200).json({ data: encodeResult.data, message: encodeResult.message });
    } else {
      res.status(400).json({ message: encodeResult.message });
    }
  };

  public decode = async (req: Request, res: Response): Promise<void> => {
    let decodedResult: Result<DecodedData>;

    const encodedUrl: string = req.query.encodedUrl as string;
    const isValid = validateEncodedUrl(encodedUrl);

    if (isValid.success) {
      decodedResult = await this.urlService.decode(encodedUrl);
      if (decodedResult.success) {
        res.status(200).json({ data: decodedResult.data, message: decodedResult.message });
      } else {
        res.status(400).json({ message: decodedResult.message });
      }
    } else {
      res.status(400).json({ message: constants.INVALID_ENCODEDURL });
    }
  };
}

export default UrlController;
