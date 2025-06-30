import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cryptocurrency, initialCryptos } from '../data/sampleData';

interface CryptoState {
  cryptos: Cryptocurrency[];
  loading: boolean;
  error: string | null;
}

const initialState: CryptoState = {
  cryptos: initialCryptos,
  loading: false,
  error: null,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrice: (state, action: PayloadAction<{ id: string; newPrice: number; newChange: number }>) => {
      const { id, newPrice, newChange } = action.payload;
      const crypto = state.cryptos.find(crypto => crypto.id === id);
      if (crypto) {
        crypto.price = newPrice;
        crypto.change24h = newChange;
      }
    },
    updateAllPrices: (state) => {
      state.cryptos.forEach(crypto => {
        // Simulate price changes with random fluctuations
        const randomChange = (Math.random() * 2 - 1) * 1.5; // Between -1.5% and 1.5%
        const priceChangePercent = 1 + (randomChange / 100);
        
        // Update price
        crypto.price = +(crypto.price * priceChangePercent).toFixed(2);
        
        // Update 24h change (add a small random factor to existing change)
        const changeAdjustment = (Math.random() * 0.4 - 0.2); // Between -0.2% and 0.2%
        crypto.change24h = +(crypto.change24h + changeAdjustment).toFixed(2);
        
        // Update market cap based on new price
        const priceRatio = crypto.price / (crypto.price / priceChangePercent);
        crypto.marketCap = Math.round(crypto.marketCap * priceRatio);
      });
    },
  },
});

export const { updatePrice, updateAllPrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;