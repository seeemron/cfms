require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend from /public (built client)
const publicPath = path.join(__dirname, 'public');
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}

// Simple API endpoints for demo and compatibility with client
app.get('/api/ping', (req, res) => res.json({message: 'pong'}));

// Dummy ingredients lookup
app.get('/api/ingredients', (req, res) => {
  res.json([
    { code: 'CS0001', brand_name: 'Generic', inci_name: 'Castor Oil', price_per_unit: 320, price_unit: 'kg' },
    { code: 'CS0002', brand_name: 'SupplA', inci_name: 'Tocopherol', price_per_unit: 1200, price_unit: 'kg' }
  ]);
});

// Expose product creation & iteration endpoints (stubs for demo)
app.post('/api/products', (req, res) => {
  // return created product with generated code (mock)
  const { category } = req.body;
  const code = `${(category||'HAIR').toUpperCase()}-25${String(Math.floor(Math.random()*900)+100)}`;
  res.json({ id: Date.now(), product_code: code, ...req.body });
});

app.post('/api/products/:id/iterations', (req, res) => {
  // returns new iteration object
  const productId = req.params.id;
  const iteration_code = req.body.iteration_code || `PRD-${Date.now()}A`;
  res.json({ id: Date.now(), product_id: Number(productId), iteration_code, state_json: req.body.state_json || {} });
});

app.post('/api/iterations/:id/save', (req, res) => {
  // mimic save and versioning
  const version = Math.floor(Math.random()*100)+1;
  res.json({ ok: true, version });
});

// fallback to index.html for client-side routing
app.get('*', (req, res) => {
  const index = path.join(publicPath, 'index.html');
  if (fs.existsSync(index)) return res.sendFile(index);
  res.status(404).send('Not Found');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('Server listening on', PORT));
