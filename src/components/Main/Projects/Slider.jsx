import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { cardList } from '../../../utils/cardList';
import SliderCard from '../../UI/SliderCard/SliderCard';
import './Slider.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Title from '../../UI/Title/Title';

const Slider = () => {
  return (
    <div className='sliderWrapper'>
      <Title title='Our projects' />
      <Swiper
        className='mySwiper'
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2000}
        pagination={{
          clickable: true,
        }}
      >
        {cardList.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
