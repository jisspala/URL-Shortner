import { Result, EncodedData, DecodedData } from '../interfaces/url.interface';
import constants from '../utils/constants';

class UrlService {
  public async encode(url: string): Promise<Result<EncodedData>> {
    let result: Result<EncodedData>;
    const encodedUrl: string = '';
    result = {
      success: true,
      data: { encodedUrl },
      message: constants.ENCODED_SUCCESS,
    };
    return result;
  }

  public async decode(encodedUrl: string): Promise<Result<DecodedData>> {
    let result: Result<DecodedData>;
    const url: string = '';
    result = {
      success: true,
      data: { url },
      message: constants.DECODED_SUCCES,
    };
    return result;
  }
}

export default UrlService;
