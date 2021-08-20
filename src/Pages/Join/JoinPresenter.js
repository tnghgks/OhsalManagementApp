import React from "react";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 50px);
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 40%;
  border: 3px solid #fff;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bold;
`;
const JoinForm = styled.form`
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

const JoinPresenter = ({ handleSubmit, handleChange, error, loading }) => (
  <Container>
    <LoginContainer>
      <h1> 가 입 </h1>
      <JoinForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="id"
          placeholder="Username"
          required
          onChange={handleChange}
        ></Input>
        <Input
          type="password"
          name="passwd"
          placeholder="●●●●●●●●"
          required
          onChange={handleChange}
        ></Input>
        <Input type="submit" value="JOIN"></Input>
      </JoinForm>
    </LoginContainer>
  </Container>
);

export default JoinPresenter;
