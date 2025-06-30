import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateAllPrices } from './redux/cryptoSlice';
import CryptoTable from './components/CryptoTable';
import Header from './components/Header';
import StatusBar from './components/StatusBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set up interval to update prices every 2 seconds
    const interval = setInterval(() => {
      dispatch(updateAllPrices());
    }, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto py-8 px-4">
        <Header 
          title="Real-Time Crypto Tracker" 
          subtitle="Live cryptocurrency prices updating every 2 seconds"
        />
        <StatusBar />
        <div className="transition-all duration-300 hover:shadow-xl">
          <CryptoTable />
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">
          <p>Data is simulated for demonstration purposes.</p>
        </div>
      </div>
    </div>
  );
}

export default App;