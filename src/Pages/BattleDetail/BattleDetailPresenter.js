import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.article`
  display: flex;
  padding: 15px;
  width: 100%;
  height: calc(100vh - 50px);
`;
const BattleContainer = styled.section`
  width: 25%;
  height: 100%;
  border: 3px solid #fff;
`;
const PlayerContainer = styled.section`
  width: 25%;
  height: 100%;
  border: 3px solid #fff;
`;
const ConsoleContainer = styled.section`
  width: 25%;
  height: 100%;
  border: 3px solid #fff;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  border: 3px solid #fff;
`;
const BattleDetailPresenter = ({ handleClick, result, error, loading }) =>
  loading ? (
    <Loader />
  ) : error ? (
    <Message text={error}></Message>
  ) : result ? (
    <Container>
      <PlayerContainer>{result.player}</PlayerContainer>
      <BattleContainer>
        <ul>
          <li>만든 시간 : {result.createAt}</li>
          <li>만든 사람 : {result.createBy}</li>
          <li>내전 제목 : {result.title}</li>
          <li>진행라운드 : {result.round}</li>
          <li>플레이어수 : {result.userCount}</li>
        </ul>
      </BattleContainer>
      <ConsoleContainer>
        <Button>내전 시작</Button>
        <Button onClick={handleClick}>내전 참가</Button>
      </ConsoleContainer>
    </Container>
  ) : (
    ""
  );

BattleDetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default BattleDetailPresenter;
