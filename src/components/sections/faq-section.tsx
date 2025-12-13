'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CRAIG_RANCH_FAQS } from '@/lib/metadata';

export default function FAQSection() {
  const faqs = CRAIG_RANCH_FAQS;

  return (
    <section className='py-20 bg-[#F7F9FC]'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Frequently Asked Questions About Craig Ranch
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Find answers to common questions about buying and selling in Craig
            Ranch
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type='single' collapsible className='w-full space-y-4'>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='bg-white rounded-lg px-6 border border-gray-200'
            >
              <AccordionTrigger className='text-left text-lg font-semibold text-[#0A2540] hover:no-underline'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='text-gray-600 leading-relaxed pt-2'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
