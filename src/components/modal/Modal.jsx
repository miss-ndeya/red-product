import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { devices } from "@/styles/globalStyle";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  background-color: white;
  width: 60%;
  max-height: 100vh; 
  overflow-y: auto;
  margin-left: 80px;
  padding: 0px 20px 5px;
  border-radius: 5px;
  @media only screen and ${devices.md} {
    width: 90%;
    margin-left: 0px;
    margin-top:140px;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
      <ToastContainer/>
    </ModalWrapper>
  );
};

export default Modal;
