import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleLOpen = () => console.log("connection to db");
const handleError = (error) => console.log("X Error on DB Connection ");

db.once("open", handleLOpen);
db.on("error", handleError);

export default db;
