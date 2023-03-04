import express, { Application } from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import cors from 'cors';
import userRoute from './routes/userRoute';
import traderRoute from './routes/traderRoute';
import { MONGO_URI } from "./config/secret";
import mongoose from "mongoose";

dotenv.config();
const app: Application = express();

var corsOption = {
  origin: `*`,
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  credentials: true,
  exposedHeaders: ["x-auth-token"],
  url: [
    "https://localhost:5000",
    "https://54.145.61.200:5000",
  ],
};
app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection open your heart 
const mongoUrl: string = MONGO_URI as string;
mongoose.set('strictQuery', false);
mongoose.connect(mongoUrl)
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err: any) => {
    console.error("MongoDB Connection Error!");
    process.exit();
  });

// if (process.env.NODE_ENV === "production") {

// 	app.use(express.static('./client/'));
// 	app.get('/', (req:Request, res:Response) => {
// 		console.log('sending index.html');
// 		res.sendFile('/dist/index.html');
// 	});
// }
// Primary App Routers
app.use("/api", userRoute);
app.use("/api/trader", traderRoute);

const PORT = process.env.PORT || 3233;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
