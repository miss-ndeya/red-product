import {
  ButtonModifier,
  ButtonSupprimer,
} from "@/app/dashboard/hotel/[_id]/page";
import React from "react";
import { ModalContent, ModalWrapper } from "./Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoAlertCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { ButtonContainer } from "@/styles/styledFormHotel";
import { devices } from "@/styles/globalStyle";

const ModalContentConfirm = styled(ModalContent)`
  width: 40%;
  margin-left: 0px;
  margin: auto;
  @media only screen and ${devices.md} {
    width: 90%;
    margin-top:140px;
  }
`;
const DivAlert = styled.div`
margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconAlert = styled(IoAlertCircleOutline)`
  color: #ffc107;
  font-size: 4rem;
`;
const ButtonContainerConfirm = styled(ButtonContainer)`
    justify-content: center;
    margin-top: 1.5rem;
`;
const Title = styled.h1`
    font-size: 16px;
    font-weight: 700;
    line-height: 25.2px;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 10px;
`;
const Paragraphe = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 25.2px;
    text-align: center;
`;

const MessageConfirmation = ({ isOpen, onClose, handleDelete }) => {
  if (!isOpen) return null;
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContentConfirm onClick={(e) => e.stopPropagation()}>
        <DivAlert>
          <IconAlert />
        </DivAlert>
        <Title>Êtes-vous sûr?</Title>
        <Paragraphe>Vous ne pourrez pas revenir en arrière !</Paragraphe>
        <ButtonContainerConfirm>
          <ButtonSupprimer onClick={onClose}>Annuler</ButtonSupprimer>
          <ButtonModifier onClick={handleDelete}>Confirmer</ButtonModifier>
        </ButtonContainerConfirm>
      </ModalContentConfirm>
      <ToastContainer />
    </ModalWrapper>
  );
};

export default MessageConfirmation;
