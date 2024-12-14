import BlogSlider from '@/components/blog/blog-slider';
import Image from 'next/image';

const Blog = () => {
  return (
    <main
      className="overflow-hidden pb-80"
      style={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="fixed right-1/3 -z-10 size-[800px]">
        <Image src="/img/noisy-gradients.png" fill alt="" className="rotate-90 blur-[300px]" />
      </div>
      <section className="container mt-24 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-white lg:text-8xl lg:font-bold">THE BLOG</h1>
      </section>
      <section className="bg-red-400 pt-8 lg:mt-24">
        <BlogSlider />
      </section>
    </main>
  );
};

export default Blog;
