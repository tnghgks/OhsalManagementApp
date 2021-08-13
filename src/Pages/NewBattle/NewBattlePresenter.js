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
const FormContainer = styled.div`
  margin: 0 auto;
  width: 30%;
  height: 100%;
  border: 3px solid rgba(241, 242, 246, 1);
`;
const Form = styled.form``;
const Input = styled.input``;
const BattlePresenter = ({ error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Form>
        <Input type="text" name="title"></Input>
        <Input type="text" name="createBy"></Input>
        <Input type="text" name="round"></Input>
        <Input type="submit"></Input>
      </Form>
    </Container>
  );

BattlePresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default BattlePresenter;
