import { React, useState, useEffect } from "react";
import CarouselHome from "../components/carousel";
import Banner from "../components/banner";
import Categoria from "../components/categoria";
import Livros from "../components/livros";
import SliderLivros from "../components/sliderlivros";
import { Container } from "react-bootstrap";

export default function Home() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    try {
      const response = await fetch("http://localhost:5000/produtos/");
      const jsonData = await response.json();

      setLivros(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  console.log(livros);

  return (
    <>
      <CarouselHome />
      <Banner />
      <Categoria />
      {/* <Container className="mt-5">
                <div>
                    <h2>Destaques</h2>
                </div>
                <SliderLivros sliderlivros={livros}/>
            </Container> */}
      <Livros livros={livros} />
    </>
  );
}
