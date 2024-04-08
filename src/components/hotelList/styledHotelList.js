import styled from "styled-components";

export const Container = styled.div`
  margin-top: 95px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1180px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  gap: 1rem;
  row-gap: 4px;
  padding: 0 1rem;
`;

export const Card = styled.div`
font-family: Roboto;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Image = styled.img`
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 0.5rem 1rem 1rem;
`;

export const Namehotel = styled.h6`
  font-size: 17px;
  font-weight: 600;
  line-height: 25.59px;
  text-align: left;
  color: #222222;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;
`;

export const Address = styled.p`
  font-size: 10px;
  margin-bottom: 0rem;
  font-weight: 400;
  line-height: 15.35px;
  text-align: left;
  color: #8d4b38;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;
`;
export const Price = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 15.35px;
  text-align: left;
`;