import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Classificacao. Porta ${PORT}.`);
});
