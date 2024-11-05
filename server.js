const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, welcome to our server!');
});

app.post('/submit', (req, res) => {
  const { name, company, job, cellphone } = req.body;

  // Simple validation
  if (!name || !company || !job || !cellphone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Respond with the received data
  res.json({
    message: 'Data received successfully',
    data: {
      name,
      company,
      job,
      cellphone
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});