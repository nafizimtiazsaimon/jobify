import express from "express";
import connectDB from "./db/connect.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
import authRouter from './routes/authRoutes.js'

dotenv.config();

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  //throw new Error("error");
  res.send("Hello");
});

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Connected to ${port}`)
});

const start = async () => {
  try{
    await connectDB(process.env.MONGO_URL)
  }catch (error){
    console.log(error)
  }
}

start()