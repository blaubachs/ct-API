import express from "express";
import dotenv from "dotenv";
import db from "./config/connection";
import routes from "./controllers";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
});
