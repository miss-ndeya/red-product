import React from "react";
import {
  Address,
  Card,
  CardBody,
  Container,
  GridContainer,
  Image,
  Namehotel,
  Price,
} from "./styledHotelList";
import Link from "next/link";

const HotelList = ({ hotels, searchText }) => {
  return (
    <Container>
      <GridContainer>
        {hotels.length > 0
          ? hotels.map((hotel, index) => (
              <Link key={index} href={`/dashboard/hotel/${hotel._id}`}>
                <Card>
                  <Image src={hotel.image} alt="img" />
                  <CardBody>
                    <Address>{hotel.adresse}</Address>
                    <Namehotel>{hotel.nom}</Namehotel>
                    <Price>
                      {hotel.prix} {hotel.devise} par nuit
                    </Price>
                  </CardBody>
                </Card>
              </Link>
            ))
          : `Aucun resultat pour ${searchText}`}
      </GridContainer>
    </Container>
  );
};

export default HotelList;
