import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
	width:100%;
	height:50px;
	color:#000;
	background-color:white;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Item = styled.div`
	padding:10px;
`

const Team = ({title, createAt, createBy }) => (
	<Container>
		<Item>{title}</Item>
		<Item>{createAt}</Item>
		<Item>{createBy}</Item>
	</Container>
);

export default Team;
