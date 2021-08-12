import Battle from "./Models/Battle";

export const newBattle = async(req,res) => {
	await Battle.create({
		title:"hosusBattle",
		createAt:"2021-08-12",
		createBy:"HOSU"
	})
	return res.status(200);
}

export const getBattle = async(req, res) => {
	const result = await Battle.find({});
	return res.json(result);
}