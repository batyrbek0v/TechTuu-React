import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cardList } from '../../../utils/cardList';
import SliderCard from '../../UI/SliderCard/SliderCard';
import './Slider.css';
import 'swiper/css';

const Slider = () => {
  return (
    <>
      <Swiper
        className='mySwiper'
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
        }}
      >
        {cardList.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
