import {React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from '../data.js';
import '../style/categoria.css'

import { Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import SwiperCore, { Pagination,Navigation, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Pagination,Navigation,Autoplay]);

const Categoria = () =>
{
    return(
        <>
        <Container className="d-none d-lg-block mt-5">
            <Row>
            {data.categorias.map( categoria => (
                <Col key={categoria._id} lg={2}   className="categoria-block d-none d-lg-block">
                    <div className="categoria-image">
                        <img
                        className="d-block"
                        src={
                        process.env.PUBLIC_URL + "/assets/images/categoria_temp.png"
                        }
                        alt={categoria.title}
                        />
                    </div>
                </Col>
            ))}
            </Row>
        </Container>

        <Container className="d-block d-lg-none mt-5">
        <Swiper navigation={true} spaceBetween={20} className="mySwiper" autoplay={true}
            breakpoints={{
            "0": {
              "slidesPerView": 3,
            },
            "768": {
              "slidesPerView": 4,
            },
            }}
            >
            {data.categorias.map(categoria =>(
            
                <SwiperSlide key={categoria._id}>
                    <div className="categoria-image">
                        <img
                        className="d-block"
                        src={
                        process.env.PUBLIC_URL + "/assets/images/categoria_temp.png"
                        }
                        alt=""
                        />
                    </div>
                </SwiperSlide>
            ))}  
        </Swiper>
        </Container>
        </>
    )
}

export default Categoria