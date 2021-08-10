import mongoose from "mongoose";

const BattleSchema = new mongoose.Schema({
	title: {
		type: String
	}, 
	createAt: {
		type: Date
	}, 
	createBy:{
		type: String
	}
})

const model = mongoose.model("Battle", BattleSchema);

export default model;