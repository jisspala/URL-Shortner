import supertest, { Response } from 'supertest';
import App from '../../app';
import constants from '../../utils/constants';

describe('Shorten Url End to End Testing', () => {
  const app = new App();
  app.start();
  let encodedUrl: string;
  const url = 'httpd://google.com';
  const request: supertest.SuperTest<supertest.Test> = supertest(app.getServer());
  
  describe('[POST] /encode', () => {
    it('should provide encodedUrl with propper mesage', async () => {
      const res: Response = await request.post('/encode').send({
        url,
      });
      encodedUrl = res.body.data.encodedUrl;
      expect(res.body.message).toEqual(constants.ENCODED_SUCCESS);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('data');
      expect(res.body.data).toHaveProperty('encodedUrl');
      expect(res.body.data.encodedUrl).toMatch(/http/);
    });

    it('should provide encodedUrl with propper mesage(already encoded)', async () => {
      const res: Response = await request.post('/encode').send({
        url,
      });
      expect(res.body.message).toEqual(constants.ALREADY_ENCODED);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('data');
      expect(res.body.data).toHaveProperty('encodedUrl');
      expect(res.body.data.encodedUrl).toMatch(/http/);
    });

    it('should provide statusCode 400 with propper mesage for invalidURL', async () => {
      const res: Response = await request.post('/encode').send({
        url: 'invalidURL',
      });
      expect(res.statusCode).toEqual(400);
      expect(res.body.message).toEqual(constants.INVALID_URL);
    });

  });

  describe('[GET] /decode', () => {
    it('should provide decodedUrl(orginal) with propper mesage', async () => {
      const res: Response = await request.get(`/decode?encodedUrl=${encodedUrl}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual(constants.DECODED_SUCCES);
      expect(res.body).toHaveProperty('data');
      expect(res.body.data).toHaveProperty('url');
      expect(res.body.data.url).toMatch(/http/);
      expect(res.body.data.url).toEqual(url);
    });
    it('should provide statusCode 400 with propper mesage for non existent urls', async () => {
      const res: Response = await request.get(`/decode?encodedUrl=http://localhost:3000/dsds`);
      expect(res.statusCode).toEqual(400);
      expect(res.body.message).toEqual(constants.NOT_FOUND);
    });

    it('should provide statusCode 400 with propper mesage for invalid encodedUrl', async () => {
      const res: Response = await request.get(`/decode?encodedUrl=invalidURL`);
      expect(res.statusCode).toEqual(400);
      expect(res.body.message).toEqual(constants.INVALID_ENCODEDURL);
    });
  });
});
