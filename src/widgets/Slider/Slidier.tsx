import {CenterSliderContainer, CenterSliderText, CenterSliderWrapper, ImgContainer} from "./Slider.styled";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

import slide from './block.png';
import slide2 from './block2.png';
import slide3 from './block3.png';

export const Slider = () => {

  return <CenterSliderContainer>
    <CenterSliderWrapper>
      <CenterSliderText>Форматы обучения</CenterSliderText>
    </CenterSliderWrapper>
    <Swiper
      slidesPerView={3}

      modules={[Pagination, Navigation]}
      pagination={{
        type: 'fraction',
      }}
      loop={true}
      navigation={true}
    >
      <SwiperSlide><ImgContainer src={slide}/></SwiperSlide>
      <SwiperSlide><ImgContainer src={slide2}/></SwiperSlide>
      <SwiperSlide><ImgContainer src={slide3}/></SwiperSlide>
      <SwiperSlide><ImgContainer src={slide}/></SwiperSlide>
      <SwiperSlide><ImgContainer src={slide2}/></SwiperSlide>
      <SwiperSlide><ImgContainer src={slide3}/></SwiperSlide>
    </Swiper>
  </CenterSliderContainer>
}
