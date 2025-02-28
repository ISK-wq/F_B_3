const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/products', (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8');
    res.json(JSON.parse(data));
});

app.listen(PORT, () => console.log(`Product server running at http://localhost:${PORT}`));
