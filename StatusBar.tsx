import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Clock } from 'lucide-react';

const StatusBar: React.FC = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const cryptos = useSelector((state: RootState) => state.crypto.cryptos);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const totalMarketCap = cryptos.reduce((acc, crypto) => acc + crypto.marketCap, 0);
  const formattedMarketCap = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 2
  }).format(totalMarketCap);
  
  return (
    <div className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md flex justify-between items-center mb-6">
      <div className="text-sm">
        <span className="font-bold">Total Market Cap: </span>
        <span>{formattedMarketCap}</span>
      </div>
      <div className="flex items-center text-sm">
        <Clock size={16} className="mr-1" />
        <span>
          Last updated: {currentTime.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default StatusBar;