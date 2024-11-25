'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {useState} from 'react';
import SwiperCore from 'swiper';
import TeamItem from './team-item';
import {ITeamPersonList} from '@/types/team';
import ArrowLeft from '@/assets/icon/arrow-left.svg';
import ArrowRight from '@/assets/icon/arrow-right.svg';

const TeamMobile = ({teamPersonList}: ITeamPersonList) => {
  const [swiper, setMySwiper] = useState<SwiperCore>();

  return (
    <div className="flex flex-col md:hidden">
      <div>
        <Swiper slidesPerView={'auto'} spaceBetween={16} onInit={(el) => setMySwiper(el)}>
          {teamPersonList.map((item) => (
            <SwiperSlide key={item.name} className="!w-52">
              <TeamItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-3 flex flex-row justify-center gap-x-5">
        <button className="grid size-8 place-items-center rounded-full border border-white" onClick={() => swiper?.slidePrev()}>
          <ArrowLeft className="size-4 text-white" />
        </button>
        <button className="grid size-8 place-items-center rounded-full border border-white" onClick={() => swiper?.slideNext()}>
          <ArrowLeft className="size-4 rotate-180 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TeamMobile;
