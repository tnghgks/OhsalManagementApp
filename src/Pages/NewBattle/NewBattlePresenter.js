import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 50px);
`;
const NewBattleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 35%;
  border: 3px solid #fff;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bold;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`;
const Input = styled.input`
  margin-top: 20px;
  width: 100%;
  height: 35px;
  font-weight: bold;
`;
const NewBattlePresenter = ({ handleSubmit, handleChange, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    handleChange && (
      <Container>
        <NewBattleContainer>
          <h1> 내전생성</h1>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="title"
              placeholder="내전제목"
              onChange={handleChange}
              required
            ></Input>
            <Input
              type="text"
              name="createBy"
              placeholder="개최자"
              onChange={handleChange}
              required
            ></Input>
            <Input
              type="number"
              max="5"
              min="1"
              name="round"
              placeholder="진행 라운드 수"
              onChange={handleChange}
              required
            ></Input>
            <Input
              type="datetime-local"
              name="startDate"
              onChange={handleChange}
              required
            ></Input>
            <Input type="submit"></Input>
          </Form>
        </NewBattleContainer>
      </Container>
    )
  );

NewBattlePresenter.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default NewBattlePresenter;
