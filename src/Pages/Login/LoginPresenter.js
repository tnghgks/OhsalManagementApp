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
  height: 25%;
  border: 3px solid #fff;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bold;
`;
const LoginForm = styled.form`
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

const LoginPresenter = ({ handleSubmit, handleChange, error, loading }) => (
  <Container>
    <LoginContainer>
      <h1> 로그인 </h1>
      <LoginForm onSubmit={handleSubmit}>
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
        <Input type="submit" value="LOGIN"></Input>
      </LoginForm>
    </LoginContainer>
  </Container>
);

export default LoginPresenter;
