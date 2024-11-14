import { DonutChart } from "@/components/statistics/donut-chart";
import Image from "next/image";

const data = [
  { name: "Gants", value: 15 },
  { name: "Investment Pool", value: 15 },
  { name: "Investors", value: 40 },
  { name: "Community", value: 20 },
  { name: "Development Team", value: 10 },
];

const Statistics = () => {
  return (
    <main
      className="overflow-hidden pb-40"
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="fixed -top-96 right-0 -z-10 size-[800px] -rotate-45">
        <Image
          src="/img/noisy-gradients.png"
          fill
          alt=""
          className="blur-[200px]"
        />
      </div>
      <div className="fixed -bottom-96 left-0 -z-10 size-[800px] -rotate-45">
        <Image
          src="/img/noisy-gradients.png"
          fill
          alt=""
          className="blur-[200px]"
        />
      </div>
      <section className="container mt-24 flex flex-col items-center">
        <h1 className="text-center text-8xl font-bold text-white">
          THE ICO <br /> ALLOCATION
        </h1>
      </section>
      <section className="container mt-24">
        <DonutChart data={data} width={1024} height={600} />
      </section>
    </main>
  );
};

export default Statistics;
