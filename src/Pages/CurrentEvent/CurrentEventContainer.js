import React from "react";
import CurrentEventPresenter from "./CurrentEventPresenter";
import axios from "axios";

export default class extends React.Component {
	constructor(props){
		super(props);
		this.state={
			name:null,
			error:null,
			loading:true
		}
	}
	componentDidMount(){
		fetch('/getUser')
			.then(res=> res.json())
			.then(data => this.setState({name:data.name}));
	}
	render(){
		const { name ,error, loading } = this.state;
		return (<CurrentEventPresenter name={name} error={error} loading={loading} />)
	}
}