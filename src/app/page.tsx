export default function Home() {
  return (
    <main className="h-svh bg-[url('/img/bg-home.png')] bg-cover bg-fixed bg-center bg-no-repeat pt-16">
      <section className="container flex flex-col rounded-3xl bg-black/50 text-center">
        <h1 className="mt-6 text-7xl font-bold leading-[120px] text-white shadow-2xl">
          Creative Catalyst <br /> Dive into the
          <span className="text-primary">Future </span>
        </h1>
        <p className="mb-20 mt-2.5 text-4xl text-white">Experience art like never before</p>
      </section>
      <section className="container mt-28 flex flex-row justify-center gap-x-20">
        <button className="app-base-transform w-60 rounded-full border-4 border-white py-6 text-2xl font-semibold text-primary hover:border-primary hover:bg-primary hover:text-white">WHITEPAPER</button>
        <button className="app-base-transform w-60 rounded-full border-4 border-white py-6 text-2xl font-semibold text-primary hover:border-primary hover:bg-primary hover:text-white">INVEST</button>
      </section>
    </main>
  );
}
