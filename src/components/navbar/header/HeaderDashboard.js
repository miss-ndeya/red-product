"use client";
import React from "react";
import styled from "styled-components";

const HeaderDashboardContainer = styled.div`
  padding: 30px;
  padding-bottom: 20px;
  background-color: white;
  font-weight: normal;
  border-top: 1px solid #f0f0f0;
`;
const Title = styled.h6`
  font-weight: 200;
  font-size: 25px;
  line-height: 35.19px;
  text-align: left;
`;
const Paragraphe = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20.5px;
  margin: 0px;
  padding: 0px;
  text-align: left;
  color: #bebebe;
`;

const HeaderDashboard = () => {
  return (
    <HeaderDashboardContainer>
      <Title>Bienvenue sur RED Product </Title>
      <Paragraphe>Lorem ipsum dolor sit amet consectetur</Paragraphe>
    </HeaderDashboardContainer>
  );
};

export default HeaderDashboard;
