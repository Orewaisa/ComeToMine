require('dotenv').config();
const express = require('express');
const dataPage = require('./routes/data-rout.js');
const cors = require('cors');

const PORT = process.env.PORT;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/base', dataPage);

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));