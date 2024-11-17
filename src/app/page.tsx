import Image from "next/image";

export default function Home() {
  return (
    <main className="h-svh bg-[url('/img/bg-home.png')] bg-cover bg-no-repeat bg-center bg-fixed pt-16">
      <section className="flex flex-col container rounded-3xl bg-black/50 text-center">
        <h1 className="font-bold text-7xl text-white mt-6 leading-[120px] shadow-2xl">
          Creative Catalyst <br /> Dive into the
          <span className="text-primary">Future </span>
        </h1>
        <p className="text-4xl mt-2.5 text-white mb-20">
          Experience art like never before
        </p>
      </section>
      <section className="container flex flex-row gap-x-20 justify-center mt-28">
        <button className="app-base-transform text-2xl font-semibold text-primary rounded-full border-4 border-white w-60 py-6 hover:bg-primary hover:text-white hover:border-primary">
          WHITEPAPER
        </button>
        <button className="app-base-transform text-2xl font-semibold text-primary rounded-full border-4 border-white w-60 py-6 hover:bg-primary hover:text-white hover:border-primary">
          INVEST
        </button>
      </section>
    </main>
  );
}
