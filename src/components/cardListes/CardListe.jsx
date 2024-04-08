import React from "react";
import { Container, DivIcon, Paragraphe, Span, Title } from "./styledCard";

const CardListe = ({ text, color, icon, titre, nombre }) => {
  return (
    <Container>
      <DivIcon color={color}>{icon}</DivIcon>
      <div>
        <Title>
          {nombre} <Span>{titre}</Span>
        </Title>
        <Paragraphe>{text}</Paragraphe>
      </div>
    </Container>
  );
};

export default CardListe;
