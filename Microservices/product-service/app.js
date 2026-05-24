const express = require('express');
const app = express();
const port = 3001;

app.get('/health', (req, res) => {
  res.json({ status: 'Product Service is healthy' });
});

app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 499 },
    { id: 4, name: 'Headphones', price: 199 },
    { id: 5, name: 'Smartwatch', price: 299 },
    { id: 6, name: 'Camera', price: 899 },
    { id: 7, name: 'Printer', price: 149 },
    { id: 8, name: 'Monitor', price: 249 },
    { id: 9, name: 'Keyboard', price: 99 },
    { id: 10, name: 'Mouse', price: 49 }
  ];
  res.json(products);
});

app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});