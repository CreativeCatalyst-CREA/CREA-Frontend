'use client';

import {useState} from 'react';
import ArrowLeft from '@/assets/icon/arrow-left.svg';
import ArrowRight from '@/assets/icon/arrow-right.svg';
import X from '@/assets/icon/x.svg';
import {useRouter} from 'next/navigation';

export interface BlogPostDetailProps {
  faq: Array<{title: string; content: string}>;
  title: string;
}

const BlogPostDetail = ({faq, title}: BlogPostDetailProps) => {
  const [count, setCount] = useState<number>(0);
  const router = useRouter();

  const showPreviousContent = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const showNextContent = () => {
    setCount((prevCount) => Math.min(prevCount + 1, faq.length - 1));
  };

  return (
    <div className="relative rounded-lg bg-white p-6 lg:rounded-3xl lg:px-9 lg:py-4">
      <button className="absolute -right-5 -top-5 hidden size-6 lg:block" onClick={() => router.back()}>
        <X className="size-6 stroke-white" />
      </button>
      <div className="flex flex-row items-center justify-between border-b border-black pb-6 lg:hidden">
        <h1 className="text-xl font-bold">{title}</h1>
        <button className="size-6" onClick={() => router.back()}>
          <X className="size-6 stroke-black" />
        </button>
      </div>
      <div className="mt-6 space-y-6 lg:mt-0">
        {faq[count || 0].content.split('\n').map((line, index) => (
          <div key={index} dangerouslySetInnerHTML={{__html: line}} />
        ))}
      </div>
      {faq.length > 1 && (
        <div className="mt-4 flex flex-row justify-center gap-x-2">
          <button onClick={() => showPreviousContent()} className={`grid size-6 place-items-center rounded-full ${count == faq.length - 1 ? 'bg-primary' : 'bg-transparent'}`}>
            <ArrowLeft className={`${count == faq.length - 1 ? 'text-white' : 'text-gray-600'}`} />
          </button>
          <button onClick={() => showNextContent()} className={`grid size-6 place-items-center rounded-full ${count == 0 ? 'bg-transparent' : 'bg-primary'}`}>
            <ArrowRight className={`${count == 0 ? 'text-gray-600' : 'text-white'}`} />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPostDetail;
