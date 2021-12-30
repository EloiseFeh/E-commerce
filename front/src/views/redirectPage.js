import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function RedirectPage({ setAuth }) {
  const [adm, setAdm] = useState("");

  async function isAdm() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setAdm(parseRes.administrador);
      console.log(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAdm();
  });

  if (adm) {
    console.log("Vai para adm");
    return <Navigate to="/areaAdmin" />;
  } else {
    return <Navigate to="/usuario" />;
  }
}
