import Battle from "./Models/Battle";
import Event from "./Models/Event";
import User from "./Models/User";
import bcrypt from "bcrypt";

export const newBattle = async (req, res) => {
  await Battle.create({
    title: "hosusBattle",
    createAt: "2021-08-12",
    createBy: "HOSU",
  });
  return res.status(200);
};

export const getBattle = async (req, res) => {
  const result = await Battle.find({});
  return res.json(result);
};

export const newEvent = async (req, res) => {
  await Event.create({
    title: "오살과 함께하는 즐거운 내전이벤트",
    discription: "다음과 같이 개최합니다.",
    createAt: "2021-08-14",
    createBy: "호수",
  });
  return res.status(200);
};

export const getEvent = async (req, res) => {
  const result = await Event.find({});
  return res.json(result);
};

export const postLogin = async (req, res) => {
  const { id, passwd } = req.body;
  const user = await User.find({ name: id });

  if (user) {
    bcrypt.compare(passwd, user[0].password, (err, result) => res.send(result));
  } else {
    res.send(false);
  }
};

export const newUser = async (req, res) => {
  bcrypt.hash("o1h2s3a4l@", 10, async (err, hash) => {
    await User.create({
      name: "ohsalAdmin",
      password: hash,
      admin: true,
    });
  });

  return res.status(200);
};
