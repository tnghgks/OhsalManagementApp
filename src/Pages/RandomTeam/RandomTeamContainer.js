import React from "react";
import RandomTeamPresenter from "./RandomTeamPresenter";

export default class extends React.Component {
	constructor(props){
		super(props);
		this.state={
			error:null,
			loading:true
		}
		
	}
	render(){
		const { error, loading } = this.state;
		return (<RandomTeamPresenter error={error} loading={loading} />)
	}
}