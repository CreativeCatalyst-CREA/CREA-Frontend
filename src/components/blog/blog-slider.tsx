'use client';

import {EffectCards} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const blogSlider = [
  {
    id: '1',
    title: 'CREA TOKEN',
    description: ['Funding Projects', 'Project Management', 'Privileged Access', 'NFT Access'],
    imgUrl: '/img/invest-crea.png',
  },
  {
    id: '2',
    title: 'Ecosystem',
    description: ['Empowering Creativity Through Crypto'],
    imgUrl: '/img/ecosystem.png',
  },
  {
    id: '3',
    title: 'CREA WORK',
    description: ['At the heart of Creative Catalyst is its innovative blend of blockchain technology and creative collaborations'],
    imgUrl: '/img/invest-token.png',
  },
  {
    id: '4',
    title: 'PIONEERING',
    description: ['Are you ready to take the leap into the world of cryptocurrency?'],
    imgUrl: '/img/pioneering.png',
  },
  {
    id: '5',
    title: 'CREATIVITY',
    description: ['Are you feeling stuck in a rut with your creative projects?'],
    imgUrl: '/img/invest-crea.png',
  },
];

const BlogSlider = () => {
  return (
    <Swiper
      effect={'cards'}
      cardsEffect={{
        perSlideOffset: 40,
        perSlideRotate: 0,
        slideShadows: false,
      }}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      modules={[EffectCards]}
    >
      {blogSlider.map((item) => (
        <SwiperSlide key={item.id} className="!w-[400px]">
          <div className="flex flex-col rounded-3xl bg-white px-5 py-4">
            <Image src={item.imgUrl} alt={item.title} width={355.5} height={355.5} className="rounded-3xl" />
            <h4 className="mt-4 text-center text-4xl font-extrabold">{item.title}</h4>
            <div className="flex h-28 flex-col items-center justify-center">
              {item.description.map((text) => (
                <p key={text} className="text-center">
                  {text}
                </p>
              ))}
            </div>
            <Link href={`/blog/${item.id}`} className="mx-auto w-60 rounded-full bg-primary py-2.5 text-center text-sm font-medium text-white">
              READ MORE
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSlider;
