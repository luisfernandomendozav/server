const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, welcome to Node Simple Server!');
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

/* curl -X POST https://ubuntu-s-1vcpu-512mb-10gb-sfo3-01.site/submit \
  -H "Content-Type: application/json" \
  -d '{                
    "name": "John Doe",
    "company": "Acme Corp",
    "job": "Software Engineer",
    "cellphone": "1234567890"
  }' */