'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import {cn} from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({className, ...props}, ref) => <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'app-base-transform flex flex-1 items-center bg-white px-8 py-4 text-xl font-semibold uppercase leading-8 text-black lg:justify-center lg:text-4xl [&[data-state=closed]]:rounded-full [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:rounded-t-3xl [&[data-state=open]]:bg-primary [&[data-state=open]]:text-white',
        className
      )}
      {...props}
    >
      {children}
      {/* <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" /> */}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Content ref={ref} className="app-base-transform overflow-hidden rounded-b-3xl bg-white text-sm text-black data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>
    <div className={cn('px-8 py-4 leading-8 text-black lg:px-10 lg:py-10 lg:text-center lg:text-xl', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent};
