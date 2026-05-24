const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'User Service is healthy' });
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Avinash Sain' },
    { id: 2, name: 'Vikash Kumar' },
    { id: 3, name: 'Satyarth Sharma' },
    { id: 4, name: 'Amit Kumar' },
    { id: 5, name: 'Ankit Soni' },
    { id: 6, name: 'Anshul Sain' },
    { id: 7, name: 'Neelam Verma' },
    { id: 8, name: 'Pankaj Jain' },
    { id: 9, name: 'Sanju Sharma' },
    { id: 10, name: 'Vinod Sain' }
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});