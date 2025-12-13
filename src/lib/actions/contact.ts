'use server';

import { z } from 'zod';

// Contact form validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormResult =
  | { success: true; message: string }
  | { success: false; error: string; fieldErrors?: Record<string, string> };

/**
 * Server action to handle contact form submissions
 * In production, this would integrate with:
 * - Email service (SendGrid, Resend, etc.)
 * - CRM system (Follow Up Boss, etc.)
 * - Database for lead storage
 */
export async function submitContactForm(
  formData: FormData
): Promise<ContactFormResult> {
  try {
    // Extract form data
    const rawData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || undefined,
      message: formData.get('message') as string,
    };

    // Validate form data
    const validationResult = contactSchema.safeParse(rawData);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });

      return {
        success: false,
        error: 'Please correct the errors in the form',
        fieldErrors,
      };
    }

    const validatedData = validationResult.data;

    // TODO: Integrate with email service or CRM
    // Example integration points:
    // 1. Send email notification to Dr. Jan Duffy
    // 2. Create lead in Follow Up Boss or RealScout
    // 3. Store in database for tracking

    // For now, log the submission (in production, remove this)
    console.log('Contact form submission:', {
      name: `${validatedData.firstName} ${validatedData.lastName}`,
      email: validatedData.email,
      phone: validatedData.phone,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      message:
        'Thank you for your message! Dr. Jan Duffy will get back to you soon.',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: 'An error occurred while submitting your message. Please try again later.',
    };
  }
}




