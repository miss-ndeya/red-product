"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const router = useRouter();
  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [token])

  return (
    <>
      {token === null ? (
        router.push("/connexion")
      ) : (
        <div>
          <Sidebar />
          <Navbar />
          {children}
        </div>
      )}
    </>
  );
}
