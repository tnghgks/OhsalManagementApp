import React from "react";
import styled from "styled-components";
import Content from "Components/Content";
import PropTypes from "prop-types";
import Loader from "Components/Loader";

const Container = styled.article`
  padding: 15px;
  width: 100%;
  height: calc(100vh - 50px);
`;
const EventContainer = styled.div`
  margin: 0 auto;
  width: 30%;
  height: 100%;
  border: 3px solid rgba(241, 242, 246, 1);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  background-color: rgba(47, 53, 66, 1);
  border-bottom: 3px solid #fff;
`;
const Item = styled.div`
  padding: 10px;
`;
const BattlePresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <EventContainer>
        <Header>
          <Item>올린이</Item>
          <Item>제목</Item>
          <Item>날짜</Item>
        </Header>
        {result &&
          result.map((data) => (
            <Content
              key={data._id}
              title={data.title}
              createAt={data.createAt}
              createBy={data.createBy}
            />
          ))}
      </EventContainer>
    </Container>
  );

BattlePresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default BattlePresenter;
