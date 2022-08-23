import { BASE_URL, HOST_NAME } from '../config';
import * as nodeUrl from 'node:url';

export const createFullUrl = (code: string): string => {
  const fullUrl = `${BASE_URL}/${code}`;
  return fullUrl;
};

export const validateEncodedUrl = (encodedUrl: string): boolean => {
  const { hostname } = nodeUrl.parse(encodedUrl, true);
  return hostname === HOST_NAME;
};
export const getCode = (encodedUrl: string): string | undefined => {
  const { path } = nodeUrl.parse(encodedUrl, true);
  let pathParamas: string[];
  if (path) {
    pathParamas = path.split('/');
    if (pathParamas.length > 2) {
    } else {
      return pathParamas[1];
    }
  }
};
