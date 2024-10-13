import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express'



dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

connectDB();

app.use(cookieParser())

app.use('/swagger', swaggerUi.serve,swaggerUi.setup(specs));

// Routes
app.use("/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);


// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;