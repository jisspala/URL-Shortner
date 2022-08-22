import supertest, { Response } from 'supertest';
import App from '../../app';
import constants from '../../utils/constants';

describe('Shorten Url End to End Testing', () => {
  const app = new App();
  app.start();
  let request: supertest.SuperTest<supertest.Test>;
  let encodedUrl: string;
  let url: string = 'httpd://google.com';
  request = supertest(app.getServer());
  
  describe('[POST] /encode', () => {
    it('should provide encodedUrl with propper mesage', async () => {
      const res: Response = await request.post('/encode').send({
        url,
      });
      encodedUrl = res.body.data.encodedUrl;
      expect(res.body.message).toEqual(constants.ENCODED_SUCCESS);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('data');
    });

  });

  describe('[GET] /decode', () => {
    it('should provide decodedUrl(orginal) with propper mesage', async () => {
      const res: Response = await request.get(`/decode?encodedUrl=${encodedUrl}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual(constants.DECODED_SUCCES);
      expect(res.body).toHaveProperty('data');
    });
  });
});
