import Image from "next/image";
import Dl from "@/assets/icon/dl.svg";
import Effect from "@/assets/icon/effect.svg";

const WhitePaper = () => {
  return (
    <main
      className="overflow-hidden pb-80"
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="fixed right-[512px] top-[512px] -z-10 size-[1000px]">
        <Image
          src="/img/noisy-gradients.png"
          fill
          alt=""
          className="rotate-90 blur-[400px]"
        />
      </div>
      <section className="container mt-24 flex flex-col items-center relative">
        <Effect className="absolute right-0" />
        <div>
          <Effect className="absolute right-40 bottom-0 rotate-180" />
          <Effect className="absolute right-40 bottom-0 -rotate-180" />
        </div>
        <h1 className="text-8xl font-bold text-white">THE WHITEPAPER</h1>
        <button className="mt-16 text-white text-2xl font-semibold bg-primary rounded-full px-6 py-2 gap-x-4 flex flex-row items-center">
          <span>DOWNLOAD</span>
          <Dl />
        </button>
      </section>
    </main>
  );
};

export default WhitePaper;
