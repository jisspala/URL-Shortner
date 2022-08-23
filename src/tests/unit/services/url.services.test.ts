import UrlService from '../../../services/url.service';
import { Result, EncodedData, DecodedData } from '../../../interfaces/url.interface';
import constants from '../../../utils/constants';

describe('Shorten-Url Service Testing', () => {
  const urlService: UrlService = new UrlService();
  const url = 'httpd://fb.com';
  let encodedUrl: string;

  describe('Encode', () => {
    it('should provide encodedUrl with propper mesage', async () => {
      const result: Result<EncodedData> = await urlService.encode(url);

      expect(result.message).toEqual(constants.ENCODED_SUCCESS);
      expect(result.success).toEqual(true);
      expect(result).toHaveProperty('data');
      if (result.data?.encodedUrl) encodedUrl = result.data?.encodedUrl;
    });
  });

  describe('Decode', () => {
    it('should provide decodedUrl(orginal) with propper mesage', async () => {
      const result: Result<DecodedData> = await urlService.decode(encodedUrl);

      expect(result.success).toEqual(true);
      expect(result.message).toEqual(constants.DECODED_SUCCES);
      expect(result).toHaveProperty('data');
    });
  });
});
