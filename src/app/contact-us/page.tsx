import Image from 'next/image';

const ContactUs = () => {
  return (
    <main
      className="overflow-hidden pb-40"
      style={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="fixed -top-96 right-0 -z-10 size-[800px] -rotate-45">
        <Image src="/img/noisy-gradients.png" fill alt="" className="blur-[200px]" />
      </div>
      <div className="fixed -bottom-96 left-0 -z-10 size-[800px] -rotate-45">
        <Image src="/img/noisy-gradients.png" fill alt="" className="blur-[200px]" />
      </div>
      <section className="container mt-24 flex flex-col items-center">
        <h1 className="text-center text-3xl font-bold text-white lg:text-8xl">CONTACT</h1>
      </section>
      <section className="container mt-16 lg:mt-24">
        <div className="flex flex-row overflow-hidden rounded-xl">
          <Image src="/img/contact-us.jpeg" width={477} height={560} alt="contact us" className="hidden object-cover object-right lg:block" />
          <div className="flex w-full flex-col gap-y-6 bg-[#141718] p-10 lg:w-6/12">
            <div className="flex flex-col">
              <label htmlFor="full-name" className="text-gray-100">
                Full Name
              </label>
              <input id="full-name" className="mt-3 rounded-md border border-white/65 bg-transparent px-2 py-2.5 placeholder:text-white/65" placeholder="E.g. Henry Scott" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-100">
                Email
              </label>
              <input id="email" className="mt-3 rounded-md border border-white/65 bg-transparent px-2 py-2.5 placeholder:text-white/65" placeholder="E.g. henry.scott@gmail.com" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-100">
                Message
              </label>
              <textarea id="message" rows={4} className="mt-3 rounded-md border border-white/65 bg-transparent px-2 py-2.5 placeholder:text-white/65" placeholder=" . . ." />
            </div>
            <button className="app-base-transform mx-auto w-60 rounded-full bg-primary py-5 text-2xl font-semibold text-white hover:bg-transparent hover:ring hover:ring-white">SEND</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
