import React from "react";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
	position:absolute;
	top:-50px
	left:0px;
	width:100%;
	height:calc(100vh - 50px);
	overflow:hidden;
	background-color:background-color:rgba(20, 20, 20, 1);
	z-index:2;
`;

const Intro = styled.section`
  position: absolute;
  bottom: 50px;
  left: 50px;
  z-index: 3;
  margin-left: 40px;
`;
const TitleContainer = styled.div`
  padding-left: 15px;
  border-left: 5px solid #fff;
`;
const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 16px;
`;

const HomePresenter = ({ error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <video
        autoPlay="autoPlay"
        muted="muted"
        loop={true}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          overflow: "hidden",
          opacity: 0.5,
          z_index: 1,
        }}
      >
        <source
          src={require("../../Assets/backgorund_video.mp4")}
          type="video/mp4"
        />
      </video>
      <Intro>
        <TitleContainer>
          <Title>O H S A L</Title>
          <SubTitle>배틀그라운드 디스코드 채널</SubTitle>
        </TitleContainer>
      </Intro>
    </Container>
  );

export default HomePresenter;
