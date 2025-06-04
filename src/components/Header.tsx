// // components/Header.tsx
// import React from 'react';
// import {
//   Search,
//   Bell,
//   Settings,
//   Plus,
//   Star,
// } from 'lucide-react';

// // Define a color palette for consistency (copied from dashboard-nextjs-app for exact match)
// interface AppColors {
//   primaryBg: string;
//   secondaryBg: string;
//   cardBg: string;
//   textColor: string;
//   accentColor: string;
//   secondaryAccent: string;
//   borderColor: string;
//   hoverColor: string;
//   purpleText: string;
//   greenText: string;
//   redText: string;
//   yellowText: string;
//   grayText: string;
//   lightGrayText: string;
//   darkGrayText: string;
//   white: string;
// }

// const colors: AppColors = {
//   primaryBg: '#111317', // Darker background for the overall page
//   secondaryBg: '#191b1f', // Slightly lighter background for main content area
//   cardBg: '#212428', // Card background color
//   textColor: '#e0e0e0', // Light text color
//   accentColor: '#9246FF', // Primary purple accent
//   secondaryAccent: '#4A4C51', // Grayish accent for some buttons/elements
//   borderColor: '#33363b', // Border color for elements
//   hoverColor: '#2a2d32', // Hover state color for interactive elements
//   purpleText: '#9246FF',
//   greenText: '#22C55E',
//   redText: '#EF4444',
//   yellowText: '#FACC15',
//   grayText: '#A0A0A0',
//   lightGrayText: '#C0C0C0',
//   darkGrayText: '#606060',
//   white: '#ffffff',
// };

// const Header: React.FC = () => {
//   return (
//     <header className={`flex flex-col md:flex-row items-center justify-between p-4 bg-[${colors.cardBg}] rounded-2xl shadow-lg my-4 mx-4 md:mx-0`}>
//       {/* Left section: Stakent Logo and Top Staking Assets */}
//       <div className="flex items-center mb-4 md:mb-0">
//         <Star className={`text-[${colors.accentColor}] mr-2`} size={28} />
//         <span className={`text-xl font-bold text-[${colors.white}] mr-6`}>Stakent</span>
//         <span className={`text-[${colors.grayText}] text-sm hidden md:block`}>Top Staking Assets</span>
//       </div>

//       {/* Middle section: User Info and Deposit Button */}
//       <div className="flex items-center space-x-4 mb-4 md:mb-0">
//         <div className={`flex items-center bg-[${colors.secondaryBg}] p-2 rounded-full`}>
//           <img
//             src="https://placehold.co/30x30/e94560/ffffff?text=RC"
//             alt="Ryan Crawford"
//             className="w-8 h-8 rounded-full mr-2"
//           />
//           <span className={`text-[${colors.white}] text-sm`}>Ryan Crawford</span>
//         </div>
//         <button className={`bg-[${colors.accentColor}] hover:bg-opacity-80 text-[${colors.white}] font-semibold py-2 px-4 rounded-full flex items-center`}>
//           <Plus size={16} className="mr-2" />
//           Deposit
//         </button>
//       </div>

//       {/* Right section: Search, Notifications, Settings */}
//       <div className="flex items-center space-x-4 w-full md:w-auto justify-end">
//         <div className="relative flex-1 md:flex-none">
//           <Search className={`absolute left-3 top-1/2 -translate-y-1/2 text-[${colors.grayText}]`} size={20} />
//           <input
//             type="text"
//             placeholder="Search"
//             className={`bg-[${colors.secondaryBg}] text-[${colors.white}] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[${colors.accentColor}] w-full`}
//           />
//         </div>
//         <button className={`p-2 rounded-full bg-[${colors.secondaryBg}] hover:bg-[${colors.hoverColor}]`}>
//           <Bell className={`text-[${colors.textColor}]`} size={20} />
//         </button>
//         <button className={`p-2 rounded-full bg-[${colors.secondaryBg}] hover:bg-[${colors.hoverColor}]`}>
//           <Settings className={`text-[${colors.textColor}]`} size={20} />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { Search, Bell, Settings, ChevronDown, Plus } from 'lucide-react';

// const Header = () => {
//   return (
//     <div className="h-16 px-4 flex items-center justify-between bg-[#17181C] border-b border-[#27272A]">
//       {/* Left section - Logo */}
//       <div className="flex items-center space-x-2">
//         <div className="flex items-center">
//           <img src="/stakent-logo.svg" alt="Stakent" className="h-8 w-8" />
//           <div className="ml-2 flex items-center text-white">
//             <span className="font-semibold">Stakent</span>
//             <span className="text-xs text-[#71717A] ml-1">®</span>
//             <ChevronDown size={16} className="ml-1 text-[#71717A]" />
//           </div>
//         </div>
//         <div className="text-xs text-[#71717A] ml-2">Top Staking Assets</div>
//       </div>

