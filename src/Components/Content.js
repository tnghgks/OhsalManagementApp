import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  background-color: rgba(47, 53, 66, 1);
`;

const Item = styled.div`
  padding: 10px;
`;

const Span = styled.span`
  margin: 5px;
`;

const Content = ({ title, createAt, createBy }) => (
  <Container>
    <Item>
      <FontAwesomeIcon icon={faUserTie} />
      <Span>{createBy}</Span>
    </Item>
    <Item>
      <Span>{title}</Span>
    </Item>
    <Item>
      <Span>{createAt.substring(0, 10)}</Span>
    </Item>
  </Container>
);

export default Content;
