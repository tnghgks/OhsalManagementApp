import mongoose from "mongoose";

const BattleSchema = new mongoose.Schema({
	title: {
		type: String
	},
	userCount:{
		type: Number,
		default:0
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