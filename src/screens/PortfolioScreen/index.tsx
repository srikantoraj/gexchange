import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import PortfolioCoin from "../../components/PortfolioCoin";
// import MarketCoin from "../../components/MarketCoin";
const image =  require('../../../assets/images/Saly-10.png');

const portfolioCoins = [{
  id: '1',
  name: 'Virtual Dollars',
  image: 'https://i.ibb.co/n6HSGs8/virtualusd.webp',
  symbol: 'USD',
  amount: 69.420,
  valueUSD: 69420,
}, {
  id: '2',
  name: 'Bitcoin',
  image: 'https://i.ibb.co/FYyQPX8/bitcoin.png',
  symbol: 'USD',
  amount: 1.12,
  valueUSD: 59420,
}, {
  id: '3',
  name: 'Etherium',
  // image: 'https://cdn3.baserank.io/logo1/500/ethereum.png',
  image: 'https://i.ibb.co/9qpVdYg/ethereum.png',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 30120,
}
, {
  id: '4',
  name: 'Etherium',
  // image: 'https://cdn3.baserank.io/logo1/500/ethereum.png',
  image: 'https://i.ibb.co/9qpVdYg/ethereum.png',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 30120,
}
, {
  id: '5',
  name: 'Etherium',
  // image: 'https://cdn3.baserank.io/logo1/500/ethereum.png',
  image: 'https://i.ibb.co/9qpVdYg/ethereum.png',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 30120,
}
, {
  id: '6',
  name: 'Etherium',
  // image: 'https://cdn3.baserank.io/logo1/500/ethereum.png',
  image: 'https://i.ibb.co/9qpVdYg/ethereum.png',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 30120,
}
, {
  id: '7',
  name: 'Etherium',
  // image: 'https://cdn3.baserank.io/logo1/500/ethereum.png',
  image: 'https://i.ibb.co/9qpVdYg/ethereum.png',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 30120,
}]


const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{width: '100%'}}
        data={portfolioCoins}
        renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Portfolio balance</Text>
              <Text style={styles.balance}>$69.420</Text>
            </View>
          </>
        )}
      />
    </View>
  )};
export default PortfolioScreen;