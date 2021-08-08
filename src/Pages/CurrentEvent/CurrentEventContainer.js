import React from "react";
import CurrentEventPresenter from "./CurrentEventPresenter";

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
		return (<CurrentEventPresenter error={error} loading={loading} />)
	}
}