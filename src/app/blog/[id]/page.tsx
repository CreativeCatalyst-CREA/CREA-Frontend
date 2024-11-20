import Image from 'next/image';
import {notFound} from 'next/navigation';
import {use} from 'react';
import {cardData} from './data';
import BlogPostDetail from '@/components/blog/blog-post-detail';

const BlogPost = ({params: paramsPromise}: {params: Promise<{id: string}>}) => {
  const params = use(paramsPromise);

  // Find the card data based on the id in the URL
  const card = cardData.find((card) => card.id === params.id);

  // If card not found, return an error message
  if (!card) return notFound();

  return (
    <main
      className="overflow-hidden pb-80"
      style={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="fixed left-0 top-72 -z-10">
        <Image src="/img/noisy-gradients.png" alt="" width={800} height={800} className="blur-[400px]" />
      </div>
      <section className="container mt-24 flex flex-col items-center">
        <h1 className="text-8xl font-bold text-white">{card.cardTitle}</h1>
      </section>
      <section className="container mt-24">
        <BlogPostDetail faq={card.Faq} />
      </section>
    </main>
  );
};

export default BlogPost;
