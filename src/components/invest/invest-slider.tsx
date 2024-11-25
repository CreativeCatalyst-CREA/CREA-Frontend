'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import InvestPost from './invest-item';
import {IInvestPostList} from '@/types/invest';

const InvestSlider = ({postList}: IInvestPostList) => {
  return (
    <Swiper
      className="!pb-20"
      pagination={{
        dynamicBullets: true,
      }}
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={60}
      modules={[Pagination]}
    >
      {postList.map((item) => (
        <SwiperSlide key={item.title} className="!w-[1139.156px]">
          <InvestPost {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InvestSlider;
