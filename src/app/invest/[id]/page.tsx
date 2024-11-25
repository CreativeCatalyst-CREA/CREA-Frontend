'use client';

import {notFound} from 'next/navigation';
import {use} from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {cardData} from './data';
import Image from 'next/image';

const InvestDetail = ({params: paramsPromise}: {params: Promise<{id: string}>}) => {
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
      <section className="container mt-24 flex flex-col lg:items-center">
        <h1 className="text-2xl font-bold text-white lg:text-8xl">{card.title}</h1>
        <h5 className="mt-2.5 hidden text-5xl font-medium text-primary lg:block">{card.subtitles}</h5>
      </section>
      <section className="container mt-10 lg:mt-24">
        <Accordion type="single" collapsible className="w-full">
          {card.Faq?.map((faq, index) => (
            <AccordionItem value={`item-${index}`} className="my-4 w-full lg:my-10" key={index}>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent>
                <div className="wrapper break-words">
                  {faq.content.split('\n').map((line, index) => (
                    <p key={index} className="my-5" dangerouslySetInnerHTML={{__html: line}} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default InvestDetail;
