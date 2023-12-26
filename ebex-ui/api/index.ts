import express from "express";
import userRouter from "./routes/user";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server is running on port ${port}`));
