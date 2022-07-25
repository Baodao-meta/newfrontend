//images
import BitcoinImage from '@/assets/images/coin/bitcoin.svg';
import TetherImage from '@/assets/images/coin/tether.svg';
import CardanoImage from '@/assets/images/coin/cardano.svg';
import EthereumImage from '@/assets/images/coin/ethereum.svg';

export const coinSlideData = [
  {
    id: '0',
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: '0.2231345',
    usdBalance: `{data[0]["bitcoin"].usd}`,
    logo: BitcoinImage,
    change: '+12.5%',
    isChangePositive: true,
    color: '#FDEDD4',
  },
  {
    id: '1',
    name: 'Tether',
    symbol: 'USDT',
    balance: '1.2345',
    usdBalance: `{data[0]["tether"].usd}`,
    logo: TetherImage,
    change: '-1.5%',
    isChangePositive: false,
    color: '#E1F9F1',
  },
  {
    id: '2',
    name: 'Cardano',
    symbol: 'ADA',
    balance: '1.2370',
    usdBalance: `{data[0]["cardano"].usd}`,
    logo: CardanoImage,
    change: '+12.5%',
    isChangePositive: true,
    color: '#DBE3FF',
  },
  {
    id: '3',
    name: 'Ethereum',
    symbol: 'ETH',
    balance: '',
    usdBalance: '340.24',
    logo: EthereumImage,
    change: '+1.5%',
    isChangePositive: true,
    color: '#FBF5D5',
  },
];

