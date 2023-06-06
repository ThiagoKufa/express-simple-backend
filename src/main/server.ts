import express from 'express';
import userRouter from './routes/user';
import { errorHandler } from './middleware/error-handler';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT =  process.env.PORT || 3000 ;

// Middleware global
app.use(express.json());

// Rotas
app.use('/api/user', userRouter);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});