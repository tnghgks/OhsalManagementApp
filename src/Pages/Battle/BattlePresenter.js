import React from "react";
import styled from "styled-components";
import Battle from "Components/Battle";
import PropTypes from "prop-types";

const Container = styled.div`
	display:flex;
	width:100%;
	height:calc(100vh - 50px);
	background-color:#FFF;
`;
const Section = styled.div`
	width:50%;
	height:100%;
	padding:15px;
	border:5px solid #fff;
	z-index:5;
`
const BattlePresenter = ({result, error , loading }) => (
	<Container>
		<Section>
			{result && result.map(data =><Battle title={data.title} createAt={data.createAt} createBy={data.createBy}/>)}
		</Section>
		<Section>ss</Section>
	</Container>
)
	  
BattlePresenter.propTypes = {
	result: PropTypes.array,
	error:PropTypes.string,
	loading: PropTypes.bool
}
	  
export default BattlePresenter;