"use client";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaUserFriends } from "react-icons/fa";
import { BsEnvelopeOpen } from "react-icons/bs";
import axios from "axios";
import HeaderDashboard from "@/components/navbar/header/HeaderDashboard";
import CardListe from "@/components/cardListes/CardListe";
import HotelContext from "@/contextes/HotelContext";
import { devices } from "@/styles/globalStyle";

const Container = styled.div`
  width: 81%;
  margin-left: 19%;
  background-color: #f0f0f0;
  display: flex;
  height: 100vh;
  justify-content: center;
  @media only screen and ${devices.md} {
    width: 100%;
    margin-left: 0%;
  }
`;

const ContenuDashbord = styled.div`
  margin-top: 60px;
  width: 100%;
  @media only screen and ${devices.md} {
    margin-top: 120px;
  }
  @media only screen and ${devices.sm} {
    margin-top: 110px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  padding: 15px 20px;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 1fr;
  gap: 25px;
  @media (min-width: 540px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 15px 20px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 25px 30px;
  }
  @media (min-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
`;


const Dashboard = () => {
  const { hotels, searchText } = useContext(HotelContext);
  const [users, setUsers] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/auth/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchUsers();
  }, []);

  const dashboardData = [
    {
      color: "#a88add",
      icon: <BsEnvelopeOpen />,
      titre: "Formulaire",
      nombre: 0,
      text: "je ne sais pas quoi mettre",
    },
    {
      color: "#0CC2AA",
      icon: "P",
      titre: "Messages",
      nombre: 0,
      text: "je ne sais pas quoi mettre",
    },
    {
      color: "#FCC100",
      icon: <FaUserFriends />,
      titre: "Utilisateurs",
      nombre: users.length > 0 ? users.length : 0,
      text: "je ne sais pas quoi mettre",
    },
    {
      color: "#F90000",
      icon: <BsEnvelopeOpen />,
      titre: "E-mails",
      nombre: 0,
      text: "je ne sais pas quoi mettre",
    },
    {
      color: "#9C27B0",
      icon: "P",
      titre: "Hôtels ",
      nombre: hotels.length,
      text: "je ne sais pas quoi mettre",
    },
    {
      color: "#1565C0",
      icon: <FaUserFriends />,
      titre: "Entités ",
      nombre: 0,
      text: "je ne sais pas quoi mettre",
    },
  ];

  const filteredData = dashboardData.filter((item) =>
    item.titre.toLowerCase().includes(searchText.toLowerCase())
  );

  
  return (
    <Container>
      <ContenuDashbord>
        <HeaderDashboard />
        <CardContainer>
          {filteredData.length > 0
            ? filteredData.map((obj, index) => (
                <CardListe
                  icon={obj.icon}
                  color={obj.color}
                  key={index}
                  nombre={obj.nombre}
                  titre={obj.titre}
                  text={obj.text}
                />
              ))
            : `Aucun resultat pour ${searchText}`}
        </CardContainer>
      </ContenuDashbord>
    </Container>
  );
};

export default Dashboard;
