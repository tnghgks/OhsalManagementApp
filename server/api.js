import Battle from "./Models/Battle";
import Event from "./Models/Event";
import User from "./Models/User";
import bcrypt from "bcrypt";

export const newBattle = async (req, res) => {
  const { title, createBy, round, startDate } = req.body;
  try {
    const battle = await Battle.create({
      title,
      createBy,
      round,
      startDate,
    });
  } catch (e) {
    console.log(e);
    return res.status(401);
  } finally {
    return res.status(200);
  }
};

export const getBattle = async (req, res) => {
  const result = await Battle.find({});
  return res.json(result);
};

export const newEvent = async (req, res) => {
  const { title, discription, createBy } = req.body;
  try {
    const battle = await Event.create({
      title,
      discription,
      createBy,
    });
  } catch (e) {
    console.log(e);
    return res.status(401);
  } finally {
    return res.status(200);
  }
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

export const battleDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Battle.find({ _id: id });
    return res.json(result);
  } catch (e) {
    return res.status(401);
  }
};
