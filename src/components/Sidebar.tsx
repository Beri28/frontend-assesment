import { 
  Home, 
  BarChart2, 
  Calculator, 
  Database, 
  Activity, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-gray-300 p-6">
      <h1 className="text-2xl font-bold text-white mb-8">Staking Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Stocking</h2>
        <div className="flex items-center py-2 pl-3 rounded-lg hover:bg-gray-800 cursor-pointer">
          <Home size={16} className="mr-3" />
          <span>Stockbroom</span>
        </div>
      </div>
      
      <div>
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Dashboard</h2>
        <div className="space-y-1">
          {[
            { icon: BarChart2, label: 'Assets' },
            { icon: Activity, label: 'Staking Providers' },
            { icon: Calculator, label: 'Staking Calculator' },
            { icon: Database, label: 'Data API' },
            { icon: Settings, label: 'Liquid Stoking' },
            { icon: Settings, label: 'Active Stoking' },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center py-2 pl-3 rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              <item.icon size={16} className="mr-3" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;