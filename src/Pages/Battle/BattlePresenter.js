import React from "react";
import styled from "styled-components";
import Battle from "Components/Battle";

const Container = styled.div`
	display:flex;
	width:100%;
	height:calc(100vh - 50px);
	background-color:red;
`;
const Section = styled.div`
	display:flex;
	width:50%;
	height:100%;
	background-color:#c0ffee;
	padding:50px;
	border:5px solid #000;
	z-index:5;
`
const BattlePresenter = ({error , loading }) => (
	<Container>
		<Section>
			<Battle title="내전이벤트" createAt="11시" createBy="호수"></Battle>
		</Section>
		<Section>ss</Section>
	</Container>
)
	  
	  
	  
export default BattlePresenter;