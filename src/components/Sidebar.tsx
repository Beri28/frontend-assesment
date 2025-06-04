"use client"
import React from 'react';
import {
  LayoutDashboard,
  Wallet,
  Users2,
  Calculator,
  ExternalLink,
  Droplets,
  BarChart3,
  Zap,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown
} from 'lucide-react';
// import { colors } from '@/types/types';

const colors = {
    background: '#0D0D0F',
    cardBg: '#17181C',
    textPrimary: '#FFFFFF',
    textSecondary: '#71717A',
    textTertiary: '#52525B',
    accent: '#7C3AED',
    accentHover: '#6D28D9',
    divider: '#27272A',
    hover: 'rgba(255, 255, 255, 0.05)'
  };

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', isActive: true },
  { icon: Wallet, label: 'Assets' },
  { icon: Users2, label: 'Staking Providers' },
  { icon: Calculator, label: 'Staking Calculator' },
  { icon: ExternalLink, label: 'Data API' },
  { icon: Droplets, label: 'Liquid Staking', badge: 'Beta' },
  { icon: BarChart3, label: 'Active Staking', badge: '6',isActive: false }
];

const activeStakings = [
  { asset: 'Ethereum', amount: '$7,699.00', color: '#627EEA' },
  { asset: 'Avalanche', amount: '$1,340.00', color: '#E84142' },
  { asset: 'Polygon (Matic)', amount: '$540.00', color: '#8247E5' },
  { asset: 'Solana', amount: '$980.00', color: '#14F195' }
];

export const Sidebar = () => {
  return (
    <div className="w-[280px] h-screen overflow-y-auto bg-[#0D0D0F] flex flex-col  border-r border-[#27272A] sticky top-0"  style={{'scrollbarWidth':'none'}}>
      <div className="flex items-center space-x-2 mb-2 p-4 border-b border-[#27272A] w-full">
        <div className="flex items-center px-3 w-full">
          <img src="/logo.png" alt="Stakent" className="h-8 w-8" />
          <div className="ml-2 flex items-center justify-between text-white flex-1">
            <p>
              <span className="font-semibold flex items-start">Stakent <span className="text-xs text-[#71717A] ml-1">®</span></span>
              <div className="text-xs text-[#71717A]">Top Staking Assets</div>
            </p>
            
            <span>
              <ChevronsUpDown size={16} className="ml-1 text-[#71717A]" />
              {/* <ChevronUp size={16} className="ml-1 text-[#71717A]" />
              <ChevronDown size={16} className="ml-1 text-[#71717A]" /> */}
            </span>
          </div>
        </div>
        
      </div>
      {/* Navigation Section */}
      <div className="p-6 pt-3  space-y-1 flex-1 h-[80%] overflow-y-auto">
        {/* Navigation Tabs */}
        <div className='mb-3 pb-5 border-b border-[#27272A]' >
          <div className="flex space-x-2 bg-[#131417] rounded-lg p-1 ">
            <button className="px-4 py-2 bg-[#5e5e5e3b] rounded-lg text-white text-sm font-medium flex-1">
              Staking
            </button>
            <button className="px-4 py-2 text-[#71717A] text-sm font-medium flex-1">
              Stablecoin
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <div key={index}>
              <div
                className={`flex items-center justify-between group px-4 py-3 rounded-lg ${
                  item.isActive
                    ? 'bg-[#131417] text-white border-r-2 border-[#27272A]'
                    : 'text-[#71717A] hover:bg-[rgba(255,255,255,0.05)]'
                }`}
              >
                <div className="flex items-center">
                  <item.icon size={20} className="mr-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  
                    item.badge==='6'?
                    <button className='flex items-center gap-x-3' >
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs ${
                          item.badge === '6'
                            ? 'bg-[#7C3AED] text-black'
                            : 'bg-[#27272A] text-[#71717A]'
                        }`}
                      >
                        {item.badge}
                      </span>

                      <ChevronDown size={15} onClick={()=>item.isActive=true} />
                    </button>
                    :
                    <span
                      className={`px-2 py-0.5 rounded-md text-xs ${
                        item.badge === 'Beta' || item.badge === '6'
                          ? 'bg-[#7C3AED] text-black'
                          : 'bg-[#27272A] text-[#71717A]'
                      }`}
                    >
                    {item.badge}
                    </span>
                    
                )}
              </div>
              {(item.isActive  && item.label==='Active Staking'  ) &&  
              <div className=" rounded-lg p-4">
                <div className="space-y-4">
                  {activeStakings.map((staking, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className="w-5 h-5 rounded-full mr-3"
                        style={{ backgroundColor: staking.color }}
                      />
                      <div>
                        <p className="text-white text-sm">{staking.asset}</p>
                        <p className="text-[#52525B] text-xs">Amount {staking.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>}
          </div>
          ))}
        </nav>
      </div>

      {/* Active Stakings Section */}
      <div className="mt-auto p-6">
        {/* Activate Super Button */}
        <button className="mt-4 w-full bg-[#1D1E24] rounded-lg p-4 flex items-center justify-between group hover:bg-[#27272A] transition-colors">
          <div className="flex items-center">
            <Zap size={20} className="text-white mr-3" fill='white' />
            <div className="text-left">
              <p className="text-white text-sm font-medium">Activate Super</p>
              <p className="text-[#71717A] text-xs">Unlock all features on Stakent</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 