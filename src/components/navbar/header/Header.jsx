"use client";
import React, { useContext, useState } from "react";
import HeaderHotel from "./HeaderHotel";
import { usePathname } from "next/navigation";
import { HeaderContainer } from "./styledHeader";
import HotelContext from "@/contextes/HotelContext";

const Header = () => {
  const pathname = usePathname();
  const {searchVisible, toggleSearch} = useContext(HotelContext)

  return (
    <HeaderContainer>
      {pathname === "/dashboard/hotel" ? (
        <HeaderHotel
        searchVisible={searchVisible}
        toggleSearch={toggleSearch}
      />
      ) : (
        ""
      )}
    </HeaderContainer>
  );
};

export default Header;
