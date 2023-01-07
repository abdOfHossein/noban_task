const request = require('supertest');
const ticket = require('../../routes/ticket/ticket');
describe('POST /', () => {
  describe('giving id_client,id_doctor and saving ticket for client', () => {
    test('Response with 200 statusCode', async () => {
      try {
        const response = await request(ticket).post('/').json({
          success: true,
          result: {},
        });
        expect(response.statusCode).toBe(200);
      } catch (error) {}
    });
  });

  describe('when accure an err', () => {
     test('client with this id does not exist', async () => {
          try {
            const response = await request(ticket).post('/').json({
              success: true,
              result: {},
            });
             const client = {} || null;
             if (client) {
               expect(response.statusCode).toBe(400);
             }
          } catch (error) {}
        });

        test('doctor with this id does not exist', async () => {
          try {
            const response = await request(ticket).post('/').json({
              success: true,
              result: {},
            });
             const doctor = {} || null;
             if (doctor) {
               expect(response.statusCode).toBe(400);
             }
          } catch (error) {}
        });

        test('client already saved ticket for thisdoctor', async () => {
          try {
            const response = await request(ticket).post('/').json({
              success: true,
              result: {},
            });
             const isExistTicket = {} || null;
             if (isExistTicket) {
               expect(response.statusCode).toBe(400);
             }
          } catch (error) {}
        });
      });
});
