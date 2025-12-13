/**
 * Financial calculation utilities for real estate investment analysis
 * Named exports only (no default exports)
 */

import type {
  PropertyFinancials,
  ProFormaInputs,
  ProFormaOutputs,
  InvestmentMetrics,
  CashFlowProjection,
} from '@/lib/types/financial';

/**
 * Calculate Net Operating Income (NOI)
 * NOI = Gross Rental Income - Operating Expenses
 */
export function calculateNOI(
  grossRentalIncome: number,
  operatingExpenses: number
): number {
  return grossRentalIncome - operatingExpenses;
}

/**
 * Calculate Capitalization Rate
 * Cap Rate = NOI / Property Value
 */
export function calculateCapRate(
  noi: number,
  propertyValue: number
): number {
  if (propertyValue === 0) return 0;
  return (noi / propertyValue) * 100; // Return as percentage
}

/**
 * Calculate Cash-on-Cash Return
 * CoC = Annual Cash Flow / Total Cash Invested
 */
export function calculateCashOnCashReturn(
  annualCashFlow: number,
  totalCashInvested: number
): number {
  if (totalCashInvested === 0) return 0;
  return (annualCashFlow / totalCashInvested) * 100; // Return as percentage
}

/**
 * Calculate Gross Rent Multiplier
 * GRM = Property Price / Annual Gross Rental Income
 */
export function calculateGrossRentMultiplier(
  propertyPrice: number,
  annualGrossRentalIncome: number
): number {
  if (annualGrossRentalIncome === 0) return 0;
  return propertyPrice / annualGrossRentalIncome;
}

/**
 * Calculate Debt Service Coverage Ratio
 * DSCR = NOI / Annual Debt Service
 */
export function calculateDSCR(
  noi: number,
  annualDebtService: number
): number {
  if (annualDebtService === 0) return Infinity;
  return noi / annualDebtService;
}

/**
 * Calculate monthly mortgage payment
 * Using standard amortization formula
 */
