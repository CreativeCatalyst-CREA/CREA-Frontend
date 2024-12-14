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
        <SwiperSlide key={item.id} className="!w-56 pt-8 lg:!w-[400px]">
          <div className="flex flex-col rounded-3xl bg-white px-2 py-2 lg:px-5 lg:py-4">
            <Image src={item.imgUrl} alt={item.title} width={355.5} height={355.5} className="rounded-3xl" sizes="(max-width: 1024px) 164px, 355.5px" layout="intrinsic" />
            <h4 className="mt-4 text-center font-extrabold lg:text-4xl">{item.title}</h4>
            <div className="flex h-20 flex-col items-center justify-center lg:h-28">
              {item.description.map((text) => (
                <p key={text} className="text-center text-xs lg:text-base">
                  {text}
                </p>
              ))}
            </div>
            <Link href={`/blog/${item.id}`} className="mx-auto w-36 rounded-full bg-primary py-2.5 text-center text-xs font-medium text-white lg:w-60 lg:text-sm">
              READ MORE
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSlider;
