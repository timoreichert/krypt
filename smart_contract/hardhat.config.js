require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/yC2w5CLPHZaiikJ0f26AplHzt4cQ8PyY',
      accounts: ['yourprivatekey'],
    },
  },
};