//       {/* Center section - User Profile & Deposit */}
//       <div className="flex items-center space-x-3">
//         {/* User Profile */}
//         <div className="flex items-center bg-[#1D1E24] rounded-full pl-1 pr-3 py-1 cursor-pointer hover:bg-[#27272A] transition-colors">
//           <div className="w-7 h-7 rounded-full bg-[#7C3AED] flex items-center justify-center mr-2">
//             <img
//               src="/user-avatar.jpg"
//               alt="User"
//               className="w-7 h-7 rounded-full object-cover"
//             />
//           </div>
//           <span className="text-white text-sm">Ryan Crawford</span>
//           <ChevronDown size={16} className="ml-1 text-[#71717A]" />
//         </div>

//         {/* Deposit Button */}
//         <button className="flex items-center px-4 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] transition-colors rounded-full text-white text-sm font-medium">
//           <Plus size={16} className="mr-1" />
//           Deposit
//         </button>
//       </div>

//       {/* Right section - Search & Actions */}
//       <div className="flex items-center space-x-3">
//         {/* Search */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-64 bg-[#1D1E24] text-white pl-9 pr-4 py-2 rounded-full text-sm placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
//           />
//           <Search
//             size={16}
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#71717A]"
//           />
//         </div>

//         {/* Action Buttons */}
//         <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1D1E24] hover:bg-[#27272A] transition-colors">
//           <Bell size={18} className="text-[#71717A]" />
//         </button>
//         <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1D1E24] hover:bg-[#27272A] transition-colors">
//           <Settings size={18} className="text-[#71717A]" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header; 
"use client"

import React, { useState, useRef } from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  ChevronDown, 
  Plus,
  LogOut,
  User,
  Wallet,
  HelpCircle,
  ExternalLink,
  Check,
  Clock,
  CreditCard,
  PlusCircle
} from 'lucide-react';
import useClickOutside from '@/hooks/useClickOutside';

