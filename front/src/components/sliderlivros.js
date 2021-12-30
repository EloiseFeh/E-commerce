import Livro from "../components/livro";

import { Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import SwiperCore, { Pagination,Navigation, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination,Navigation,Autoplay]);

export default function SliderLivros({sliderlivros}){
    return(
        <Swiper navigation={true} spaceBetween={20} className="mySwiper" autoplay={true}
        breakpoints={{
            "0": {
              "slidesPerView": 2,
            },
            "768": {
              "slidesPerView": 3,
            },
            "992": {
              "slidesPerView": 4,
            }
            }}
            >
            {sliderlivros.map(livro => (
                <SwiperSlide key={livro._id}>
                    <Livro livro={livro}/>
                </SwiperSlide>
            ))}  
        </Swiper>
    )
}