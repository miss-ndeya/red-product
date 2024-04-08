"use client";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HotelContext from "@/contextes/HotelContext";
import { ThreeDots } from "react-loader-spinner";
import { ButtonContent } from "@/styles/styledFormHotel";
import {
  Container,
  DivLogo,
  Form,
} from "@/components/formulaires/FormConnexion";
import css from "styled-jsx/css";
import Logo from "@/components/logo/Logo";

const DivForm = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding: 20px 18px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
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

const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  margin-bottom: 10px;
  color: #aaa;
`;
const Paragraphe = styled.p`
  font-size: 14px;
  font-weight: 600;
  c
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
const ParagrapheOublierTitle = styled(ParagrapheOublier)`
  font-size: 16px;
  color: #000;
  justify-content: start;
`;
const ParagrapheOublierTexte = styled(ParagrapheOublierTitle)`
  font-size: 14px;
  line-height: 24px;
  margin: 15px 0;
`;
const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 26.67px;
  text-align: center;
  border: 0;
  border-radius: 4px;
  padding: 5px;
  background-color: #45484b;
  color: white;
  width: 100%;
  &:hover,
  &:focus {
    outline: none;
  }
  ${({ disabled, isLoading }) => {
    if (disabled || isLoading) {
      return css`
        background-color: #dddddd;
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

const page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);
  const { setIsButtonDisabled, isButtonDisabled, setIsLoading, isLoading } =
    useContext(HotelContext);

  const updateButtonDisabled = () => {
    if (email.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    updateButtonDisabled();
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/forgotPassword",
        {
          email: email,
        }
      );

      const data = response.data;

      setMessage(data.message);
      setShowForm(false);
      toast.warning("Verifier votre email !");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response.data.error);
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
          <ParagrapheOublierTitle>Mot de passe oublié?</ParagrapheOublierTitle>
          {showForm ? (
            <>
              {" "}
              <ParagrapheOublierTexte>
                Entrez votre adresse e-mail ci-dessous et nous vous envoyons des
                instructions sur la façon de modifier votre mot de passe.
              </ParagrapheOublierTexte>
              <Label>Votre e-mail</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
              />
              <Button
                type="submit"
                disabled={isButtonDisabled || isLoading}
                isLoading={isLoading}
              >
                <ButtonContent>
                  {isLoading ? (
                    <>
                      En cour...
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
                    "Envoyer"
                  )}
                </ButtonContent>
              </Button>
            </>
          ) : (
            <ParagrapheOublierTexte>
              Vérifiez votre courrier électronique pour trouver un lien
              permettant de réinitialiser votre mot de passe. S'il n'apparaît
              pas au bout de quelques minutes, vérifiez votre dossier spam.
            </ParagrapheOublierTexte>
          )}
        </DivForm>
        <ParagrapheOublier>
          Revenir à la
          <Link href="/connexion">
            <Paragraphe>connexion</Paragraphe>
          </Link>
        </ParagrapheOublier>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default page;
