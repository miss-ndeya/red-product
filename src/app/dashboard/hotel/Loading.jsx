import { devices } from "@/styles/globalStyle";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import styled from "styled-components";

const ContenuDashbord = styled.div`
  margin-top: 73px;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 60vh;
  justify-content: center;
  @media only screen and ${devices.md} {
    margin-top: 140px;
  }
  @media only screen and ${devices.sm} {
    margin-top: 135px;
  }
`;

const Loading = () => {
  return (
    <ContenuDashbord>
      <InfinitySpin
        visible={true}
        width="200"
        color="#55595C"
        ariaLabel="infinity-spin-loading"
      />
    </ContenuDashbord>
  );
};

export default Loading;
