/**
 * TypeScript interfaces for real estate financial calculations
 * Used for Cap Rate, IRR, NPV, and other investment analysis
 */

export interface PropertyFinancials {
  /** Purchase price of the property */
  purchasePrice: number;
  /** Annual rental income */
  annualRentalIncome: number;
  /** Annual operating expenses (excluding debt service) */
  annualOperatingExpenses: number;
  /** Annual debt service (mortgage payments) */
  annualDebtService?: number;
  /** Down payment percentage (0-1) */
  downPaymentPercent: number;
  /** Loan interest rate (annual, as decimal) */
  interestRate: number;
  /** Loan term in years */
  loanTermYears: number;
  /** Expected annual appreciation rate (as decimal) */
  appreciationRate?: number;
  /** Expected annual rental growth rate (as decimal) */
  rentalGrowthRate?: number;
  /** Expected annual expense growth rate (as decimal) */
  expenseGrowthRate?: number;
  /** Holding period in years */
  holdingPeriod?: number;
  /** Discount rate for NPV calculation (as decimal) */
  discountRate?: number;
}

export interface ProFormaInputs {
  /** Property purchase price */
  purchasePrice: number;
  /** Monthly rental income */
  monthlyRentalIncome: number;
  /** Monthly operating expenses */
  monthlyOperatingExpenses: number;
  /** Monthly debt service (if applicable) */
  monthlyDebtService?: number;
  /** Vacancy rate (0-1) */
  vacancyRate: number;
  /** Management fee percentage (0-1) */
  managementFeePercent: number;
  /** Maintenance reserve percentage (0-1) */
  maintenanceReservePercent: number;
  /** Property taxes (annual) */
  propertyTaxes: number;
  /** Insurance (annual) */
  insurance: number;
  /** Other annual expenses */
  otherExpenses: number;
}

export interface ProFormaOutputs {
  /** Gross rental income (annual) */
  grossRentalIncome: number;
  /** Effective rental income after vacancy */
  effectiveRentalIncome: number;
  /** Total operating expenses (annual) */
  totalOperatingExpenses: number;
  /** Net operating income (NOI) */
  noi: number;
  /** Cash flow before debt service */
  cashFlowBeforeDebt: number;
  /** Cash flow after debt service */
  cashFlowAfterDebt: number;
  /** Cap rate (NOI / Purchase Price) */
  capRate: number;
  /** Cash-on-cash return (Annual Cash Flow / Down Payment) */
  cashOnCashReturn: number;
  /** Gross rent multiplier (Purchase Price / Annual Rent) */
  grossRentMultiplier: number;
}

export interface InvestmentMetrics {
  /** Capitalization rate (NOI / Property Value) */
  capRate: number;
  /** Internal Rate of Return (annualized) */
  irr: number;
  /** Net Present Value */
  npv: number;
  /** Cash-on-cash return */
  cashOnCashReturn: number;
  /** Debt service coverage ratio */
  dscr: number;
  /** Break-even occupancy rate */
  breakEvenOccupancy: number;
}

export interface CashFlowProjection {
  /** Year of projection */
  year: number;
  /** Annual rental income */
  rentalIncome: number;
  /** Annual operating expenses */
  operatingExpenses: number;
  /** Net operating income */
  noi: number;
  /** Debt service payment */
  debtService: number;
  /** Cash flow after debt service */
  cashFlow: number;
  /** Cumulative cash flow */
  cumulativeCashFlow: number;
  /** Property value at end of year */
  propertyValue: number;
}

export interface MarketAnalysisData {
  /** Property address or identifier */
  propertyId: string;
  /** Comparable properties for analysis */
  comparables: ComparableProperty[];
  /** Market trends data */
  marketTrends: MarketTrend[];
  /** Price per square foot */
  pricePerSqFt: number;
  /** Average days on market */
  avgDaysOnMarket: number;
  /** Market cap rate */
  marketCapRate: number;
}

export interface ComparableProperty {
  /** Property address */
  address: string;
  /** Sale price */
  salePrice: number;
  /** Square footage */
  squareFeet: number;
  /** Price per square foot */
  pricePerSqFt: number;
  /** Number of bedrooms */
  bedrooms: number;
  /** Number of bathrooms */
  bathrooms: number;
  /** Year built */
  yearBuilt: number;
  /** Sale date */
  saleDate: Date;
  /** Distance from subject property (miles) */
  distance: number;
}

export interface MarketTrend {
  /** Date of data point */
  date: Date;
  /** Average sale price */
  averagePrice: number;
  /** Median sale price */
  medianPrice: number;
  /** Number of sales */
  salesCount: number;
  /** Average days on market */
  avgDaysOnMarket: number;
  /** Price per square foot */
  pricePerSqFt: number;
}




