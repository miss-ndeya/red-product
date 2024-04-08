"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import Nav from "./nav/Nav";
import Header from "./header/Header";
import { NavbarContainer } from "./styledNavbar";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavbarContainer pathname={pathname}>
      <Nav />
      <Header />
      <ToastContainer />
    </NavbarContainer>
  );
};

export default Navbar;
