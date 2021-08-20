import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import mongoose from "mongoose";
import express_session from "express-session";
import mongoose_session from "mongoose-session";
import getUser from "./controller/getUser";
import dotenv from "dotenv";
import {
  newUser,
  createBattle,
  getBattle,
  newEvent,
  getEvent,
  postLogin,
  battleDetail,
  addPlayer,
  getLoginCheck,
  getLogout,
} from "./api";
import "./db";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT | 3001;

app.use(helmet());
app.use(morgan("tiny"));
app.use(
  express_session({
    secret: "@%#$%#^#dfd@#$@%@",
    resave: false,
    saveUninitialized: false,
    store: mongoose_session(mongoose), // session 저장 장소 (Mongoose를 이용하여 Mongodb로 설정)
    cookie: { maxAge: 3.6e6 * 12 }, // 12시간 뒤 만료(자동 삭제)
  })
);
app.use(express.static(path.join(__dirname, "../build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
app.get("/api", (req, res) => res.json({ username: "hosu" }));
app.get("/getUser", async (req, res) => res.json(await getUser()));
app.get("/getBattle", getBattle);
app.post("/createBattle", createBattle);
//app.get("/newEvent", newEvent);
app.get("/getEvent", getEvent);
app.get("/getLoginCheck", getLoginCheck);
app.get("/getLogout", getLogout);
app.get("/battleDetail/:id", battleDetail);
app.post("/addPlayer", addPlayer);
app.post("/postLogin", postLogin);
//app.get("/newUser", newUser);

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
