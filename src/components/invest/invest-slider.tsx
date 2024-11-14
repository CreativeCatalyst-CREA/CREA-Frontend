'use client';

import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

const sliderList = [
  {
    id: '1',
    title: 'MISSION',
    description: 'Our mission is to redefine how creativity is valued and supported in the modern world. We believe that every creator deserves access to the resources, guidance, and financial backing necessary to transform their visionary ideas into reality',
    imgUrl: '/img/invest-mission.png',
    link: '/',
  },
  {
    id: '2',
    title: 'CREA',
    description: 'At Creative Catalyst, our vision is to redefine the way creativity is nurtured and funded, bridging the gap between traditional industries and the modern digital landscape',
    imgUrl: '/img/invest-crea.png',
    link: '/',
  },
  {
    id: '3',
    title: 'Token',
    description: 'The CREA token is used to invest in creative projects, allowing for direct financial support and growth of innovative ideas within the community',
    imgUrl: '/img/invest-token.png',
    link: '/',
  },
];

const InvestSlider = () => {
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
      {sliderList.map((item) => (
        <SwiperSlide key={item.title} className="!w-[1139.156px]">
          <div
            style={{
              background: 'linear-gradient(102deg, rgba(29, 29, 29, 0.46) 3.3%, rgba(29, 29, 29, 0.20) 99.99%)',
              backdropFilter: 'blur(110px)',
            }}
            className="flex flex-row gap-x-10 rounded-3xl px-9 py-8 backdrop-blur-[110px]"
          >
            <Image src={item.imgUrl} alt={item.title} title={item.title} width={640} height={447} className="rounded-3xl" />
            <div className="flex flex-col items-start justify-between">
              <div>
                <h3 className="my-6 text-8xl font-bold text-white">{item.title}</h3>
                <p className="font-extralight leading-8 text-white">{item.description}</p>
              </div>
              <Link href={`invest/${item.id}`} className="app-base-transform rounded-full border border-white px-8 py-4 text-2xl font-semibold text-white outline-none hover:border-primary hover:bg-primary">
                READ MORE
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InvestSlider;
