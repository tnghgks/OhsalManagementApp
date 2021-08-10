import User from "../Models/User";


const memberName = async() => {
	let alreadyUser = false;
	alreadyUser = await User.findOne({discordID:"392920005999591424"});
	return alreadyUser;
}

export default memberName;