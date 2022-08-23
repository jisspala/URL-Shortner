import * as nodeUrl from 'node:url';
import { BASE_URL, HOST_NAME } from '../config';
import { Status} from '../interfaces/url.interface';
import constants from '../utils/constants';
import logger from '../utils/logger';

export const createFullUrl = (code: string): string => {
  const fullUrl = `${BASE_URL}/${code}`;
  return fullUrl;
};

export const validateEncodedUrl = (encodedUrl: string): Status => {
  try {
    const { hostname } = nodeUrl.parse(encodedUrl, true);
    if (hostname === HOST_NAME) {
      return { success: true, message: constants.VALID_ENCODEDURL };
    } else {
      return { success: false, message: constants.INVALID_ENCODEDURL };
    }
  } catch (error) {
    logger.error(error, constants.ERROR_IN_VALIDATION);
    return { success: false, message: constants.ERROR_IN_VALIDATION };
  }
};

export const getCode = (encodedUrl: string): string | undefined => {
  try {
    const { path } = nodeUrl.parse(encodedUrl, true);
    let pathParams: string[];
    if (path) {
      pathParams = path.split('/');
      if (pathParams.length > 2) {
      } else {
        return pathParams[1];
      }
    }
  } catch (error) {
    logger.error(error, constants.ERROR_IN_VALIDATION);
  }
};
