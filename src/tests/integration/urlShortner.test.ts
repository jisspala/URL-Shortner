import UrlService from '../../services/url.service';
import { Result, EncodedData, DecodedData } from '../../interfaces/url.interface';
import constants from '../../utils/constants';

describe('Shorten-Url Integration Testing', () => {
  const urlService: UrlService = new UrlService();
  const url = 'http://amazon.com';
  let encodedUrl: string;

  describe('Encode', () => {
    it('should provide encodedUrl with propper message', async () => {
      const result: Result<EncodedData> = await urlService.encode(url);
      expect(result.message).toEqual(constants.ENCODED_SUCCESS);
      expect(result.success).toEqual(true);
      expect(result).toHaveProperty('data');
      expect(result.data).toHaveProperty('encodedUrl');
      expect(result.data?.encodedUrl).toMatch(/http/);
      if (result.data?.encodedUrl) encodedUrl = result.data?.encodedUrl;
    });

    it('should provide encodedUrl with propper message(already encoded)', async () => {
      const result: Result<EncodedData> = await urlService.encode(url);
      expect(result.message).toEqual(constants.ALREADY_ENCODED);
      expect(result.success).toEqual(true);
      expect(result).toHaveProperty('data');
      expect(result.data).toHaveProperty('encodedUrl');
      expect(result.data?.encodedUrl).toMatch(/http/);
    });
  });

  describe('Decode', () => {
    it('should provide decodedUrl(original) with propper message', async () => {
      const result: Result<DecodedData> = await urlService.decode(encodedUrl);
      expect(result.success).toEqual(true);
      expect(result.message).toEqual(constants.DECODED_SUCCESS);
      expect(result).toHaveProperty('data');
      expect(result.data).toHaveProperty('url');
      expect(result.data?.url).toMatch(/http/);
      expect(result.data?.url).toEqual(url);
    });

    it('should provide sucess as false with propper message for non existent urls', async () => {
      const result: Result<DecodedData> = await urlService.decode('http://localhost:3000/dsds');
      expect(result.success).toEqual(false);
      expect(result.message).toEqual(constants.NOT_FOUND);
    });
  });
});
