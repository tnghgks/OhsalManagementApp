import Battle from "./Models/Battle";
import Event from "./Models/Event";
import User from "./Models/User";
import bcrypt from "bcrypt";

export const createBattle = async (req, res) => {
  const { title, createBy, round, startDate } = req.body;
  try {
    const battle = await Battle.create({
      title,
      createBy,
      round,
      startDate,
    });
    res.status(200).end();
  } catch (e) {
    res.status(406).end();
  }
};

export const getBattle = async (req, res) => {
  const result = await Battle.find({});
  return res.json(result).end();
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
    return res.status(406).end();
  } finally {
    return res.status(200).end();
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
    bcrypt.compare(passwd, user[0].password, (err, result) => {
      req.session.user_id = user[0]._id;
      res.send(result).end();
    });
  } else {
    console.log(false);
    res.send(false).end();
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

  return res.status(200).end();
};

export const battleDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Battle.find({ _id: id });
    return res.json(result);
  } catch (e) {
    return res.status(406).end();
  }
};

export const addPlayer = async (req, res) => {
  const { id: battleId } = req.body;
  const { player } = await Battle.findOne({ _id: battleId }).exec();
  console.log(battleId);
  console.log(req.session.user_id);
  const result = await Battle.findByIdAndUpdate(battleId, {
    $addToSet: { player: req.session.user_id },
    $set: { userCount: player.length },
  }).exec();
  console.log(player.length);
  res.status(200).end();
};

export const getLoginCheck = async (req, res) => {
  const { user_id } = req.session;
  const result = await User.exists({ _id: user_id });
  result ? res.send(true).end() : res.send(false).end();
};

export const getLogout = async (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.status(200).end();
  } else {
    console.log("세션이 없습니다. 로그인해주세요.");
    res.status(406).end();
  }
};
