import { nanoid } from 'nanoid';
import { Result, EncodedData, DecodedData } from '../interfaces/url.interface';
import constants from '../utils/constants';
import { Url } from '../interfaces/url.interface';
import urlModel from '../models/url.model';

import { createFullUrl, getCode } from '../utils/util';

class UrlService {
  public urls = urlModel;

  public async encode(url: string): Promise<Result<EncodedData>> {
    let result: Result<EncodedData>;
    const record: Url | undefined = this.urls.find(item => item.url === url);

    if (record) {
      const encodedUrl: string = createFullUrl(record.code);
      result = {
        success: true,
        data: { encodedUrl },
        message: constants.ALREADY_ENCODED,
      };
      return result;
    }

    const newRecord: Url = {
      code: nanoid(7),
      url: url,
      createdAt: Date.now(),
    };
    this.urls.push(newRecord);

    const fullUrl: string = createFullUrl(newRecord.code);

    result = {
      success: true,
      data: { encodedUrl: fullUrl },
      message: constants.ENCODED_SUCCESS,
    };
    return result;
  }

  public async decode(encodedUrl: string): Promise<Result<DecodedData>> {
    let result: Result<DecodedData>;

    const code: string | undefined = getCode(encodedUrl);
    const record: Url | undefined = this.urls.find(item => item.code === code);

    if (!record) {
      result = {
        success: false,
        message: constants.NOT_FOUND,
      };
    } else {
      result = {
        success: true,
        data: { url: record.url },
        message: constants.DECODED_SUCCES,
      };
    }
    return result;
  }
}

export default UrlService;
