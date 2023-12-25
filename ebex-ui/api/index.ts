import express from "express";
import userRouter from "./routes/user";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

app.listen(3001, () => console.log("server is running"));
