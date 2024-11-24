import express from 'express';
const request = require('supertest')

const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test successful' });
});

describe('POST /login', () => {
  it('should return a success message', async () => {
    const response = await request.agent(app)
    .post('/api/login')
    .send({
      "username": "robert@lifeblue.com",
      "password": "password",
  })
    expect(response.status).toBe(200);
    // expect(response.body.message).toBe('POST: /preauth');
  });
});


describe('POST preauth', () => {
  it('should return a success message', async () => {
    const response = await request.agent(app)
    .post('/payments/merchant/connectcode/preauth.json?api_key=ca9a04bd54b750ff39db931f6923061dcb466734')
    .send({
      "institution_id": "111411141",
      "merchant_id": "127000256000017",
      "terminal_id": "15301",
      "connectcode": "9999957956121052",
      "amount": "6.48",
      "cdf1": "",
      "cdf2": ""
  })
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('POST: /preauth');
  });
});
