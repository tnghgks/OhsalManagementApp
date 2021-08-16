import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import getUser from "./controller/getUser";
import dotenv from "dotenv";
import {
  newUser,
  newBattle,
  getBattle,
  newEvent,
  getEvent,
  postLogin,
  battleDetail,
} from "./api";
import "./db";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT | 3001;

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "../build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
app.get("/api", (req, res) => res.json({ username: "hosu" }));
app.get("/getUser", async (req, res) => res.json(await getUser()));
app.get("/getBattle", getBattle);
app.post("/newBattle", newBattle);
//app.get("/newEvent", newEvent);
app.get("/getEvent", getEvent);
app.get("/battleDetail/:id", battleDetail);
app.post("/postLogin", postLogin);
//app.get("/newUser", newUser);

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
