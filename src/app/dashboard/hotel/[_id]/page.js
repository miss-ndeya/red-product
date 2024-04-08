"use client";
import React, { useContext } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
import FormHotel from "@/components/formulaires/FormHotel";
import MessageConfirmation from "@/components/modal/MessageConfirmation";
import Modal from "@/components/modal/Modal";
import HotelContext from "@/contextes/HotelContext";
import { devices } from "@/styles/globalStyle";
import Loading from "../Loading";

const Container = styled.div`
  width: 81%;
  margin-left: 19%;
  background-color: #f0f0f0;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  @media only screen and ${devices.md} {
    width: 100%;
    margin-left: 0%;
  }
`;

const ContenuDashbord = styled.div`
  margin-top: 100px;
  width: 100%;
  @media only screen and ${devices.md} {
    margin-top: 140px;
  }
  @media only screen and ${devices.sm} {
    margin-top: 140px;
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 100%;
`;

const HotelInfo = styled.div`
  margin-top: 20px;
`;

const HotelTitle = styled.h2`
  margin-top: 8px;
  margin-bottom: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  @media only screen and ${devices.md} {
    font-size: 1rem;
  }
`;

const HotelDetail = styled.p`
  margin-top: 9px;
`;
const Span = styled.span`
  font-weight: 600;
`;

const Button = styled.button`
  margin-top: 10px;
  margin: 10px;
  border-radius: 5px;
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;
export const ButtonModifier = styled(Button)`
  background-color: #28a745;
`;
export const IconRetour = styled(BiArrowBack)`
  margin: 10px 10px 10px 20px;
`;
export const ButtonSupprimer = styled(Button)`
  background-color: #dc3545;
`;
const DivButton = styled.div`
  margin-top: 50px;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const page = () => {
  const router = useRouter();

  const {
    fetchHotels,
    hotel,
    confirmVisible,
    toggleConfirm,
    modifierHotel,
    toggleSearch,
    searchVisible,
  } = useContext(HotelContext);

  const deleteHotel = async (hotelId) => {
    try {
      await axios.delete(`http://localhost:3000/api/hotels/${hotelId}`);
      toast.success("L'hotel a été supprimé.");
      fetchHotels();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toggleConfirm();
      router.push("/dashboard/hotel");
    } catch (error) {
      console.error("Failed to delete hotel:", error);
      toast.error("La suppression de l'hotel a echouée");
    }
  };

  const handleDelete = (hotelId) => {
    deleteHotel(hotelId);
  };

  const afficherModal = (hotelId) => {
    toggleSearch();
    modifierHotel(hotelId);
  };

  return (
    <Container>
      <ContenuDashbord>
        <Link href="/dashboard/hotel">
          <StyledDiv>
            <IconRetour />
            Retour
          </StyledDiv>
        </Link>
        {hotel ? (
          <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-6">
            <div>
              <HotelImage src={hotel.image} alt={hotel.nom} />
            </div>
            <HotelInfo>
              <HotelTitle>{hotel.nom}</HotelTitle>
              <HotelDetail>
                <Span>Adresse:</Span> {hotel.adresse}
              </HotelDetail>
              <HotelDetail>
                <Span>E-mail:</Span> {hotel.email}
              </HotelDetail>
              <HotelDetail>
                <Span>Prix: </Span> {hotel.prix} {hotel.devise} par nuit
              </HotelDetail>
              <HotelDetail>
                <Span>Téléphone:</Span> {hotel.telephone}
              </HotelDetail>
              <DivButton>
                <ButtonModifier
                  onClick={() => afficherModal(hotel._id)}
                  type="button"
                >
                  Modifier
                </ButtonModifier>
                <Modal
                  onClose={toggleSearch}
                  isOpen={searchVisible}
                  children={
                    <FormHotel
                      isModification={true}
                      hotelId={hotel._id}
                      onClose={toggleSearch}
                    />
                  }
                />
                <ButtonSupprimer type="button" onClick={toggleConfirm}>
                  Supprimer
                </ButtonSupprimer>
                <MessageConfirmation
                  onClose={toggleConfirm}
                  isOpen={confirmVisible}
                  handleDelete={() => handleDelete(hotel._id)}
                />
              </DivButton>
            </HotelInfo>
          </div>
        ) : (
          <Loading />
        )}
      </ContenuDashbord>
    </Container>
  );
};

export default page;
