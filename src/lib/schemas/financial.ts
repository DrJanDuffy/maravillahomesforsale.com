/**
 * Zod validation schemas for financial data inputs
 * Ensures type safety and data validation for all financial calculations
 */

import { z } from 'zod';

/**
 * Schema for property financial inputs
 */
export const propertyFinancialsSchema = z.object({
  purchasePrice: z
    .number()
    .positive('Purchase price must be positive')
    .min(1000, 'Purchase price must be at least $1,000')
    .max(100000000, 'Purchase price cannot exceed $100,000,000'),
  annualRentalIncome: z
    .number()
    .nonnegative('Rental income cannot be negative')
    .max(10000000, 'Rental income cannot exceed $10,000,000'),
  annualOperatingExpenses: z
    .number()
    .nonnegative('Operating expenses cannot be negative')
    .max(5000000, 'Operating expenses cannot exceed $5,000,000'),
  annualDebtService: z
    .number()
    .nonnegative('Debt service cannot be negative')
    .optional(),
  downPaymentPercent: z
    .number()
    .min(0, 'Down payment percent must be at least 0%')
    .max(1, 'Down payment percent cannot exceed 100%'),
  interestRate: z
    .number()
    .min(0, 'Interest rate cannot be negative')
    .max(0.5, 'Interest rate cannot exceed 50%'),
  loanTermYears: z
    .number()
    .int('Loan term must be a whole number')
    .min(1, 'Loan term must be at least 1 year')
    .max(50, 'Loan term cannot exceed 50 years'),
  appreciationRate: z
    .number()
    .min(-0.5, 'Appreciation rate cannot be less than -50%')
    .max(0.5, 'Appreciation rate cannot exceed 50%')
    .optional(),
  rentalGrowthRate: z
    .number()
    .min(-0.5, 'Rental growth rate cannot be less than -50%')
    .max(0.5, 'Rental growth rate cannot exceed 50%')
    .optional(),
  expenseGrowthRate: z
    .number()
    .min(-0.5, 'Expense growth rate cannot be less than -50%')
    .max(0.5, 'Expense growth rate cannot exceed 50%')
    .optional(),
  holdingPeriod: z
    .number()
    .int('Holding period must be a whole number')
    .min(1, 'Holding period must be at least 1 year')
    .max(50, 'Holding period cannot exceed 50 years')
    .optional(),
  discountRate: z
    .number()
    .min(0, 'Discount rate cannot be negative')
    .max(0.5, 'Discount rate cannot exceed 50%')
    .optional(),
});

/**
 * Schema for pro forma inputs
 */
export const proFormaInputsSchema = z.object({
  purchasePrice: z
    .number()
    .positive('Purchase price must be positive')
    .min(1000, 'Purchase price must be at least $1,000')
    .max(100000000, 'Purchase price cannot exceed $100,000,000'),
  monthlyRentalIncome: z
    .number()
    .nonnegative('Monthly rental income cannot be negative')
    .max(1000000, 'Monthly rental income cannot exceed $1,000,000'),
  monthlyOperatingExpenses: z
    .number()
    .nonnegative('Monthly operating expenses cannot be negative')
    .max(500000, 'Monthly operating expenses cannot exceed $500,000'),
  monthlyDebtService: z
    .number()
    .nonnegative('Monthly debt service cannot be negative')
    .max(500000, 'Monthly debt service cannot exceed $500,000')
    .optional(),
  vacancyRate: z
    .number()
    .min(0, 'Vacancy rate cannot be negative')
    .max(1, 'Vacancy rate cannot exceed 100%'),
  managementFeePercent: z
    .number()
    .min(0, 'Management fee percent cannot be negative')
    .max(1, 'Management fee percent cannot exceed 100%'),
  maintenanceReservePercent: z
    .number()
    .min(0, 'Maintenance reserve percent cannot be negative')
    .max(1, 'Maintenance reserve percent cannot exceed 100%'),
  propertyTaxes: z
    .number()
    .nonnegative('Property taxes cannot be negative')
    .max(1000000, 'Property taxes cannot exceed $1,000,000'),
  insurance: z
    .number()
    .nonnegative('Insurance cannot be negative')
    .max(100000, 'Insurance cannot exceed $100,000'),
  otherExpenses: z
    .number()
    .nonnegative('Other expenses cannot be negative')
    .max(500000, 'Other expenses cannot exceed $500,000'),
});

/**
 * Type exports for use in components
 */
export type PropertyFinancialsInput = z.infer<
  typeof propertyFinancialsSchema
>;
export type ProFormaInputsInput = z.infer<typeof proFormaInputsSchema>;




