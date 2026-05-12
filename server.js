const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.json({ status: 'ok', version: '1.0.0', env: process.env.NODE_ENV }));
app.get('/health', (req, res) => res.status(200).send('OK'));
app.listen(port, () => console.log(`App running on port ${port}`));
