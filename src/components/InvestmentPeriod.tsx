// components/InvestmentPeriod.tsx
import React, { useState } from 'react';
import { Pause } from 'lucide-react';

// Define a color palette for consistency (copied from previous immersives)
interface AppColors {
  primaryBg: string;
  secondaryBg: string;
  cardBg: string;
  textColor: string;
  accentColor: string;
  secondaryAccent: string;
  borderColor: string;
  hoverColor: string;
  purpleText: string;
  greenText: string;
  redText: string;
  yellowText: string;
  grayText: string;
  lightGrayText: string;
  darkGrayText: string;
  white: string;
}

const colors: AppColors = {
  primaryBg: '#111317',
  secondaryBg: '#191b1f',
  cardBg: '#212428',
  textColor: '#e0e0e0',
  accentColor: '#9246FF',
  secondaryAccent: '#4A4C51',
  borderColor: '#33363b',
  hoverColor: '#2a2d32',
  purpleText: '#9246FF',
  greenText: '#22C55E',
  redText: '#EF4444',
  yellowText: '#FACC15',
  grayText: '#A0A0A0',
  lightGrayText: '#C0C0C0',
  darkGrayText: '#606060',
  white: '#ffffff',
};

const InvestmentPeriod: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(4); // Default to 4 months based on the image

  // This function would handle changing the month, e.g., via a slider or direct input
  const handleMonthChange = (month: number) => {
    // You would add logic here to validate or update the investment period
    setCurrentMonth(month);
  };

  return (
    <div className={`bg-[${colors.cardBg}] p-6 rounded-xl shadow-lg mb-8`}>
      <div className="flex items-center justify-between mb-8">
        <h3 className={`text-xl font-bold text-[${colors.white}]`}>Investment Period</h3>
        <span className={`bg-[${colors.secondaryBg}] text-[${colors.white}] px-4 py-2 rounded-full text-sm font-semibold`}>
          6 Month
        </span>
      </div>

      <p className={`text-[${colors.grayText}] text-sm mb-4`}>Contribution Period (Month)</p>

      <div className="relative w-full h-8 flex items-center">
        {/* Horizontal line for the slider track */}
        <div className={`absolute left-0 right-0 h-0.5 bg-[${colors.borderColor}] rounded-full`}></div>

        {/* Dynamic track filling */}
        <div
          className={`absolute left-0 h-0.5 bg-[${colors.accentColor}] rounded-full`}
          style={{ width: `${(currentMonth / 12) * 100}%` }} // Assuming max 12 months for visual
        ></div>

        {/* Markers (for illustration, not interactive here) */}
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={i}
            className={`absolute h-3 w-0.5 bg-[${colors.borderColor}]`}
            style={{ left: `${(i / 12) * 100}%`, transform: 'translateX(-50%)' }}
          ></div>
        ))}

        {/* Current Month Bubble */}
        <div
          className={`absolute flex flex-col items-center`}
          style={{ left: `${(currentMonth / 12) * 100}%`, transform: 'translateX(-50%)' }}
        >
          <span className={`bg-[${colors.accentColor}] text-[${colors.white}] px-4 py-2 rounded-lg font-semibold text-sm mb-2 shadow-md`}>
            {currentMonth} Month
          </span>
          <div className={`w-8 h-8 rounded-full bg-[${colors.accentColor}] flex items-center justify-center shadow-lg`}>
            <Pause className={`text-[${colors.white}]`} size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPeriod;
