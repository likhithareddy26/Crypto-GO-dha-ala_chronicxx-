export interface Cryptocurrency {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  logoUrl: string;
}

export const initialCryptos: Cryptocurrency[] = [
  {
    id: 'bitcoin',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 50000,
    change24h: 2.5,
    marketCap: 950000000000,
    logoUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029',
  },
  {
    id: 'ethereum',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3000,
    change24h: -1.2,
    marketCap: 350000000000,
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029',
  },
  {
    id: 'binancecoin',
    rank: 3,
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 500,
    change24h: 0.8,
    marketCap: 80000000000,
    logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=029',
  },
  {
    id: 'cardano',
    rank: 4,
    name: 'Cardano',
    symbol: 'ADA',
    price: 1.5,
    change24h: 3.2,
    marketCap: 50000000000,
    logoUrl: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=029',
  },
  {
    id: 'solana',
    rank: 5,
    name: 'Solana',
    symbol: 'SOL',
    price: 150,
    change24h: -2.1,
    marketCap: 45000000000,
    logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=029',
  },
  {
    id: 'ripple',
    rank: 6,
    name: 'XRP',
    symbol: 'XRP',
    price: 0.8,
    change24h: 1.5,
    marketCap: 40000000000,
    logoUrl: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=029',
  },
  {
    id: 'polkadot',
    rank: 7,
    name: 'Polkadot',
    symbol: 'DOT',
    price: 25,
    change24h: -0.5,
    marketCap: 30000000000,
    logoUrl: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=029',
  },
  {
    id: 'dogecoin',
    rank: 8,
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.25,
    change24h: 5.2,
    marketCap: 32000000000,
    logoUrl: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=029',
  },
];