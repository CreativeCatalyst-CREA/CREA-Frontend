import InvestSlider from '@/components/invest/invest-slider';
import Image from 'next/image';

const Invest = () => {
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
        <h1 className="text-8xl font-bold text-white">THE CONCEPT</h1>
        <h5 className="mt-12 text-3xl font-medium text-primary">Inspiring creativity building the future</h5>
        <p className="mt-8 text-center font-extralight leading-8 text-white">
          Creative Catalyst (CREA) is a pioneering hybrid platform that blends centralized and decentralized functions to empower creative individuals and industries. By integrating crypto investment and blockchain technology, CREA aims to elevate the prestige of creativity,
          provide essential funding, and foster industry growth while making cryptocurrency accessible to a broader audience.
        </p>
      </section>
      <section className="mt-24">
        <InvestSlider />
      </section>
    </main>
  );
};

export default Invest;
