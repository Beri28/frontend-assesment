import React from 'react';
import { 
  ExternalLink, 
  Clock, 
  Share2, 
  Link as LinkIcon, 
  TrendingDown,
  ChevronDown,
  Wallet,
  Lock,
  ArrowUpRight,
  PauseCircle
} from 'lucide-react';
import LineChart from './LineChart';

// Sample data for charts
const generateChartData = (length: number, trend: 'up' | 'down' | 'mixed'): number[] => {
  const data: number[] = [];
  let value = 50;
  
  for (let i = 0; i < length; i++) {
    if (trend === 'up') {
      value += Math.random() * 4 - 1;
    } else if (trend === 'down') {
      value -= Math.random() * 4 - 1;
    } else {
      value += Math.random() * 6 - 3;
    }
    value = Math.max(0, Math.min(100, value));
    data.push(value);
  }
  
  return data;
};

const StakingCard: React.FC<{
  icon: string;
  name: string;
  rewardRate: string;
  change: string;
  isPositive: boolean;
  chartData: number[];
}> = ({ icon, name, rewardRate, change, isPositive, chartData }) => (
  <div className="bg-[#17181C] rounded-2xl p-6 flex flex-col">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <img src={icon} alt={name} className="w-6 h-6 mr-3" />
        <div>
          <div className="flex items-center">
            <span className="text-[#71717A] text-sm">Proof of Stake</span>
          </div>
          <span className="text-white font-medium">{name}</span>
        </div>
      </div>
      <ExternalLink size={16} className="text-[#71717A]" />
    </div>
    
    <div className="mb-4">
      <div className="text-[#71717A] text-sm mb-1">Reward Rate</div>
      <div className="text-white text-2xl font-semibold">{rewardRate}</div>
      <div className={`flex items-center ${isPositive ? 'text-[#22C55E]' : 'text-[#EF4444]'} text-sm mt-1`}>
        {isPositive ? '+' : ''}{change}
      </div>
    </div>

    <LineChart data={chartData} color={isPositive ? '#22C55E' : '#EF4444'} />
  </div>
);

const StakingMetric: React.FC<{
  label: string;
  value: string;
  subValue?: string;
  trend?: 'up' | 'down';
  period?: string;
}> = ({ label, value, subValue, trend, period }) => (
  <div className="bg-[#17181C] rounded-xl p-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-[#71717A] text-sm">{label}</span>
      {period && (
        <span className="text-xs px-2 py-1 rounded-md bg-[#27272A] text-[#71717A]">
          {period}
        </span>
      )}
    </div>
    <div className="flex items-center">
      <span className="text-white text-xl font-semibold">{value}</span>
      {trend && (
        <div className={`ml-2 text-sm ${trend === 'up' ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
          {subValue}
        </div>
      )}
    </div>
  </div>
);

const StakingDashboard = () => {
  // Generate sample data for charts
  const ethData = generateChartData(24, 'up');
  const bnbData = generateChartData(24, 'up');
  const maticData = generateChartData(24, 'down');

  return (
    <div className="p-6 bg-[#0F0F12] min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-1">Top Staking Assets</h1>
          <div className="flex items-center text-[#71717A] text-sm">
            <span>Recommended coins for 24 hours</span>
            <span className="mx-2">•</span>
            <span>3 Assets</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-3">
          <button className="px-3 py-1.5 rounded-full bg-[#27272A] text-[#71717A] text-sm flex items-center">
            24H
            <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="px-3 py-1.5 rounded-full bg-[#27272A] text-[#71717A] text-sm flex items-center">
            Proof of Stake
            <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="px-3 py-1.5 rounded-full bg-[#27272A] text-[#71717A] text-sm flex items-center">
            Desc
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>

      {/* Staking Cards Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StakingCard
          icon="/eth-logo.svg"
          name="Ethereum (ETH)"
          rewardRate="13.62%"
          change="6.25%"
          isPositive={true}
          chartData={ethData}
        />
        <StakingCard
          icon="/bnb-logo.svg"
          name="BNB Chain"
          rewardRate="12.72%"
          change="5.67%"
          isPositive={true}
          chartData={bnbData}
        />
        <StakingCard
          icon="/polygon-logo.svg"
          name="Polygon (Matic)"
          rewardRate="6.29%"
          change="-1.89%"
          isPositive={false}
          chartData={maticData}
        />
      </div>

      {/* Active Staking Section */}
      <div className="bg-[#17181C] rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold text-white">Stake Avalance (AVAX)</h2>
            <div className="flex items-center ml-4 space-x-2">
              <button className="p-2 rounded-full bg-[#27272A] text-[#71717A] hover:bg-[#323238]">
                <Share2 size={16} />
              </button>
              <button className="p-2 rounded-full bg-[#27272A] text-[#71717A] hover:bg-[#323238]">
                <LinkIcon size={16} />
              </button>
              <button className="flex items-center text-[#7C3AED] hover:underline">
                View Profile
                <ExternalLink size={14} className="ml-1" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-[#7C3AED] text-white rounded-full text-sm font-medium hover:bg-[#6D28D9]">
              Upgrade
            </button>
            <button className="px-4 py-2 bg-[#27272A] text-white rounded-full text-sm font-medium hover:bg-[#323238]">
              Unstake
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <StakingMetric
            label="Momentum"
            value="-0.82%"
            period="24H"
            trend="down"
          />
          <StakingMetric
            label="General"
            value="$41.99"
            subValue="-1.09%"
            period="24H"
            trend="down"
          />
          <StakingMetric
            label="Risk"
            value="60.6%"
            period="24H"
          />
          <StakingMetric
            label="Reward"
            value="2.23%"
            subValue="1.46%"
            period="24H"
            trend="up"
          />
        </div>

        {/* Investment Period Slider */}
        <div className="bg-[#1D1E24] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-white font-medium mb-1">Investment Period</h3>
              <p className="text-[#71717A] text-sm">Contribution Period (Month)</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-[#27272A] text-[#71717A] text-sm">6 Month</span>
              <span className="px-3 py-1 rounded-full bg-[#27272A] text-white text-sm">4 Month</span>
            </div>
          </div>
          <div className="relative h-2 bg-[#27272A] rounded-full">
            <div className="absolute left-0 right-0 h-full bg-[#7C3AED] rounded-full" style={{ width: '66.67%' }} />
            <div className="absolute left-[66.67%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-[#7C3AED]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingDashboard; 