"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [token])

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    } else {
      router.push("/connexion");
    }
  });
  
  return null;
}
