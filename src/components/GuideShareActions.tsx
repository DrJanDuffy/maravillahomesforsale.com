'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link2, Mail, Printer, Check } from 'lucide-react';

type GuideShareActionsProps = {
  title: string;
  url: string;
};

export default function GuideShareActions({ title, url }: GuideShareActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: open prompt or do nothing
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const mailtoSubject = encodeURIComponent(`Guide: ${title}`);
  const mailtoBody = encodeURIComponent(
    `I thought you might find this guide helpful:\n\n${title}\n${url}`
  );
  const mailtoHref = `mailto:?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className='flex flex-wrap items-center gap-3'>
      <Button
        type='button'
        variant='outline'
        size='sm'
        onClick={handleCopyLink}
        className='gap-2'
        aria-label='Copy guide link'
      >
        {copied ? (
          <>
            <Check className='h-4 w-4 text-[#16B286]' aria-hidden />
            Copied!
          </>
        ) : (
          <>
            <Link2 className='h-4 w-4' aria-hidden />
            Copy link
          </>
        )}
      </Button>
      <Button
        asChild
        variant='outline'
        size='sm'
        className='gap-2'
        aria-label='Email this guide'
      >
        <a href={mailtoHref}>
          <Mail className='h-4 w-4' aria-hidden />
          Email guide
        </a>
      </Button>
      <Button
        type='button'
        variant='outline'
        size='sm'
        onClick={handlePrint}
        className='gap-2'
        aria-label='Print or save as PDF'
      >
        <Printer className='h-4 w-4' aria-hidden />
        Print / Save as PDF
      </Button>
    </div>
  );
}
