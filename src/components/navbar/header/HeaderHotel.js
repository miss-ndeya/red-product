"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import HotelContext from "@/contextes/HotelContext";
import Modal from "@/components/modal/Modal";
import FormHotel from "@/components/formulaires/FormHotel";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  padding: 0 1.3em;
`;
const Span = styled.span`
  margin-left: 6px;
  color: #DDDDDD
`;

const Title = styled.h6`
  font-size: 20px;
  font-weight: 300;
  line-height: 74.66px;
  text-align: left;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 13px;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #aeaeae;
  opacity: 0px;
  font-family: Montserrat;
  font-size: 14.5px;
  font-weight: 500;
  line-height: 21.94px;
  text-align: left;
`;

const HeaderHotel = ({ toggleSearch, searchVisible }) => {
  const { hotels } = useContext(HotelContext);

  return (
    <Container>
      <Title>
        Hôtels <Span>{hotels.length}</Span>
      </Title>
      <Button onClick={toggleSearch}>
        <FaPlus />
        Créer un nouveau hôtel
      </Button>
      <Modal
        onClose={toggleSearch}
        isOpen={searchVisible}
        children={<FormHotel isModification={false}  onClose={toggleSearch} />}
      />
    </Container>
  );
};

export default HeaderHotel;
