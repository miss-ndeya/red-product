"use client";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import { ButtonContent } from "@/styles/styledFormHotel";
import HotelContext from "@/contextes/HotelContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Button,
  Container,
  DivLogo,
  Form,
} from "@/components/formulaires/FormConnexion";
import Logo from "@/components/logo/Logo";

const DivForm = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding: 20px 18px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  position: relative;
`;
const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  line-height: 25.6px;
  text-align: left;
  margin-bottom: 23.3px;
`;

export const StyledIconContainer = styled.div`
  position: absolute;
  right: 25px;
  bottom: 135px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  font-family: Roboto;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  font-size: 14px;
  border: 0;
  border-bottom: 1.33px solid #a0a0a0;
  margin-bottom: 22px;
  width: 100%;
  &:hover,
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #aaa;
  }
`;
const InputCheck = styled(Input)`
  width: auto;
  margin-bottom: 0;
`;
const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
`;
const Paragraphe = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  color: #ffd964;
`;
const ParagrapheOublier = styled(Paragraphe)`
  font-weight: 400;
  display: flex;
  justify-content: center;
  gap: 4px;
  color: #fff;
  margin: 0;
  padding: 0;
`;

const DivCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;
const page = () => {
  const {
    setIsButtonDisabled,
    updateShowPassword,
    showPassword,
    isButtonDisabled,
    setIsLoading,
    isLoading,
  } = useContext(HotelContext);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
  });

  const updateButtonDisabled = () => {
    if (
      formData.nom.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    updateButtonDisabled();
  }, [formData.email, formData.password, formData.nom]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        formData
      );
      console.log(response.data);
      toast.success("inscription reussi");
      router.push("/connexion");
    } catch (error) {
      console.error("Error submitting data:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.error === "L'adresse e-mail est déjà utilisée."
      ) {
        toast.error(
          "L'adresse e-mail est déjà utilisée. Veuillez en choisir une autre."
        );
      } else {
        toast.error("Une erreur s'est produite lors de l'inscription.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <DivLogo>
          <Logo />
        </DivLogo>
        <DivForm>
          <Title>Inscrivez-vous en tant que Admin</Title>
          <Input
            type="text"
            onChange={handleChange}
            name="nom"
            value={formData.nom}
            placeholder="Nom"
          />
          <Input
            type="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            placeholder="Votre e-mail"
          />
          <Input
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
            name="password"
            value={formData.password}
            placeholder="Mot de passe"
          />
          <StyledIconContainer
            onClick={updateShowPassword}
            showPassword={showPassword}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </StyledIconContainer>
          <DivCheck>
            <InputCheck type="checkbox" />
            <Label>Accepter les termes et la politique</Label>
          </DivCheck>
          <Button
            type="submit"
            disabled={isButtonDisabled || isLoading}
            isLoading={isLoading}
          >
            <ButtonContent>
              {isLoading ? (
                <>
                  inscription ...
                  <ThreeDots
                    visible={true}
                    height="40"
                    width="40"
                    color="#555555"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </>
              ) : (
                " S'inscrire"
              )}
            </ButtonContent>
          </Button>
        </DivForm>
        <ParagrapheOublier>
          Vous avez déjà un compte?
          <Link href="/connexion">
            <Paragraphe>Se connecter</Paragraphe>
          </Link>
        </ParagrapheOublier>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default page;
