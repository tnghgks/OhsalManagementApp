import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width:100%;
	height:100%;
	background-color:red;
`;

const CurrentEventPresenter = ({name, error , loading }) => <Container>{name}</Container>
	  
	  
	  
export default CurrentEventPresenter;