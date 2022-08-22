import { Request} from 'express';
import express from 'express';

import constants from '../../../utils/constants';
import UrlController from '../../../controllers/url.controller';
import UrlService from '../../../services/url.service';

const encode = jest.fn();
const decode = jest.fn();

jest.mock('../../../services/url.service', () => {
  return jest.fn().mockImplementation(() => {
    return {
      encode: encode,
      decode: decode,
    };
  });
});

describe('Shorten-Url Controllers Testing', () => {
  describe('Encode', () => {
    it('Encoding Controller should call encoding service ', async () => {
      const urlController:UrlController = new UrlController();
      const urlService:UrlService = new UrlService();

      let dummyRequest: Request = express.request;
      dummyRequest.body = { url: 'http://google.com' };

      urlController.encode(dummyRequest, express.response);
      expect(urlService.encode).toHaveBeenCalledTimes(1);
    });
  });

  describe('Decode', () => {
    it('Decoding Controller should call decoding service', async () => {
      const urlController:UrlController = new UrlController();
      const urlService:UrlService = new UrlService();

      let dummyRequest: Request = express.request;
      dummyRequest.query = { encodedURL: 'http://localhost:3000/ssasa' };
      
      urlController.decode(dummyRequest, express.response);
      expect(urlService.decode).toHaveBeenCalledTimes(1);
    });
  });
});
