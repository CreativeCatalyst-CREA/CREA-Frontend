'use client';

import {useState} from 'react';
import ArrowLeft from '@/assets/icon/arrow-left.svg';
import ArrowRight from '@/assets/icon/arrow-right.svg';
import X from '@/assets/icon/x.svg';
import {useRouter} from 'next/navigation';

export interface BlogPostDetailProps {
  faq: Array<{title: string; content: string}>;
}

const BlogPostDetail = ({faq}: BlogPostDetailProps) => {
  const [count, setCount] = useState<number>(0);
  const router = useRouter();

  const showPreviousContent = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const showNextContent = () => {
    setCount((prevCount) => Math.min(prevCount + 1, faq.length - 1));
  };

  return (
    <div className="relative rounded-3xl bg-white px-9 py-4">
      <button className="absolute -right-5 -top-5 size-6" onClick={() => router.back()}>
        <X className="size-6" />
      </button>
      <div className="space-y-6">
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
