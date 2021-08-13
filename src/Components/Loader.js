import React from "react";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 50px);
  font-size: 28px;
  font-weight: 600;
`;
const Img = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: 5;
  border-radius: 15px;
`;
export default () => (
  <Container>
    <Img src="https://post-phinf.pstatic.net/MjAxODExMTlfMzIg/MDAxNTQyNjIxNjQ4NzUw.c8wVNYXc4pCO_rQSzlEVsQBsFE43T1S1So20IcgykXog.E4YoYl-0Y6HriRc8mUn4OY57Zf2jWoEkkDqJMKBgrf0g.GIF/giphy.gif?type=w1200" />
  </Container>
);
