"use client";
import HotelList from "@/components/hotelList/HotelList";
import HotelContext from "@/contextes/HotelContext";
import { devices } from "@/styles/globalStyle";
import React, { useContext } from "react";
import styled from "styled-components";
import Loading from "./Loading";

const Container = styled.div`
  width: 81%;
  margin-left: 19%;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  @media only screen and ${devices.md} {
    width: 100%;
    margin-left: 0%;
  }
`;

const ContenuDashbord = styled.div`
  margin-top: 73px;
  width: 100%;
  @media only screen and ${devices.md} {
    margin-top: 140px;
  }
  @media only screen and ${devices.sm} {
    margin-top: 135px;
  }
`;

const page = () => {
  const { filteredHotels, hotels, searchText } = useContext(HotelContext);

  return (
    <div className="flex">
      <Container>
        <ContenuDashbord>
          {hotels.length > 0 ? (
            <HotelList searchText={searchText} hotels={filteredHotels} />
          ) : (
            <Loading />
          )}
        </ContenuDashbord>
      </Container>
    </div>
  );
};

export default page;
