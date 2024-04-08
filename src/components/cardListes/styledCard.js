import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 5px 13px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0px 0px 1.3331290483474731px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border:0;
`;
export const DivIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color || "#a88add"};
  color: white;
  border-radius: 50%;
`;
export const Paragraphe = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 25.2px;
  text-align: left;
  color: #bebebe;
`;
export const Title = styled.h6`
  font-size: 29px;
  font-weight: 300;
  line-height: 35.19px;
  text-align: left;
`;
export const Span = styled.span`
font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  line-height: 18.77px;
  text-align: left;
  color: #444;
`;

