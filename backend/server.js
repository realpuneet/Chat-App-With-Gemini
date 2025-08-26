import http from 'http';
import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';
import connectDB from './src/config/db.js';

const port = process.env.PORT || 3000;

const server = http.createServer(app);


connectDB();

server.listen(port, () => {
    console.log(`server is running ${port}`);
});