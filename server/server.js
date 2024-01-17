import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";

// routes
import userRoutes from "./routes/userRoutes.js";

// dotenv config
dotenv.config();
const port = process.env.PORT;

// rest obj
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// rest API
app.get("/", (req, res) => {
  res.send("Server is running!");
});
app.use("/api/v1", userRoutes);

// event listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
