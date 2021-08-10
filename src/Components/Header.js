import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content:space-between;
	align-items: center;
	background-color: rgba(20, 20, 20, 0.8);
	z-index: 10;
`;

const Item = styled.li`
	display:inline;
	margin-right:30px;
`;

const Image = styled.img`
	width:50px;
	height:50px;
`;

export default () => (
	<Header>
		<Link to="/">
			<Image src={require("Assets/ohsal_logo.jpg")}/>
		</Link>
		<ul>
			<Item>
				<Link to="/">메인으로</Link>
			</Item>
			<Item>
				<Link to="/currentEvent">진행중인 이벤트</Link>
			</Item>
			<Item>
				<Link to="/battle">내전</Link>
			</Item>
		</ul>
	</Header>
) ;
