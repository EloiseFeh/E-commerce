import React,{useState,useEffect} from "react";
import { getDropdownMenuPlacement } from "react-bootstrap/esm/DropdownMenu";
import CardClientOptions from "../components/cardClientOptions";
import "../style/clientScreens.css";

export default function ClientDashboard({setAuth}) {
  // if (!setAuth) {
  //   return <Navigate to="/login" />;
  // }
  const [name, setName]= useState("");
  async function getName(){
    try{
      const response = await fetch("http://localhost:5000/dashboard/",{
        method:"GET",
        headers: {token: localStorage.token}

    });
    const parseRes = await response.json();
    setName(parseRes.nome)
    console.log(parseRes);
    }
    catch(err){
      console.error(err.message);
    }
  }
  const logout =(e)=>{
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  }
  useEffect(()=>{
    getName();
  })


  return (
    <div className="clientDashboard">
      <h1>Olá,{name}</h1>
      <h4>Sua conta</h4>
      <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
      <div className="contentDiv">
        <CardClientOptions
          link="/pedidos"
          titulo="Seus Pedidos"
          descricao="Rastrear, devolver ou comprar produtos novamente"
        />
        <CardClientOptions
          link="/perfil"
          titulo="Perfil"
          descricao="Alterar o login, nome ou celular"
        />
        <CardClientOptions
          link="/carrinho"
          titulo="Carrinho de compras"
          descricao="Confira e efetua a compra do seu carrinho"
        />
      </div>
    </div>
  );
}
