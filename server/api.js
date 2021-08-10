import Battle from "./Models/Battle";

export const newBattle = async(req,res) => {
	await Battle.create({
		title,
		createAt,
		createBy
	})
	return "Success";
}

export const getBattle = async(req, res) => {
	const result = await Battle.find({});
	return res.json(result);
}