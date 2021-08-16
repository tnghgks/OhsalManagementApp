import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.article`
  padding: 15px;
  width: 100%;
  height: calc(100vh - 50px);
`;

const BattleDetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : error ? (
    <Message text={error}></Message>
  ) : (
    <Container>battleDetail</Container>
  );

BattleDetailPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default BattleDetailPresenter;
