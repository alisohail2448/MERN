import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv"
import DefaultData from "./default.js";


dotenv.config()

const app = express();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, ()=>console.log(`Server is successfully run on PORT ${PORT}`));


DefaultData();