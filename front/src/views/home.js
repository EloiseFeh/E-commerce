import { React, useState, useEffect } from "react";
import CarouselHome from "../components/carousel";
import Banner from "../components/banner";
import Categoria from "../components/categoria";
import Livros from "../components/livros";
import SliderLivros from "../components/sliderlivros";
import { Container } from "react-bootstrap";

export default function Home({livros, handdleAddLivro}) {

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
      <Livros livros={livros} handdleAddLivro={handdleAddLivro} />
    </>
  );
}
