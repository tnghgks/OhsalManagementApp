import React from "react";
import BattlePresenter from "./BattlePresenter";

export default class extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error:null,
			loading:true
		}
		
	}
	render(){
		const { error, loading } = this.state;
		return <BattlePresenter error={error} loading={loading} />
	}
}