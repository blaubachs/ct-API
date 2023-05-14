import express from "express";
import dotenv from "dotenv";
import db from "./config/connection";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.once("open", () => {
  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
});
