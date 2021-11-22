import {React} from 'react';
import data from '../data.js';

import { Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import SwiperCore, { Pagination,Navigation,Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function CarouselHome(){
    return(
        <Swiper navigation={true} pagination={{"clickable": true}} slidesPerView={1} className="mySwiper" loop={true} autoplay={true}>
            {
                data.carouselItem.map( item=> (
                    <SwiperSlide key={item._id}>
                        <img
                        className="d-block w-100"
                        src={
                            process.env.PUBLIC_URL + item.image
                        }
                        alt={item.title}
                        />
                        {/*
                        <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        </div>
                        */}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
