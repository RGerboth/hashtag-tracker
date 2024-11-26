import express from 'express';
const request = require('supertest')

const app = express();
app.use(express.json());

app.post('/api/login', (req, res) => {
  res.status(200).json({ message: 'Test successful' });
});

describe('POST /api/login', () => {
  it('should return a success message', async () => {
    const response = await request.agent(app)
    .post('/api/login')
    .send({
      "username": "robert.gerboth@gmail.com",
      "password": "password",
  })
    expect(response.status).toBe(200);
  });
});
