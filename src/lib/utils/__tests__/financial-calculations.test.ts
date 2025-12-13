/**
 * Unit tests for financial calculation utilities
 * Tests Cap Rate, IRR, NPV, and other investment metrics
 */

import {
  calculateNOI,
  calculateCapRate,
  calculateCashOnCashReturn,
  calculateGrossRentMultiplier,
  calculateDSCR,
  calculateMonthlyMortgagePayment,
  calculateNPV,
  calculateIRR,
  generateProForma,
  generateCashFlowProjections,
  calculateInvestmentMetrics,
} from '@/lib/utils/financial-calculations';
import type { PropertyFinancials, ProFormaInputs } from '@/lib/types/financial';

describe('Financial Calculations', () => {
  describe('calculateNOI', () => {
    it('should calculate NOI correctly', () => {
      expect(calculateNOI(100000, 30000)).toBe(70000);
      expect(calculateNOI(50000, 20000)).toBe(30000);
    });

    it('should handle zero rental income', () => {
      expect(calculateNOI(0, 10000)).toBe(-10000);
    });

    it('should handle zero expenses', () => {
      expect(calculateNOI(100000, 0)).toBe(100000);
    });
  });

  describe('calculateCapRate', () => {
    it('should calculate cap rate as percentage', () => {
      expect(calculateCapRate(70000, 1000000)).toBe(7);
      expect(calculateCapRate(50000, 1000000)).toBe(5);
    });

    it('should return 0 for zero property value', () => {
      expect(calculateCapRate(70000, 0)).toBe(0);
    });

    it('should handle negative NOI', () => {
      expect(calculateCapRate(-10000, 1000000)).toBe(-1);
    });
  });

  describe('calculateCashOnCashReturn', () => {
    it('should calculate cash-on-cash return as percentage', () => {
      expect(calculateCashOnCashReturn(20000, 100000)).toBe(20);
      expect(calculateCashOnCashReturn(15000, 200000)).toBe(7.5);
    });

    it('should return 0 for zero cash invested', () => {
      expect(calculateCashOnCashReturn(20000, 0)).toBe(0);
    });
  });

  describe('calculateGrossRentMultiplier', () => {
    it('should calculate GRM correctly', () => {
      expect(calculateGrossRentMultiplier(1000000, 100000)).toBe(10);
      expect(calculateGrossRentMultiplier(500000, 50000)).toBe(10);
    });

    it('should return 0 for zero rental income', () => {
      expect(calculateGrossRentMultiplier(1000000, 0)).toBe(0);
    });
  });

  describe('calculateDSCR', () => {
    it('should calculate DSCR correctly', () => {
      expect(calculateDSCR(70000, 50000)).toBe(1.4);
      expect(calculateDSCR(100000, 80000)).toBe(1.25);
    });

    it('should return Infinity for zero debt service', () => {
      expect(calculateDSCR(70000, 0)).toBe(Infinity);
    });
  });

  describe('calculateMonthlyMortgagePayment', () => {
    it('should calculate mortgage payment correctly', () => {
      const payment = calculateMonthlyMortgagePayment(400000, 0.04, 30);
      expect(payment).toBeCloseTo(1909.66, 2);
    });

    it('should handle zero interest rate', () => {
      const payment = calculateMonthlyMortgagePayment(400000, 0, 30);
      expect(payment).toBeCloseTo(1111.11, 2);
    });

    it('should return 0 for zero principal', () => {
      expect(calculateMonthlyMortgagePayment(0, 0.04, 30)).toBe(0);
    });
  });

  describe('calculateNPV', () => {
    it('should calculate NPV correctly', () => {
      const cashFlows = [20000, 25000, 30000, 35000, 40000];
      const npv = calculateNPV(cashFlows, 0.08, 100000);
      expect(npv).toBeCloseTo(12419.28, 2);
    });

    it('should handle negative NPV', () => {
      const cashFlows = [5000, 5000, 5000];
      const npv = calculateNPV(cashFlows, 0.1, 20000);
      expect(npv).toBeLessThan(0);
    });

    it('should handle zero discount rate', () => {
      const cashFlows = [10000, 10000, 10000];
      const npv = calculateNPV(cashFlows, 0, 25000);
      expect(npv).toBe(5000);
    });
  });

  describe('calculateIRR', () => {
    it('should calculate IRR approximately', () => {
      const cashFlows = [20000, 25000, 30000, 35000, 40000];
      const irr = calculateIRR(cashFlows, 100000);
      expect(irr).toBeGreaterThan(0);
      expect(irr).toBeLessThan(50);
    });

    it('should handle negative cash flows', () => {
      const cashFlows = [-5000, 10000, 10000];
      const irr = calculateIRR(cashFlows, 0);
      expect(typeof irr).toBe('number');
    });
  });

  describe('generateProForma', () => {
    it('should generate complete pro forma analysis', () => {
      const inputs: ProFormaInputs = {
        purchasePrice: 500000,
        monthlyRentalIncome: 3000,
        monthlyOperatingExpenses: 800,
        vacancyRate: 0.05,
        managementFeePercent: 0.08,
        maintenanceReservePercent: 0.05,
        propertyTaxes: 6000,
        insurance: 1200,
        otherExpenses: 0,
      };

      const result = generateProForma(inputs);

      expect(result.grossRentalIncome).toBe(36000);
      expect(result.effectiveRentalIncome).toBe(34200);
      expect(result.noi).toBeGreaterThan(0);
      expect(result.capRate).toBeGreaterThan(0);
      expect(result.cashOnCashReturn).toBeGreaterThan(0);
    });

    it('should handle debt service when provided', () => {
      const inputs: ProFormaInputs = {
        purchasePrice: 500000,
        monthlyRentalIncome: 3000,
        monthlyOperatingExpenses: 800,
        monthlyDebtService: 1500,
        vacancyRate: 0.05,
        managementFeePercent: 0.08,
        maintenanceReservePercent: 0.05,
        propertyTaxes: 6000,
        insurance: 1200,
        otherExpenses: 0,
      };

      const result = generateProForma(inputs);

      expect(result.cashFlowAfterDebt).toBeLessThan(result.cashFlowBeforeDebt);
    });
  });

  describe('generateCashFlowProjections', () => {
    it('should generate projections for holding period', () => {
      const financials: PropertyFinancials = {
        purchasePrice: 500000,
        annualRentalIncome: 36000,
        annualOperatingExpenses: 15000,
        downPaymentPercent: 0.2,
        interestRate: 0.04,
        loanTermYears: 30,
        rentalGrowthRate: 0.03,
        expenseGrowthRate: 0.02,
        appreciationRate: 0.03,
        holdingPeriod: 5,
      };

      const projections = generateCashFlowProjections(financials, 5);

      expect(projections).toHaveLength(5);
      expect(projections[0].year).toBe(1);
      expect(projections[0].rentalIncome).toBeGreaterThan(0);
      expect(projections[4].year).toBe(5);
    });

    it('should apply growth rates correctly', () => {
      const financials: PropertyFinancials = {
        purchasePrice: 500000,
        annualRentalIncome: 36000,
        annualOperatingExpenses: 15000,
        downPaymentPercent: 0.2,
        interestRate: 0.04,
        loanTermYears: 30,
        rentalGrowthRate: 0.05,
        holdingPeriod: 3,
      };

      const projections = generateCashFlowProjections(financials, 3);

      expect(projections[1].rentalIncome).toBeGreaterThan(
        projections[0].rentalIncome
      );
      expect(projections[2].rentalIncome).toBeGreaterThan(
        projections[1].rentalIncome
      );
    });
  });

  describe('calculateInvestmentMetrics', () => {
    it('should calculate all investment metrics', () => {
      const financials: PropertyFinancials = {
        purchasePrice: 500000,
        annualRentalIncome: 36000,
        annualOperatingExpenses: 15000,
        downPaymentPercent: 0.2,
        interestRate: 0.04,
        loanTermYears: 30,
        holdingPeriod: 10,
        discountRate: 0.08,
      };

      const metrics = calculateInvestmentMetrics(financials, 10);

      expect(metrics.capRate).toBeGreaterThan(0);
      expect(metrics.irr).toBeGreaterThan(-100);
      expect(metrics.irr).toBeLessThan(100);
      expect(typeof metrics.npv).toBe('number');
      expect(metrics.cashOnCashReturn).toBeGreaterThan(-100);
      expect(metrics.dscr).toBeGreaterThan(0);
      expect(metrics.breakEvenOccupancy).toBeGreaterThan(0);
      expect(metrics.breakEvenOccupancy).toBeLessThan(100);
    });
  });
});




