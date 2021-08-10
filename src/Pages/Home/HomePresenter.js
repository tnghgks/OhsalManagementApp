import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width:100%;
	height:100%;
	background-color:red;
`;
const BackgroundVideo = styled.video`
	width:100%;
	height:100%;
	
`
const HomePresenter = ({error , loading }) => (
	<Container>
		<BackgroundVideo src={require("../../Assets/backgorund_video.mp4")} autoplay muted controls></BackgroundVideo>
	</Container>
)
	  
	  
	  
export default HomePresenter;