export function calculateMonthlyMortgagePayment(
  principal: number,
  annualInterestRate: number,
  loanTermYears: number
): number {
  if (principal === 0 || loanTermYears === 0) return 0;

  const monthlyRate = annualInterestRate / 12;
  const numberOfPayments = loanTermYears * 12;

  if (monthlyRate === 0) {
    return principal / numberOfPayments;
  }

  const monthlyPayment =
    (principal *
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return monthlyPayment;
}

/**
 * Calculate Net Present Value (NPV)
 * NPV = Sum of (Cash Flow / (1 + discountRate)^year) - Initial Investment
 */
export function calculateNPV(
  cashFlows: number[],
  discountRate: number,
  initialInvestment: number
): number {
  let npv = -initialInvestment;

  cashFlows.forEach((cashFlow, index) => {
    const year = index + 1;
    const presentValue = cashFlow / Math.pow(1 + discountRate, year);
    npv += presentValue;
  });

  return npv;
}

/**
 * Calculate Internal Rate of Return (IRR)
 * Using iterative approximation (Newton-Raphson method)
 */
export function calculateIRR(
  cashFlows: number[],
  initialInvestment: number,
  maxIterations: number = 100,
  tolerance: number = 0.0001
): number {
  if (cashFlows.length === 0) return 0;

  let rate = 0.1; // Start with 10% guess

  for (let i = 0; i < maxIterations; i++) {
    let npv = -initialInvestment;
    let npvDerivative = 0;

    cashFlows.forEach((cashFlow, index) => {
      const year = index + 1;
      const denominator = Math.pow(1 + rate, year);
      npv += cashFlow / denominator;
      npvDerivative -= (year * cashFlow) / (denominator * (1 + rate));
    });

    if (Math.abs(npv) < tolerance) {
      return rate * 100; // Return as percentage
    }

    if (Math.abs(npvDerivative) < tolerance) {
      break; // Avoid division by zero
    }

    rate = rate - npv / npvDerivative;

    // Keep rate within reasonable bounds
    if (rate < -0.99) rate = -0.99;
    if (rate > 10) rate = 10;
  }

  return rate * 100; // Return as percentage
}

/**
 * Generate pro forma analysis
 * Calculates comprehensive financial metrics for a property
 */
export function generateProForma(inputs: ProFormaInputs): ProFormaOutputs {
  // Calculate annual values
  const grossRentalIncome = inputs.monthlyRentalIncome * 12;
  const effectiveRentalIncome =
    grossRentalIncome * (1 - inputs.vacancyRate);

  // Calculate operating expenses
  const managementFee =
    effectiveRentalIncome * inputs.managementFeePercent;
  const maintenanceReserve =
    effectiveRentalIncome * inputs.maintenanceReservePercent;
  const monthlyOperatingExpensesAnnual =
    inputs.monthlyOperatingExpenses * 12;

  const totalOperatingExpenses =
    managementFee +
    maintenanceReserve +
    monthlyOperatingExpensesAnnual +
    inputs.propertyTaxes +
    inputs.insurance +
    inputs.otherExpenses;

  // Calculate NOI
  const noi = effectiveRentalIncome - totalOperatingExpenses;

  // Calculate cash flows
  const cashFlowBeforeDebt = noi;
  const cashFlowAfterDebt =
    inputs.monthlyDebtService
      ? noi - inputs.monthlyDebtService * 12
      : noi;

  // Calculate metrics
  const capRate = calculateCapRate(noi, inputs.purchasePrice);
  const downPayment = inputs.purchasePrice * 0.2; // Assume 20% down
  const cashOnCashReturn = calculateCashOnCashReturn(
    cashFlowAfterDebt,
    downPayment
  );
  const grossRentMultiplier = calculateGrossRentMultiplier(
    inputs.purchasePrice,
    grossRentalIncome
  );

  return {
    grossRentalIncome,
    effectiveRentalIncome,
    totalOperatingExpenses,
    noi,
    cashFlowBeforeDebt,
    cashFlowAfterDebt,
    capRate,
    cashOnCashReturn,
    grossRentMultiplier,
  };
}

/**
 * Generate cash flow projections over holding period
 */
export function generateCashFlowProjections(
  financials: PropertyFinancials,
  holdingPeriod: number = 10
): CashFlowProjection[] {
  const projections: CashFlowProjection[] = [];
  const downPayment =
    financials.purchasePrice * financials.downPaymentPercent;
  const loanAmount = financials.purchasePrice - downPayment;
  const monthlyPayment = calculateMonthlyMortgagePayment(
    loanAmount,
    financials.interestRate,
    financials.loanTermYears
  );
  const annualDebtService = monthlyPayment * 12;

  let currentRentalIncome = financials.annualRentalIncome;
  let currentExpenses = financials.annualOperatingExpenses;
  let cumulativeCashFlow = -downPayment; // Initial investment
  let currentPropertyValue = financials.purchasePrice;

  for (let year = 1; year <= holdingPeriod; year++) {
    // Apply growth rates
    if (financials.rentalGrowthRate) {
      currentRentalIncome *= 1 + financials.rentalGrowthRate;
    }
    if (financials.expenseGrowthRate) {
      currentExpenses *= 1 + financials.expenseGrowthRate;
    }
    if (financials.appreciationRate) {
      currentPropertyValue *= 1 + financials.appreciationRate;
    }

    const noi = calculateNOI(currentRentalIncome, currentExpenses);
    const cashFlow = noi - annualDebtService;
    cumulativeCashFlow += cashFlow;

    projections.push({
      year,
      rentalIncome: currentRentalIncome,
      operatingExpenses: currentExpenses,
      noi,
      debtService: annualDebtService,
      cashFlow,
      cumulativeCashFlow,
      propertyValue: currentPropertyValue,
    });
  }

  return projections;
}

/**
 * Calculate comprehensive investment metrics
 */
export function calculateInvestmentMetrics(
  financials: PropertyFinancials,
  holdingPeriod: number = 10
): InvestmentMetrics {
  const downPayment =
    financials.purchasePrice * financials.downPaymentPercent;
  const loanAmount = financials.purchasePrice - downPayment;
  const monthlyPayment = calculateMonthlyMortgagePayment(
    loanAmount,
    financials.interestRate,
    financials.loanTermYears
  );
  const annualDebtService = monthlyPayment * 12;

  const noi = calculateNOI(
    financials.annualRentalIncome,
    financials.annualOperatingExpenses
  );
  const annualCashFlow = noi - annualDebtService;

  // Calculate metrics
  const capRate = calculateCapRate(noi, financials.purchasePrice);
  const cashOnCashReturn = calculateCashOnCashReturn(
    annualCashFlow,
    downPayment
  );
  const dscr = calculateDSCR(noi, annualDebtService);

  // Generate cash flow projections for IRR and NPV
  const projections = generateCashFlowProjections(financials, holdingPeriod);
  const cashFlows = projections.map((p) => p.cashFlow);
  // Add sale proceeds at end of holding period
  const finalPropertyValue = projections[projections.length - 1]?.propertyValue || financials.purchasePrice;
  const remainingLoanBalance = calculateRemainingLoanBalance(
    loanAmount,
    financials.interestRate,
    financials.loanTermYears,
    holdingPeriod
  );
  const saleProceeds = finalPropertyValue - remainingLoanBalance;
  cashFlows[cashFlows.length - 1] += saleProceeds;

  const discountRate = financials.discountRate || 0.08; // Default 8%
  const npv = calculateNPV(cashFlows, discountRate, downPayment);
  const irr = calculateIRR(cashFlows, downPayment);

  // Calculate break-even occupancy
  const breakEvenOccupancy =
    (financials.annualOperatingExpenses + annualDebtService) /
    financials.annualRentalIncome;

  return {
    capRate,
    irr,
    npv,
    cashOnCashReturn,
    dscr,
    breakEvenOccupancy: breakEvenOccupancy * 100, // As percentage
  };
}

/**
 * Calculate remaining loan balance after N years
 */
function calculateRemainingLoanBalance(
  principal: number,
  annualInterestRate: number,
  loanTermYears: number,
  yearsPaid: number
): number {
  if (yearsPaid >= loanTermYears) return 0;

  const monthlyRate = annualInterestRate / 12;
  const totalPayments = loanTermYears * 12;
  const paymentsMade = yearsPaid * 12;

  if (monthlyRate === 0) {
    return principal * (1 - paymentsMade / totalPayments);
  }

  const remainingBalance =
    principal *
    ((Math.pow(1 + monthlyRate, totalPayments) -
      Math.pow(1 + monthlyRate, paymentsMade)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1));

  return Math.max(0, remainingBalance);
}




