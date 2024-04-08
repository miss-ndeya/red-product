"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaImage } from "react-icons/fa";
import axios from "axios";
import HotelContext from "@/contextes/HotelContext";
import { ThreeDots } from "react-loader-spinner";

import {
  ButtonContainer,
  ButtonContent,
  ContainerInput,
  DivImage,
  ErrorMessage,
  FileInputContainer,
  Image,
  ImageDefault,
  ImageInput,
  ImageText,
  ImageWrapper,
  Input,
  InputWrapper,
  Label,
  LoaderWrapper,
  Select,
  SubmitButton,
  Title,
} from "@/styles/styledFormHotel";
import { toast } from "react-toastify";

const FormHotel = ({ onClose, isModification, hotelId }) => {
  const { fetchHotels } = useContext(HotelContext);
  const {
    formData,
    setFormData,
    selectedImage,
    setSelectedImage,
    handleChange,
    handleImageChange,
    errors,
    setErrors,
    fetchHotel,
  } = useContext(HotelContext);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const updateButtonDisabled = () => {
    if (
      formData.email.trim() !== "" &&
      formData.telephone.trim() !== "" &&
      formData.prix !== "" &&
      formData.adresse.trim() !== "" &&
      formData.image !== null &&
      formData.nom.trim() !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  useEffect(() => {
    updateButtonDisabled();
  }, [
    formData.email,
    formData.nom,
    formData.prix,
    formData.adresse,
    formData.telephone,
    formData.image,
  ]);

  const addHotel = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const requiredFields = [
        "nom",
        "adresse",
        "email",
        "telephone",
        "prix",
        "devise",
        "image",
      ];
      const newErrors = { ...errors };
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!formData[field]) {
          newErrors[field] = "Ce champ est obligatoire";
          isValid = false;
        } else {
          newErrors[field] = "";
        }
      });

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email || !emailPattern.test(formData.email)) {
        newErrors.email = "Veuillez entrer une adresse e-mail valide";
        isValid = false;
      } else {
        newErrors.email = "";
      }
      console.log(newErrors);
      const phonePattern =
        /^(?:\+\d{1,3}\s?)?(?:\(\d{1,4}\))?(?:[- .]?\d{1,3}){3,}$/;
      if (!formData.telephone || !phonePattern.test(formData.telephone)) {
        newErrors.telephone = "Veuillez entrer un numéro de téléphone valide";
        isValid = false;
      } else {
        newErrors.telephone = "";
      }

      const pricePattern = /^(?:[1-9]\d{4}|500000)$/;
      if (!formData.prix || !pricePattern.test(formData.prix)) {
        newErrors.prix =
          "Veuillez entrer un prix valide compris entre 15000 et 500000";
        isValid = false;
      } else {
        newErrors.prix = "";
      }

      if (!formData.image) {
        newErrors.image = "Veuillez sélectionner une image";
        isValid = false;
      } else {
        newErrors.image = "";
      }

      if (!isValid) {
        setErrors(newErrors);
        return;
      }

      setErrors(newErrors);

      const url = isModification
        ? `http://localhost:3000/api/hotels/${hotelId}`
        : "http://localhost:3000/api/hotels";

      const response = await (isModification
        ? axios.put(url, formDataToSend)
        : axios.post(url, formDataToSend));
      console.log(response.data);
      toast.success(
        isModification === false
          ? "Hotel ajouté avec succès"
          : "Hotel modifié avec succès"
      );
      setSelectedImage(null);
      setFormData({
        nom: "",
        adresse: "",
        email: "",
        telephone: "",
        prix: "",
        devise: "",
        image: null,
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onClose();
      isModification === true ? fetchHotel() : "";
      fetchHotels();
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
      setErrors({
        ...errors,
        submit: "Une erreur s'est produite lors de l'envoi du formulaire",
      });
      toast.error(
        error.response.data.error ||
          "Une erreur s'est produite lors de l'envoi du formulaire"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <>
      <form onSubmit={addHotel}>
        <Title onClick={(e) => e.stopPropagation()}>
          {" "}
          <FaArrowLeft onClick={handleClose} />{" "}
          {isModification === false
            ? "Créer un nouveau hôtel"
            : "Modifier l'hotel"}
        </Title>

        <ContainerInput>
          <InputWrapper>
            <Label htmlFor="nom">Nom de l'hôtel </Label>
            <Input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Nom de l'hôtel"
            />
            {errors.nom && <ErrorMessage>{errors.nom}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="nom">Adresse</Label>
            <Input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              placeholder="Adresse de l'hôtel"
            />
            {errors.adresse && <ErrorMessage>{errors.adresse}</ErrorMessage>}
          </InputWrapper>
        </ContainerInput>
        <ContainerInput>
          <InputWrapper>
            <Label htmlFor="nom">E-mail</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email de l'hôtel"
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="nom">Numéro de téléphone </Label>
            <Input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Téléphone de l'hôtel"
            />
            {errors.telephone && (
              <ErrorMessage>{errors.telephone}</ErrorMessage>
            )}
          </InputWrapper>
        </ContainerInput>
        <ContainerInput>
          <InputWrapper>
            <Label htmlFor="nom">Prix par nuit</Label>
            <Input
              type="number"
              name="prix"
              value={formData.prix}
              onChange={handleChange}
              placeholder="Prix de l'hôtel"
            />
            {errors.prix && <ErrorMessage>{errors.prix}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="nom">Devise</Label>
            <Select
              name="devise"
              value={formData.devise}
              onChange={handleChange}
            >
              <option value="XOF">F XOF</option>
              <option value="EUR">Euro</option>
              <option value="USD">Dollar</option>
            </Select>
          </InputWrapper>
        </ContainerInput>
        <DivImage>
          <Label htmlFor="nom">Ajouter une photo:</Label>
          <FileInputContainer>
            <ImageWrapper>
              <ImageText>
                {selectedImage ? (
                  <Image
                    src={
                      selectedImage instanceof File
                        ? URL.createObjectURL(selectedImage)
                        : selectedImage
                    }
                    alt="selected-img"
                  />
                ) : (
                  <ImageDefault>
                    <FaImage size={40} />
                    <ImageText>Ajouter une photo</ImageText>
                  </ImageDefault>
                )}
              </ImageText>
              <ImageInput
                type="file"
                name="image"
                onChange={handleImageChange}
              />
              {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
            </ImageWrapper>
          </FileInputContainer>
        </DivImage>
        <ButtonContainer>
          <SubmitButton
            disabled={isButtonDisabled || isLoading}
            isLoading={isLoading}
            type="submit"
          >
            <ButtonContent>
              {isLoading ? (
                <>
                  En cours de soumission...
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
              ) : isModification === false ? (
                "Enregistrer"
              ) : (
                "Modifier"
              )}
            </ButtonContent>
          </SubmitButton>
        </ButtonContainer>
      </form>
    </>
  );
};

export default FormHotel;