const notifications = [
  {
    id: 1,
    title: 'Staking Successful',
    description: 'Your stake of 32 ETH has been confirmed',
    time: '2 min ago',
    isRead: false,
    type: 'success'
  },
  {
    id: 2,
    title: 'Reward Received',
    description: 'You received 0.0512 ETH in staking rewards',
    time: '1 hour ago',
    isRead: false,
    type: 'success'
  },
  {
    id: 3,
    title: 'Pending Withdrawal',
    description: 'Your withdrawal request is being processed',
    time: '3 hours ago',
    isRead: true,
    type: 'pending'
  }
];

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const profileButtonRef = useRef<HTMLDivElement>(null);
  const notificationsMenuRef = useRef<HTMLDivElement>(null);
  const notificationsButtonRef = useRef<HTMLButtonElement>(null);

  useClickOutside(profileMenuRef, () => setShowProfileMenu(false), profileButtonRef);
  useClickOutside(notificationsMenuRef, () => setShowNotifications(false), notificationsButtonRef);

  return (
    <div className="h-16 p-4 py-7 pb-[2.25em] bg-[#0D0D0F] flex items-center justify-between border-b border-[#27272A] sticky top-0 z-50">
      {/* Left section - Logo */}
      {/* <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <img src="/logo.png" alt="Stakent" className="h-8 w-8" />
          <div className="ml-2 flex items-center text-white">
            <span className="font-semibold">Stakent</span>
            <span className="text-xs text-[#71717A] ml-1">®</span>
            <span>
              <ChevronUp size={16} className="ml-1 text-[#71717A]" />
              <ChevronDown size={16} className="ml-1 text-[#71717A]" />
            </span>
          </div>
        </div>
        <div className="text-xs text-[#71717A] ml-2">Top Staking Assets</div>
      </div> */}

      {/* Center section - User Profile & Deposit */}
      <div className="flex items-center space-x-10">
        {/* User Profile */}
        <div className="relative">
          <div 
            ref={profileButtonRef}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center pl-1 pr-3 py-1 cursor-pointer hover:bg-[#27272A] transition-colors gap-x-2"
          >
            <div className="w-9 h-9 rounded-full flex items-center border border-[#7C3AED] justify-center mr-2">
              {/* <span className="text-white text-sm font-medium">RC</span> */}
              <img src="/user.png" alt="user" className="h-8 w-8 rounded-full" />
            </div>
            <div>
              <span className="flex text-white text-[10px] items-end justify-start">@ryan997 <span className="text-white text-[#71717A] ml-2 bg-[#5e5e5e3b] p-2 rounded-md text-[7px]">PRO</span></span>
              <span className="text-white text-sm">Ryan Crawford</span>
              <div className="flex items-center">
                
              </div>
            </div>
            <ChevronDown 
              size={16} 
              className={`ml-1 text-[#71717A] transition-transform duration-200 ${showProfileMenu ? 'transform rotate-180' : ''}`} 
            />
          </div>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div ref={profileMenuRef} className="absolute right-0 mt-2 w-64 bg-[#17181C] border border-[#27272A] rounded-xl shadow-lg py-2 animate-fadeIn">
              <div className="px-4 py-3 border-b border-[#27272A]">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center">
                    <span className="text-white text-sm font-medium">RC</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-white text-sm font-medium">Ryan Crawford</p>
                    <p className="text-[#71717A] text-xs">ryan@stakent.com</p>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <button className="w-full px-4 py-2 flex items-center text-[#E4E4E7] hover:bg-[#27272A] text-sm">
                  <User size={16} className="mr-2" />
                  Profile Settings
                </button>
                <button className="w-full px-4 py-2 flex items-center text-[#E4E4E7] hover:bg-[#27272A] text-sm">
                  <Wallet size={16} className="mr-2" />
                  Wallet Settings
                </button>
                <button className="w-full px-4 py-2 flex items-center text-[#E4E4E7] hover:bg-[#27272A] text-sm">
                  <HelpCircle size={16} className="mr-2" />
                  Help Center
                </button>
                <div className="border-t border-[#27272A] mt-2 pt-2">
                  <button className="w-full px-4 py-2 flex items-center text-[#EF4444] hover:bg-[#27272A] text-sm">
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Deposit Button */}
        <button className="flex items-center px-4 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] transition-colors rounded-xl text-black text-sm font-semibold">
          {/* <Plus size={16} className="mr-1" /> */}
          Deposit
          <PlusCircle size={16} className="ml-1" />
        </button>
      </div>

      {/* Right section - Search & Actions */}
      <div className="flex items-center space-x-3">
        {/* Notifications */}
          <div className="relative">
            <button 
              ref={notificationsButtonRef}
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative w-9 h-9 text-white flex items-center justify-center rounded-full bg-black border-l border-t border-[#27272A] hover:bg-[#27272A] transition-colors"
            >
              <Bell size={18} className="text-white" />
              <span className="absolute top-0 right-0 p-1 px-2 rounded-xl text-[6px] text-center bg-[#7C3AED]">2</span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div ref={notificationsMenuRef} className="absolute right-0 mt-2 w-96 bg-[#17181C] border border-[#27272A] rounded-xl shadow-lg animate-fadeIn">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#27272A]">
                  <h3 className="text-white text-sm font-medium">Notifications</h3>
                  <button className="text-[#7C3AED] text-xs hover:underline">Mark all as read</button>
                </div>
                <div className="py-2 max-h-[400px] overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className="px-4 py-3 hover:bg-[#27272A] cursor-pointer flex items-start"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        notification.type === 'success' ? 'bg-[#059669]/10' : 'bg-[#EAB308]/10'
                      }`}>
                        {notification.type === 'success' ? (
                          <Check size={16} className="text-[#059669]" />
                        ) : (
                          <Clock size={16} className="text-[#EAB308]" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-white text-sm font-medium">{notification.title}</p>
                          <span className="text-[#71717A] text-xs">{notification.time}</span>
                        </div>
                        <p className="text-[#71717A] text-sm mt-1">{notification.description}</p>
                      </div>
                      {!notification.isRead && (
                        <span className="w-2 h-2 rounded-full bg-[#7C3AED] mt-2 ml-2"></span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-[#27272A] flex items-center justify-center">
                  <button className="text-[#7C3AED] text-sm hover:underline flex items-center">
                    View All
                    <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-48 bg-black text-white pl-4 pr-9 py-2 rounded-xl text-sm placeholder-white border-t border-l border-[#27272A] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          />
          <Search
            size={16}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <button className=" p-2 px-3 flex text-white items-center justify-between gap-x-2 text-sm rounded-2xl bg-black border border-l border-t border-[#27272A] hover:bg-[#27272A] transition-colors">
            Settings
            <Settings size={18} className="text-white" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header; 