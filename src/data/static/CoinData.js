import axios from 'axios'
import BitcoinImage from '@/assets/images/coin/bitcoin.svg';
import TetherImage from '@/assets/images/coin/tether.svg';
import CardanoImage from '@/assets/images/coin/cardano.svg';
import EthereumImage from '@/assets/images/coin/ethereum.svg';
import { useEffect, useState } from 'react';

const CoinList = async() => {
    
    let data = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Ccardano%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true")
    let result = [{
    id: '0',
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: '0.2231345',
    usdBalance: `${data.data["bitcoin"].usd}`,
    logo: BitcoinImage,
    change: `${data.data['bitcoin'].usd_24h_change}`,
    isChangePositive: data.data['bitcoin'].usd_24h_change > 0 ? true : false,
    color: '#FDEDD4',
  },
  {
    id: '1',
    name: 'Tether',
    symbol: 'USDT',
    balance: '1.2345',
    usdBalance: `${data.data["tether"].usd}`,
    logo: TetherImage,
    change: `${data.data['tether'].usd_24h_change}`,
    isChangePositive: data.data['tether'].usd_24h_change > 0 ? true : false,
    color: '#E1F9F1',
  },
  {
    id: '2',
    name: 'Cardano',
    symbol: 'ADA',
    balance: '1.2370',
    usdBalance: `${data.data["cardano"].usd}`,
    logo: CardanoImage,
    change: `${data.data['cardano'].usd_24h_change}`,
    isChangePositive: data.data['cardano'].usd_24h_change > 0 ? true : false,
    color: '#DBE3FF',
  },
  {
    id: '3',
    name: 'Ethereum',
    symbol: 'ETH',
    balance: `${data.data["ethereum"].usd}`,
    usdBalance: '340.24',
    logo: EthereumImage,
    change: `${data.data['ethereum'].usd_24h_change}`,
    isChangePositive: data.data['ethereum'].usd_24h_change > 0 ? true : false,
    color: '#FBF5D5',
  }
]
  return result
}

export default CoinList