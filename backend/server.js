import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import 'dotenv/config';
import formRouter from './routes/formRoutes.js';
import videoUrlRouter from './routes/videoRoutes.js';
import pdfRouter from './routes/pdfRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware 
app.use(express.json());
app.use(cors());

// DB connect
connectDB();

app.use('/api/form', formRouter);
app.use('/api/videoUrl', videoUrlRouter);
app.use('/api/pdf', pdfRouter);

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Root route
app.get('/', (req, res) => {
  res.send("API Working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
