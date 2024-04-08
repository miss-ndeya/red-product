import styled from "styled-components";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { devices } from "@/styles/globalStyle";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.3em;
  width: 100%;
  // @media only screen and ${devices.sm} {
  //   flex-direction: column;
  //   align-items: start;
  // }
  @media only screen and ${devices.md} {
    margin-top: 70px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 74.66px;
  text-align: left;
  @media only screen and ${devices.sm} {
    display:none;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-bottom: 3px;
  justify-content: space-between;
  position: relative;
  @media (min-width: 768px) {
    padding-bottom: 0;
    justify-content: start;
  }
  @media only screen and ${devices.sm} {
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }
`;

export const StyledContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-bottom: 5px;
  
`;

export const InputRecherche = styled.input`
  position: relative;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 180px;
  height: 20px;
  position: relative;
  padding: 0.9em;
  padding: 0.9em 2em;
  padding-left: 2rem;
  &:hover,
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #aaa;
  }
  @media only screen and ${devices.sm} {
    width: 160px;
  }
`;


export const IconRecherche = styled(CiSearch)`
  position: absolute;
  bottom: 4px;
  left: 10px;
`;

export const ImageCercle = styled.div`
  position: relative;
  height: 35px;
  width: 35px;
  background-color: #ccc;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;

export const IconDeconnexion = styled(FaArrowRightFromBracket)`
 cursor: pointer;
`;
export const PointVerte = styled.p`
  position: absolute;
  background-color: lime;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  right: 2.5rem;
  top: 1.5rem;
`;

export const Notification = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcc100;
  color: white;
  font-size: 12px;
  height: 1rem;
  width: 1rem;
  border-radius: 0.25rem;
  right: 87px;
  top: 0px;
`;