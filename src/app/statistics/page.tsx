'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

const DonutChart = dynamic(() => import('@/components/statistics/donut-chart'), {
  ssr: false,
});

const data = [
  {name: 'Grants', value: 15},
  {name: 'Investment Pool', value: 15},
  {name: 'Investors', value: 40},
  {name: 'Community', value: 20},
  {name: 'Development Team', value: 10},
];

const Statistics = () => {
  return (
    <main
      className="overflow-hidden pb-40"
      style={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="fixed -top-96 right-0 -z-10 size-[800px] -rotate-45">
        <Image src="/img/noisy-gradients.png" fill alt="" className="blur-[300px]" />
      </div>
      <div className="fixed -bottom-96 left-0 -z-10 size-[800px] -rotate-45">
        <Image src="/img/noisy-gradients.png" fill alt="" className="blur-[300px]" />
      </div>
      <section className="container mt-24 flex flex-col items-center">
        <h1 className="text-center text-2xl font-bold text-white lg:text-8xl">
          THE ICO <br /> ALLOCATION
        </h1>
      </section>
      <section className="container mt-16 lg:mt-24">
        <div className="hidden lg:block">
          <DonutChart data={data} width={1020} height={600} radius={200} />
        </div>
        <div className="block lg:hidden">
          <DonutChart data={data} width={450} height={300} radius={140} />
        </div>
      </section>
    </main>
  );
};

export default Statistics;
