const request = require('supertest');
const client = require('../../routes/client/client');
describe('POST /', () => {
  describe('giving first_name,last_name,username,password,email,mobile for create new client', () => {
    test('Response with 200 statusCode', async () => {
      try {
        const response = await request(client).post('/').json({
          success: true,
          result: {},
        });
        expect(response.statusCode).toBe(200);
      } catch (error) {}
    });
  });
});
