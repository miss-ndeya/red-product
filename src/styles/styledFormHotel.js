import styled, { css } from "styled-components";
import { devices } from "./globalStyle";

export const ContainerInput = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 20px;
  @media only screen and ${devices.md} {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media only screen and ${devices.md} {
    width: 100%;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 27.79px;
  text-align: left;
`;

export const Input = styled.input`
  font-family: Roboto;
  font-size: 18.53px;
  font-weight: 500;
  line-height: 21.71px;
  text-align: left;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #dddddd;
  outline: none;
`;

export const Select = styled.select`
  font-size: 16px;
  font-weight: 500;
  line-height: 21.71px;
  text-align: left;
  padding: 6px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #dddddd;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap:15px;
  border-bottom: 2px dashed #DDDDDD;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-family: Roboto;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  line-height: 34.17px;
  text-align: left;
  color: #555555:
`;

export const DivImage = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dddddd;
  padding: 2rem;
  border-radius: 12px;
  flex-direction: column;

  justify-content: center;
`;

export const ImageWrapper = styled.label`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #dddddd;
`;

export const ImageDefault = styled.span`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #dddddd;
`;

export const ImageText = styled.h6`
  margin-left: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: center;
  color: white;
  border-radius: 0.25rem;
  font-size: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  
`;

export const SubmitButton = styled.button`
  background-color: #555555;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  ${({ disabled, isLoading }) => {
    if (disabled || isLoading) {
      return css`
        background-color: #DDDDDD;
        opacity: 0.85;
        cursor: not-allowed;
        color: #555555;
        position: relative;
      `;
    } else {
      return css`
        background-color: #555555;
        color: white;
        &:hover {
          background-color: #555555;
        }
      `;
    }
  }}
`;

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Image = styled.img`
  width: 100px;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;