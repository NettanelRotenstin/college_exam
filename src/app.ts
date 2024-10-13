import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express'
import connectDB from './config/DB';
import { specs } from './config/swagger-express';
import authRouter from './routes/authRouter';
import teacherRouter from './routes/teacherRouter';
import studentRouter from './routes/studentRouter';



dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

connectDB()

app.use(cookieParser())

app.use('/swagger', swaggerUi.serve,swaggerUi.setup(specs));

// Routes
app.use("/auth", authRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);


 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;