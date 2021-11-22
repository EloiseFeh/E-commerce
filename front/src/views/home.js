import {React, useState} from "react";
import CarouselHome from "../components/carousel"
import Banner from "../components/banner"
import Categoria from "../components/categoria";
import Livros from "../components/livros";
import SliderLivros from "../components/sliderlivros";
import { Container } from "react-bootstrap";

export default function Home(){
    const [livros] = useState([
        { id:'1', title: 'Come back', autor:'Raquel Q' , preco:'R$ 24,50'},
        { id:'2', title: 'Nunca fui', autor:'Machado A', preco:'R$ 19,90'},
        { id:'3', title: 'Alcohol free', autor:'Monteiro L', preco:'R$ 35,50'},
        { id:'4', title: 'Your eyes', autor:'Clarice L', preco:'R$ 32,90'},
        { id:'5', title: 'Oasis poty', autor:'Graciliano', preco:'R$ 24,90'},
        { id:'6', title: 'Love shot', autor:'José Alencar', preco:'R$ 19,00'},
        { id:'7', title: 'Sad Girl', autor:'Guimaraes', preco:'R$ 14,50'},
    ]);

    return(
        <> 
            <CarouselHome/>
            <Banner/>
            <Categoria/>
            <Container className="mt-5">
                <div>
                    <h2>Destaques</h2>
                </div>
                <SliderLivros sliderlivros={livros}/>
            </Container>
            <Container className="mt-5">
                <div>
                    <h2>Novidade</h2>
                </div>
                <SliderLivros sliderlivros={livros}/>
            </Container>
            <Livros livros={livros}/>
        </>
    ) 
}