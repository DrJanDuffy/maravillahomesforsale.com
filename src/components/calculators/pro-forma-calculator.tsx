/**
 * ProFormaCalculator Component
 * Client component for interactive financial calculations
 * Includes Zod validation and accessibility features
 */

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  proFormaInputsSchema,
  type ProFormaInputsInput,
} from '@/lib/schemas/financial';
import { generateProForma } from '@/lib/utils/financial-calculations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Home,
  AlertCircle,
} from 'lucide-react';

/**
 * Format currency for display
 */
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format percentage for display
 */
function formatPercent(value: number, decimals: number = 2): string {
  return `${value.toFixed(decimals)}%`;
}

export default function ProFormaCalculator() {
  const [results, setResults] = useState<ReturnType<typeof generateProForma> | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProFormaInputsInput>({
    resolver: zodResolver(proFormaInputsSchema),
    defaultValues: {
      purchasePrice: 500000,
      monthlyRentalIncome: 3000,
      monthlyOperatingExpenses: 800,
      vacancyRate: 0.05,
      managementFeePercent: 0.08,
      maintenanceReservePercent: 0.05,
      propertyTaxes: 6000,
      insurance: 1200,
      otherExpenses: 0,
    },
  });

  const onSubmit = (data: ProFormaInputsInput) => {
    setIsCalculating(true);
    try {
      const proFormaResults = generateProForma(data);
      setResults(proFormaResults);
    } catch (error) {
      console.error('Error calculating pro forma:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <section
      className='py-16 bg-white'
      aria-labelledby='pro-forma-calculator-heading'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2
            id='pro-forma-calculator-heading'
            className='text-4xl font-bold text-[#0A2540] mb-4'
          >
            Pro Forma Calculator
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Analyze property investment potential with comprehensive financial
            projections
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Input Form */}
          <Card className='border-2'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Calculator className='h-6 w-6 text-[#3A8DDE]' />
                Property Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-6'
                aria-label='Pro forma calculator form'
              >
                {/* Purchase Price */}
                <div className='space-y-2'>
                  <Label htmlFor='purchasePrice'>
                    Purchase Price <span className='text-red-500'>*</span>
                  </Label>
                  <div className='relative'>
                    <DollarSign className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <Input
                      id='purchasePrice'
                      type='number'
                      step='1000'
                      className='pl-10'
                      {...register('purchasePrice', { valueAsNumber: true })}
                      aria-invalid={errors.purchasePrice ? 'true' : 'false'}
                      aria-describedby={
                        errors.purchasePrice
                          ? 'purchasePrice-error'
                          : undefined
                      }
                    />
                  </div>
                  {errors.purchasePrice && (
                    <p
                      id='purchasePrice-error'
                      className='text-sm text-red-600 flex items-center gap-1'
                      role='alert'
                    >
                      <AlertCircle className='h-4 w-4' />
                      {errors.purchasePrice.message}
                    </p>
                  )}
                </div>

                {/* Monthly Rental Income */}
                <div className='space-y-2'>
                  <Label htmlFor='monthlyRentalIncome'>
                    Monthly Rental Income <span className='text-red-500'>*</span>
                  </Label>
                  <div className='relative'>
                    <DollarSign className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <Input
                      id='monthlyRentalIncome'
                      type='number'
                      step='100'
                      className='pl-10'
                      {...register('monthlyRentalIncome', {
                        valueAsNumber: true,
                      })}
                      aria-invalid={
                        errors.monthlyRentalIncome ? 'true' : 'false'
                      }
                      aria-describedby={
                        errors.monthlyRentalIncome
                          ? 'monthlyRentalIncome-error'
                          : undefined
                      }
                    />
                  </div>
                  {errors.monthlyRentalIncome && (
                    <p
                      id='monthlyRentalIncome-error'
                      className='text-sm text-red-600 flex items-center gap-1'
                      role='alert'
                    >
                      <AlertCircle className='h-4 w-4' />
                      {errors.monthlyRentalIncome.message}
                    </p>
                  )}
                </div>

                {/* Monthly Operating Expenses */}
                <div className='space-y-2'>
                  <Label htmlFor='monthlyOperatingExpenses'>
                    Monthly Operating Expenses{' '}
                    <span className='text-red-500'>*</span>
                  </Label>
                  <div className='relative'>
                    <DollarSign className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <Input
                      id='monthlyOperatingExpenses'
                      type='number'
                      step='100'
                      className='pl-10'
                      {...register('monthlyOperatingExpenses', {
                        valueAsNumber: true,
                      })}
                      aria-invalid={
                        errors.monthlyOperatingExpenses ? 'true' : 'false'
                      }
                      aria-describedby={
                        errors.monthlyOperatingExpenses
                          ? 'monthlyOperatingExpenses-error'
                          : undefined
                      }
                    />
                  </div>
                  {errors.monthlyOperatingExpenses && (
                    <p
                      id='monthlyOperatingExpenses-error'
                      className='text-sm text-red-600 flex items-center gap-1'
                      role='alert'
                    >
                      <AlertCircle className='h-4 w-4' />
                      {errors.monthlyOperatingExpenses.message}
                    </p>
                  )}
                </div>

                {/* Vacancy Rate */}
                <div className='space-y-2'>
                  <Label htmlFor='vacancyRate'>
                    Vacancy Rate (%) <span className='text-red-500'>*</span>
                  </Label>
                  <Input
                    id='vacancyRate'
                    type='number'
                    step='0.01'
                    min='0'
                    max='100'
                    {...register('vacancyRate', { valueAsNumber: true })}
                    aria-invalid={errors.vacancyRate ? 'true' : 'false'}
                    aria-describedby={
                      errors.vacancyRate ? 'vacancyRate-error' : undefined
                    }
                  />
                  {errors.vacancyRate && (
                    <p
                      id='vacancyRate-error'
                      className='text-sm text-red-600 flex items-center gap-1'
                      role='alert'
                    >
                      <AlertCircle className='h-4 w-4' />
                      {errors.vacancyRate.message}
                    </p>
                  )}
                </div>

                {/* Management Fee */}
                <div className='space-y-2'>
                  <Label htmlFor='managementFeePercent'>
                    Management Fee (%) <span className='text-red-500'>*</span>
                  </Label>
                  <Input
                    id='managementFeePercent'
                    type='number'
                    step='0.01'
                    min='0'
                    max='100'
                    {...register('managementFeePercent', {
                      valueAsNumber: true,
                    })}
                    aria-invalid={
                      errors.managementFeePercent ? 'true' : 'false'
                    }
                    aria-describedby={
                      errors.managementFeePercent
                        ? 'managementFeePercent-error'
                        : undefined
                    }
                  />
                  {errors.managementFeePercent && (
                    <p
                      id='managementFeePercent-error'
                      className='text-sm text-red-600 flex items-center gap-1'
                      role='alert'
                    >
                      <AlertCircle className='h-4 w-4' />
                      {errors.managementFeePercent.message}
                    </p>
                  )}
                </div>

                {/* Maintenance Reserve */}
                <div className='space-y-2'>
                  <Label htmlFor='maintenanceReservePercent'>
                    Maintenance Reserve (%){' '}
                    <span className='text-red-500'>*</span>
                  </Label>
                  <Input
                    id='maintenanceReservePercent'
                    type='number'
                    step='0.01'
                    min='0'
                    max='100'
                    {...register('maintenanceReservePercent', {
                      valueAsNumber: true,
                    })}
                    aria-invalid={
                      errors.maintenanceReservePercent ? 'true' : 'false'
                    }
                    aria-describedby={
                      errors.maintenanceReservePercent
                        ? 'maintenanceReservePercent-error'
                        : undefined
                    }
                  />
                  {errors.maintenanceReservePercent && (
                    <p
                      id='maintenanceReservePercent-error'
                      className='text-sm text-red-600 flex items-center gap-1'
                      role='alert'
                    >
                      <AlertCircle className='h-4 w-4' />
                      {errors.maintenanceReservePercent.message}
                    </p>
                  )}
                </div>

                {/* Property Taxes */}
                <div className='space-y-2'>
                  <Label htmlFor='propertyTaxes'>
                    Annual Property Taxes{' '}
                    <span className='text-red-500'>*</span>
                  </Label>
                  <div className='relative'>
                    <DollarSign className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <Input
                      id='propertyTaxes'
                      type='number'
                      step='100'
                      className='pl-10'
                      {...register('propertyTaxes', { valueAsNumber: true })}
                      aria-invalid={errors.propertyTaxes ? 'true' : 'false'}
                      aria-describedby={
                        errors.propertyTaxes
                          ? 'propertyTaxes-error'
                          : undefined
                      }
                    />
                  </div>
                  {errors.propertyTaxes && (
                    <p
                      id='propertyTaxes-error'
                      className='text-sm text-red-600 flex items-center gap-1'
                      role='alert'
                    >
                      <AlertCircle className='h-4 w-4' />
                      {errors.propertyTaxes.message}
                    </p>
                  )}
                </div>

                {/* Insurance */}
                <div className='space-y-2'>
                  <Label htmlFor='insurance'>
                    Annual Insurance <span className='text-red-500'>*</span>
                  </Label>
                  <div className='relative'>
                    <DollarSign className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <Input
                      id='insurance'
                      type='number'
                      step='100'
                      className='pl-10'
                      {...register('insurance', { valueAsNumber: true })}
                      aria-invalid={errors.insurance ? 'true' : 'false'}
                      aria-describedby={
                        errors.insurance ? 'insurance-error' : undefined
                      }
                    />
                  </div>
                  {errors.insurance && (
                    <p
                      id='insurance-error'
                      className='text-sm text-red-600 flex items-center gap-1'
                      role='alert'
                    >
                      <AlertCircle className='h-4 w-4' />
                      {errors.insurance.message}
                    </p>
                  )}
                </div>

                {/* Other Expenses */}
                <div className='space-y-2'>
                  <Label htmlFor='otherExpenses'>Other Annual Expenses</Label>
                  <div className='relative'>
                    <DollarSign className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <Input
                      id='otherExpenses'
                      type='number'
                      step='100'
                      className='pl-10'
                      {...register('otherExpenses', { valueAsNumber: true })}
                      aria-invalid={errors.otherExpenses ? 'true' : 'false'}
                      aria-describedby={
                        errors.otherExpenses
                          ? 'otherExpenses-error'
                          : undefined
                      }
                    />
                  </div>
                  {errors.otherExpenses && (
                    <p
                      id='otherExpenses-error'
                      className='text-sm text-red-600 flex items-center gap-1'
                      role='alert'
                    >
                      <AlertCircle className='h-4 w-4' />
                      {errors.otherExpenses.message}
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <div className='flex gap-4 pt-4'>
                  <Button
                    type='submit'
                    disabled={isCalculating}
                    className='flex-1 bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
                    aria-label='Calculate pro forma analysis'
                  >
                    {isCalculating ? 'Calculating...' : 'Calculate'}
                  </Button>
                  <Button
                    type='button'
                    variant='outline'
                    onClick={() => {
                      reset();
                      setResults(null);
                    }}
                    aria-label='Reset calculator form'
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          <div className='space-y-6'>
            {results ? (
              <>
                <Card className='border-2 border-[#3A8DDE]'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <TrendingUp className='h-6 w-6 text-[#3A8DDE]' />
                      Pro Forma Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    {/* Key Metrics */}
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='bg-[#F7F9FC] p-4 rounded-lg'>
                        <div className='text-sm text-gray-600 mb-1'>
                          Cap Rate
                        </div>
                        <div className='text-2xl font-bold text-[#0A2540]'>
                          {formatPercent(results.capRate)}
                        </div>
                      </div>
                      <div className='bg-[#F7F9FC] p-4 rounded-lg'>
                        <div className='text-sm text-gray-600 mb-1'>
                          Cash-on-Cash
                        </div>
                        <div className='text-2xl font-bold text-[#0A2540]'>
                          {formatPercent(results.cashOnCashReturn)}
                        </div>
                      </div>
                    </div>

                    {/* Income Statement */}
                    <div className='space-y-3'>
                      <h3 className='font-semibold text-[#0A2540] flex items-center gap-2'>
                        <Home className='h-5 w-5' />
                        Income Statement
                      </h3>
                      <div className='space-y-2 text-sm'>
                        <div className='flex justify-between'>
                          <span className='text-gray-600'>
                            Gross Rental Income:
                          </span>
                          <span className='font-semibold'>
                            {formatCurrency(results.grossRentalIncome)}
                          </span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-600'>
                            Effective Rental Income:
                          </span>
                          <span className='font-semibold'>
                            {formatCurrency(results.effectiveRentalIncome)}
                          </span>
                        </div>
                        <div className='flex justify-between border-t pt-2'>
                          <span className='text-gray-600'>
                            Operating Expenses:
                          </span>
                          <span className='font-semibold text-red-600'>
                            -{formatCurrency(results.totalOperatingExpenses)}
                          </span>
                        </div>
                        <div className='flex justify-between border-t pt-2 font-bold text-lg'>
                          <span className='text-[#0A2540]'>NOI:</span>
                          <span className='text-[#16B286]'>
                            {formatCurrency(results.noi)}
                          </span>
                        </div>
                        <div className='flex justify-between border-t pt-2'>
                          <span className='text-gray-600'>
                            Cash Flow (After Debt):
                          </span>
                          <span className='font-semibold text-[#3A8DDE]'>
                            {formatCurrency(results.cashFlowAfterDebt)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Metrics */}
                    <div className='bg-[#F7F9FC] p-4 rounded-lg'>
                      <div className='text-sm text-gray-600 mb-2'>
                        Gross Rent Multiplier
                      </div>
                      <div className='text-xl font-bold text-[#0A2540]'>
                        {results.grossRentMultiplier.toFixed(2)}x
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className='border-2 border-dashed'>
                <CardContent className='py-12 text-center'>
                  <Calculator className='h-12 w-12 text-gray-400 mx-auto mb-4' />
                  <p className='text-gray-600'>
                    Enter property information and click Calculate to see pro
                    forma results
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}




