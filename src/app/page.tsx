export default function Home() {
  return (
    <main className="h-svh bg-[url('/img/bg-home.png')] bg-cover bg-fixed bg-center bg-no-repeat pt-16">
      <section className="mx-auto flex w-96 flex-col rounded-3xl bg-black/50 text-center lg:container">
        <h1 className="mt-6 text-4xl font-bold leading-snug tracking-wider text-white shadow-2xl lg:text-7xl lg:leading-[120px]">
          Creative Catalyst <br className="hidden lg:block" /> Dive into the
          <span className="text-primary">Future </span>
        </h1>
        <p className="mb-6 mt-6 text-white lg:mb-20 lg:mt-2.5 lg:text-4xl">Experience art like never before</p>
      </section>
      <section className="container mt-28 flex flex-row justify-center gap-x-20">
        <button className="app-base-transform w-36 rounded-full border-4 border-white py-2 font-semibold text-primary hover:border-primary hover:bg-primary hover:text-white lg:w-60 lg:py-6 lg:text-2xl">WHITEPAPER</button>
        <button className="app-base-transform w-36 rounded-full border-4 border-white py-2 font-semibold text-primary hover:border-primary hover:bg-primary hover:text-white lg:w-60 lg:py-6 lg:text-2xl">INVEST</button>
      </section>
    </main>
  );
}
