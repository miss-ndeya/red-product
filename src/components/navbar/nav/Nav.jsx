"use client";
import React, { useContext } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  IconDeconnexion,
  IconRecherche,
  ImageCercle,
  InputRecherche,
  NavContainer,
  Notification,
  PointVerte,
  StyledContainer,
  StyledContainerIcon,
  Title,
} from "./styledNav";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import HotelContext from "@/contextes/HotelContext";
import { toast } from "react-toastify";
import MessageConfirmation from "@/components/modal/MessageConfirmation";

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { searchText, setSearchText, toggleConfirm, confirmVisible } = useContext(HotelContext);

  const deconnexion = async () => {
    try {
      localStorage.removeItem("token");
      toast.success("Vous êtes déconnecté. Connectez-vous à nouveau.");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toggleConfirm()
      router.push("/connexion");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      toast.error("Erreur lors de la déconnexion. Veuillez réessayer.");
    }
  };

  let titleText = "";

  if (pathname === "/dashboard") {
    titleText = "Dashboard";
  } else if (pathname === "/dashboard/hotel") {
    titleText = "Liste des hôtels";
  } else {
    titleText = "Détails de l'hôtel";
  }
  return (
    <NavContainer>
      <Title>{titleText} </Title>
      <StyledContainer>
        <div className="relative">
          <InputRecherche
            placeholder="Recherche"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IconRecherche />
        </div>
        <StyledContainerIcon>
          <IoMdNotificationsOutline />
          <ImageCercle>
            <Image
              src="/profile.png"
              width="100"
              height="100"
              alt="image-user"
            />
          </ImageCercle>
          <IconDeconnexion onClick={toggleConfirm} className="relative" />
          <MessageConfirmation
            onClose={toggleConfirm}
            isOpen={confirmVisible}
            handleDelete={deconnexion}
          />
          <PointVerte />
          <Notification>3</Notification>
        </StyledContainerIcon>
      </StyledContainer>
    </NavContainer>
  );
};

export default Nav;
