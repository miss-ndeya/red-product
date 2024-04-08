import React from "react";
import styled from "styled-components";
import Image from "next/image";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 1em;
`;

const DivLogo = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TextLogo = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.33px;
  text-align: left;
  @media only screen and (max-width: 500px) {
    display: none;
  }
  @media only screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

const ImageLogo = styled(Image)`
  display: flex;
  align-items: center;
  width: 27px;
  height: 27px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <DivLogo>
        <ImageLogo src="/logo.png" width="100" height="100" alt="image-user" />
        <TextLogo>RED PRODUCT</TextLogo>
      </DivLogo>
    </LogoContainer>
  );
};

export default Logo;
