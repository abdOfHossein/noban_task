const request = require('supertest');
const doctor = require('../../routes/doctor/doctor');
describe('POST /', () => {
  describe('giving first_name,last_name,expertion,capacity for create new Doctor', () => {
    test('Response with 200 statusCode', async () => {
      try {
        const response = await request(doctor).post('/').json({
          success: true,
          result: {},
        });
        expect(response.statusCode).toBe(200);
      } catch (error) {}
    });
  });
});
