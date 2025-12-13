'use client';

import { useActionState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitContactForm } from '@/lib/actions/contact';
import type { ContactFormResult } from '@/lib/actions/contact';

const initialState: ContactFormResult = {
  success: false,
  error: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: ContactFormResult, formData: FormData) => {
      return await submitContactForm(formData);
    },
    initialState
  );

  // Type guard: fieldErrors only exists when success is false
  const fieldErrors = !state.success ? state.fieldErrors : undefined;

  // Track previous success message to detect new successful submissions
  const prevMessageRef = useRef<string | undefined>(undefined);

  // Reset form on successful submission
  // Track the success message to ensure form resets on each successful submission,
  // even if state.success remains true across multiple submissions
  useEffect(() => {
    if (state.success) {
      // Type guard: message exists when success is true
      const currentMessage = 'message' in state ? state.message : undefined;
      
      if (currentMessage && currentMessage !== prevMessageRef.current) {
        const form = document.getElementById('contact-form') as HTMLFormElement;
        if (form) {
          form.reset();
        }
        // Update ref to track this submission's message
        prevMessageRef.current = currentMessage;
      }
    }
  }, [state]); // Depend on entire state object to catch all state changes

  return (
    <form id='contact-form' action={formAction} className='space-y-6'>
      {/* Success Message */}
      {state.success && (
        <div className='p-4 bg-green-50 border border-green-200 rounded-lg text-green-800'>
          {state.message}
        </div>
      )}

      {/* Error Message */}
      {!state.success && state.error && (
        <div className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-800'>
          {state.error}
        </div>
      )}

      <div className='grid md:grid-cols-2 gap-6'>
        <div className='space-y-2'>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
            id='firstName'
            name='firstName'
            placeholder='John'
            required
            disabled={isPending}
            aria-invalid={fieldErrors?.firstName ? 'true' : 'false'}
            aria-describedby={
              fieldErrors?.firstName ? 'firstName-error' : undefined
            }
          />
          {fieldErrors?.firstName && (
            <p id='firstName-error' className='text-sm text-red-600'>
              {fieldErrors.firstName}
            </p>
          )}
        </div>
        <div className='space-y-2'>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input
            id='lastName'
            name='lastName'
            placeholder='Doe'
            required
            disabled={isPending}
            aria-invalid={fieldErrors?.lastName ? 'true' : 'false'}
            aria-describedby={
              fieldErrors?.lastName ? 'lastName-error' : undefined
            }
          />
          {fieldErrors?.lastName && (
            <p id='lastName-error' className='text-sm text-red-600'>
              {fieldErrors.lastName}
            </p>
          )}
        </div>
      </div>
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='john@example.com'
          required
          disabled={isPending}
          aria-invalid={fieldErrors?.email ? 'true' : 'false'}
          aria-describedby={fieldErrors?.email ? 'email-error' : undefined}
        />
        {fieldErrors?.email && (
          <p id='email-error' className='text-sm text-red-600'>
            {fieldErrors.email}
          </p>
        )}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='phone'>Phone</Label>
        <Input
          id='phone'
          name='phone'
          type='tel'
          placeholder='(702) 555-0123'
          disabled={isPending}
          aria-invalid={fieldErrors?.phone ? 'true' : 'false'}
          aria-describedby={fieldErrors?.phone ? 'phone-error' : undefined}
        />
        {fieldErrors?.phone && (
          <p id='phone-error' className='text-sm text-red-600'>
            {fieldErrors.phone}
          </p>
        )}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='message'>Message</Label>
        <Textarea
          id='message'
          name='message'
          placeholder='Tell us how we can help you...'
          className='min-h-[120px]'
          required
          disabled={isPending}
          aria-invalid={fieldErrors?.message ? 'true' : 'false'}
          aria-describedby={fieldErrors?.message ? 'message-error' : undefined}
        />
        {fieldErrors?.message && (
          <p id='message-error' className='text-sm text-red-600'>
            {fieldErrors.message}
          </p>
        )}
      </div>
      <Button
        type='submit'
        disabled={isPending}
        className='w-full bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
