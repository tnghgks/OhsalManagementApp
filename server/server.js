import express from "express";
import path from "path";
import getUser from "./controller/getUser";
import {newBattle, getBattle }from "./api";
import "./db";

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname,"../build")));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/api', (req, res) => res.json({username:"hosu"}));
app.get('/getUser' , async(req, res) => res.json(await getUser()));
app.get('/getBattle' , getBattle);
app.get('/newBattle' , newBattle);

app.listen(port, () => {
  console.log(`listening at ${port}`)
})