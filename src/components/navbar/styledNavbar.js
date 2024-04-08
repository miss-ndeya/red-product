import styled from "styled-components";
import { devices } from "@/styles/globalStyle";

export const NavbarContainer = styled.div`
  display: ${(props) =>
    props.pathname === "/connexion" ||
    props.pathname === "/connexion/reinitialiserPassword" ||
    props.pathname === "/inscription" ||
    props.pathname === "/connexion/access" 
      ? "none"
      : "flex"};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: white;
  width: 81%;
  padding-top: 0;
  padding-bottom: 0;
  margin-left: 19%;
  @media only screen and ${devices.md} {
    width: 100%;
    flex-direction: column;
    margin-left: 0%;
  }
`;