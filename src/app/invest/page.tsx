import InvestSlider from '@/components/invest/invest-slider';
import Image from 'next/image';
import {IInvestPost} from '@/types/invest';
import InvestPost from '@/components/invest/invest-item';

const Invest = () => {
  const sliderList: Array<IInvestPost> = [
    {
      id: '1',
      title: 'MISSION',
      description: 'Our mission is to redefine how creativity is valued and supported in the modern world. We believe that every creator deserves access to the resources, guidance, and financial backing necessary to transform their visionary ideas into reality',
      imgUrl: '/img/invest-mission.png',
    },
    {
      id: '2',
      title: 'CREA',
      description: 'At Creative Catalyst, our vision is to redefine the way creativity is nurtured and funded, bridging the gap between traditional industries and the modern digital landscape',
      imgUrl: '/img/invest-crea.png',
    },
    {
      id: '3',
      title: 'Token',
      description: 'The CREA token is used to invest in creative projects, allowing for direct financial support and growth of innovative ideas within the community',
      imgUrl: '/img/invest-token.png',
    },
  ];

  return (
    <main
      className="overflow-hidden pb-80"
      style={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="fixed right-[-15%] top-[550px] -z-10 size-[800px]">
        <Image src="/img/noisy-gradients.png" fill alt="" className="rotate-90 blur-[200px]" />
      </div>
      <div className="fixed left-[-30%] top-56 -z-10">
        <Image src="/img/noisy-gradients.png" alt="" width={800} height={800} className="blur-[200px]" />
      </div>
      <section className="container mt-24 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white lg:text-8xl">THE CONCEPT</h1>
        <h5 className="mt-6 text-lg font-medium text-primary lg:mt-12 lg:text-3xl">Inspiring creativity building the future</h5>
        <p className="mt-8 text-center font-extralight leading-8 text-white">
          Creative Catalyst (CREA) is a pioneering hybrid platform that blends centralized and decentralized functions to empower creative individuals and industries. By integrating crypto investment and blockchain technology, CREA aims to elevate the prestige of creativity,
          provide essential funding, and foster industry growth while making cryptocurrency accessible to a broader audience.
        </p>
      </section>
      <section className="mt-16 lg:mt-24">
        <div className="hidden lg:block">
          <InvestSlider postList={sliderList} />
        </div>
        <div className="container block space-y-5 lg:hidden">
          {sliderList.map((item) => (
            <InvestPost key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Invest;
