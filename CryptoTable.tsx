import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { formatNumber, formatCurrency, formatPercentage } from '../utils/formatters';
import { ArrowDown, ArrowUp } from 'lucide-react';

const CryptoTable: React.FC = () => {
  const { cryptos } = useSelector((state: RootState) => state.crypto);

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Rank</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Coin</th>
            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">24h Change</th>
            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Market Cap</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {cryptos.map((crypto) => (
            <tr key={crypto.id} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {crypto.rank}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img 
                    src={crypto.logoUrl} 
                    alt={`${crypto.name} logo`} 
                    className="h-8 w-8 mr-3 rounded-full"
                    onError={(e) => {
                      // Fallback if image fails to load
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32';
                    }}
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{crypto.name}</div>
                    <div className="text-sm text-gray-500">{crypto.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-mono font-medium text-gray-900">
                ${formatCurrency(crypto.price)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className={`flex items-center justify-end ${
                  crypto.change24h >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {crypto.change24h >= 0 ? 
                    <ArrowUp className="h-4 w-4 mr-1" /> : 
                    <ArrowDown className="h-4 w-4 mr-1" />
                  }
                  {formatPercentage(Math.abs(crypto.change24h))}%
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                ${formatNumber(crypto.marketCap)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;