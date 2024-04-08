"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import {
  DivForm,
  Input,
  Label,
  StyledIconContainer,
  Title,
} from "./styledForm";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HotelContext from "@/contextes/HotelContext";
import {
  Button,
  Container,
  DivLogo,
  Form,
} from "@/components/formulaires/FormConnexion";
import { ButtonContent } from "@/styles/styledFormHotel";
import { ThreeDots } from "react-loader-spinner";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "@/components/logo/Logo";

const page = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const params = useParams();
  const router = useRouter();
  const {
    setIsButtonDisabled,
    updateShowPassword,
    showPassword,
    isButtonDisabled,
    setIsLoading,
    isLoading,
  } = useContext(HotelContext);

  const updateButtonDisabled = () => {
    if (confirmPassword.trim() !== "" && password.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    updateButtonDisabled();
  }, [confirmPassword, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/resetPassword",
        { token: params.id, newPassword: password }
      );
      setMessage(response.data.message);
      router.push("/connexion");
      toast.success(response.data.message);
    } catch (error) {
      setError(error.response.data.error);
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
          <Title>Réinitialiser le mot de passe</Title>
          <div className="relative">
            <Label htmlFor="password">Nouveau mot de passe :</Label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <StyledIconContainer
              onClick={updateShowPassword}
              showPassword={showPassword}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </StyledIconContainer>
          </div>
          <div className="relative">
            <Label htmlFor="confirmPassword">Confirmer le mot de passe :</Label>
            <Input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <StyledIconContainer
              onClick={updateShowPassword}
              showPassword={showPassword}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </StyledIconContainer>
          </div>
          <Button
            type="submit"
            disabled={isButtonDisabled || isLoading}
            isLoading={isLoading}
          >
            <ButtonContent>
              {isLoading ? (
                <>
                  Modification...
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
                " Modifier"
              )}
            </ButtonContent>
          </Button>
        </DivForm>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default page;
