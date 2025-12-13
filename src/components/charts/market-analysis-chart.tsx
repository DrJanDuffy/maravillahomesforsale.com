/**
 * MarketAnalysisChart Component
 * Displays market trends and analysis with accessibility features
 * Uses Recharts for data visualization
 */

'use client';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, BarChart3 } from 'lucide-react';
import type { MarketTrend } from '@/lib/types/financial';

export interface MarketAnalysisChartProps {
  /** Market trend data */
  marketTrends: MarketTrend[];
  /** Chart type */
  chartType?: 'line' | 'bar';
  /** Chart title */
  title?: string;
  /** Data key for Y-axis */
  dataKey?: 'averagePrice' | 'medianPrice' | 'salesCount' | 'pricePerSqFt';
  /** Show legend */
  showLegend?: boolean;
}

/**
 * Format currency for tooltip
 */
function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format date for X-axis
 */
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}

/**
 * Custom tooltip component
 */
function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div
        className='bg-white p-3 border border-gray-200 rounded-lg shadow-lg'
        role='tooltip'
        aria-label={`Data point: ${label}`}
      >
        <p className='font-semibold text-[#0A2540] mb-2'>{label}</p>
        {payload.map((entry: any, index: number) => (
          <p
            key={index}
            className='text-sm'
            style={{ color: entry.color }}
          >
            {entry.name}: {formatCurrency(entry.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default function MarketAnalysisChart({
  marketTrends,
  chartType = 'line',
  title = 'Market Analysis',
  dataKey = 'averagePrice',
  showLegend = true,
}: MarketAnalysisChartProps) {
  // Transform data for chart
  const chartData = marketTrends.map((trend) => ({
    date: formatDate(trend.date),
    fullDate: trend.date,
    averagePrice: trend.averagePrice,
    medianPrice: trend.medianPrice,
    salesCount: trend.salesCount,
    pricePerSqFt: trend.pricePerSqFt,
    avgDaysOnMarket: trend.avgDaysOnMarket,
  }));

  // Determine Y-axis label based on dataKey
  const yAxisLabel =
    dataKey === 'salesCount'
      ? 'Number of Sales'
      : dataKey === 'pricePerSqFt'
        ? 'Price per Sq Ft ($)'
        : 'Price ($)';

  const ChartComponent = chartType === 'line' ? LineChart : BarChart;
  const DataComponent = chartType === 'line' ? Line : Bar;

  return (
    <Card
      className='w-full'
      role='region'
      aria-label={`${title} chart`}
      aria-describedby='market-chart-description'
    >
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          {chartType === 'line' ? (
            <TrendingUp className='h-6 w-6 text-[#3A8DDE]' />
          ) : (
            <BarChart3 className='h-6 w-6 text-[#3A8DDE]' />
          )}
          {title}
        </CardTitle>
        <p
          id='market-chart-description'
          className='text-sm text-gray-600 mt-2'
        >
          Market trends and analysis over time. Use arrow keys to navigate data
          points.
        </p>
      </CardHeader>
      <CardContent>
        <div className='w-full' style={{ minHeight: '400px' }}>
          <ResponsiveContainer width='100%' height='100%' minHeight={400}>
            <ChartComponent
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              role='img'
              aria-label={`${title} visualization`}
            >
              <CartesianGrid
                strokeDasharray='3 3'
                stroke='#e5e7eb'
                opacity={0.5}
              />
              <XAxis
                dataKey='date'
                stroke='#6b7280'
                tick={{ fill: '#6b7280', fontSize: 12 }}
                angle={-45}
                textAnchor='end'
                height={80}
              />
              <YAxis
                stroke='#6b7280'
                tick={{ fill: '#6b7280', fontSize: 12 }}
                tickFormatter={(value) => {
                  if (dataKey === 'salesCount') {
                    return value.toString();
                  }
                  return formatCurrency(value);
                }}
                label={{
                  value: yAxisLabel,
                  angle: -90,
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fill: '#6b7280' },
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              {showLegend && (
                <Legend
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType='line'
                />
              )}
              <DataComponent
                type='monotone'
                dataKey={dataKey}
                stroke='#3A8DDE'
                strokeWidth={2}
                fill='#3A8DDE'
                fillOpacity={0.6}
                name={
                  dataKey === 'averagePrice'
                    ? 'Average Price'
                    : dataKey === 'medianPrice'
                      ? 'Median Price'
                      : dataKey === 'salesCount'
                        ? 'Sales Count'
                        : 'Price per Sq Ft'
                }
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              {dataKey === 'averagePrice' && (
                <DataComponent
                  type='monotone'
                  dataKey='medianPrice'
                  stroke='#16B286'
                  strokeWidth={2}
                  strokeDasharray='5 5'
                  name='Median Price'
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              )}
            </ChartComponent>
          </ResponsiveContainer>
        </div>

        {/* Summary Statistics */}
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='bg-[#F7F9FC] p-3 rounded-lg'>
            <div className='text-xs text-gray-600 mb-1'>Avg Price</div>
            <div className='text-lg font-semibold text-[#0A2540]'>
              {formatCurrency(
                chartData.reduce((sum, d) => sum + d.averagePrice, 0) /
                  chartData.length
              )}
            </div>
          </div>
          <div className='bg-[#F7F9FC] p-3 rounded-lg'>
            <div className='text-xs text-gray-600 mb-1'>Median Price</div>
            <div className='text-lg font-semibold text-[#0A2540]'>
              {formatCurrency(
                chartData.reduce((sum, d) => sum + d.medianPrice, 0) /
                  chartData.length
              )}
            </div>
          </div>
          <div className='bg-[#F7F9FC] p-3 rounded-lg'>
            <div className='text-xs text-gray-600 mb-1'>Total Sales</div>
            <div className='text-lg font-semibold text-[#0A2540]'>
              {chartData.reduce((sum, d) => sum + d.salesCount, 0)}
            </div>
          </div>
          <div className='bg-[#F7F9FC] p-3 rounded-lg'>
            <div className='text-xs text-gray-600 mb-1'>Avg Days on Market</div>
            <div className='text-lg font-semibold text-[#0A2540]'>
              {Math.round(
                chartData.reduce((sum, d) => sum + d.avgDaysOnMarket, 0) /
                  chartData.length
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}




