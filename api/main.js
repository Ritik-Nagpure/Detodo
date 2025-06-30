import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser  from 'body-parser';


port = process.env.PORT || 3000;
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen (3000, () => {
    console.log('Server is running on port 3000');
});

