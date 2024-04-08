"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

const HotelContext = createContext();

export const HotelContextProvider = ({ children }) => {
  const params = useParams();
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState("");
  const [userIdHotel, setUserIdHotel] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    adresse: "",
    email: "",
    telephone: "",
    prix: "",
    devise: "",
    image: null,
    identifiant: userIdHotel,
  });
  const [errors, setErrors] = useState({
    nom: "",
    adresse: "",
    email: "",
    telephone: "",
    prix: "",
    devise: "",
    image: "",
    submit: "",
  });

  const toggleConfirm = () => {
    setConfirmVisible(!confirmVisible);
  };

  const fetchHotel = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/hotels/${params._id}`
      );
      setHotel(response.data);
    } catch (error) {
      console.error("Échec de la récupération des données de l'hôtel:", error);
    }
  };

  const modifierHotel = (hotelId) => {
    const hotelAModifier = hotels.find((hotel) => hotel._id === hotelId);
    setFormData({
      nom: hotelAModifier.nom,
      adresse: hotelAModifier.adresse,
      email: hotelAModifier.email,
      telephone: hotelAModifier.telephone,
      prix: hotelAModifier.prix,
      devise: hotelAModifier.devise,
      image: hotelAModifier.image,
    });

    setSelectedImage(hotelAModifier.image);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split("/")[0];
      if (fileType !== "image") {
        // alert("Veuillez sélectionner un fichier image.");
        setErrors({
          ...errors,
          image: "Veuillez sélectionner un fichier image.",
        });
        e.target.value = null;
      } else {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        setSelectedImage(file);
        setFormData({
          ...formData,
          image: file,
        });
        setErrors({
          ...errors,
          image: "",
        });
      }
    }
  };

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.nom.toLowerCase().includes(searchText.toLowerCase()) ||
      hotel.adresse.toLowerCase().includes(searchText.toLowerCase())
  );

  const fetchHotels = async () => {
    try {
      const response = await axios.get(
        "https://red-product-api-elwg.onrender.com/api/hotels"
      );
      setHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const fetchUserHotels = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/hotels/${userIdHotel}`
      );
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des hôtels de l'utilisateur:",
        error
      );
    }
  };

  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

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

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    setUserIdHotel(userToken.userId);
  }, [userIdHotel]);

  useEffect(() => {});
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    setFormData({
      nom: "",
      adresse: "",
      email: "",
      telephone: "",
      prix: "",
      devise: "",
      image: null,
      identifiant: userIdHotel,
    });
  };

  useEffect(() => {
    if (params) {
      fetchHotel();
    }
  }, [params]);

  useEffect(() => {
    fetchHotels();
    fetchUserHotels();
  }, []);

  const valueContent = {
    formData,
    isButtonDisabled,
    setIsButtonDisabled,
    isLoading,
    setFormData,
    selectedImage,
    showPassword,
    updateShowPassword,
    setSelectedImage,
    handleChange,
    handleImageChange,
    modifierHotel,
    setShowPassword,
    confirmVisible,
    user,
    hotel,
    errors,
    fetchHotel,
    toggleSearch,
    toggleConfirm,
    setErrors,
    searchVisible,
    setSearchVisible,
    fetchHotels,
    hotels,
    filteredHotels,
    setHotels,
    searchText,
    setSearchText,
    setIsLoading,
  };

  return (
    <HotelContext.Provider value={valueContent}>
      {children}
    </HotelContext.Provider>
  );
};

export default HotelContext;
