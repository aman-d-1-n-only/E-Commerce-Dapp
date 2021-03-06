# E-Commerece DAPP

This is a basic decentralized application that lets you to buy and sell things over ethereum blockchain using react web app.

## Prerequisites -

- Install [[ Truffle : Framework For Building Dapp ](https://www.trufflesuite.com/truffle)].

```bash
    npm install truffle -g
```

- Download [[ Ganache GUI Software ](https://www.trufflesuite.com/ganache) ] used to fire local ethereum blockchain.

> Note : If you are more comfortable with CLI , you can also leverage it's CLI version. Install Ganache-CLI :

```bash
    npm install -g ganache-cli
```

- Install a chrome extension of a crypto-wallet [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) to make transaction of buying and selling the product.

## How to run this locally ?

> Connect your truffle project to local blockchain fired by Ganache GUI. For Help - [Click Here ](https://www.trufflesuite.com/docs/ganache/truffle-projects/linking-a-truffle-project)

> After that move to folder where your cloned the project and type on your terminal -

```bash
    truffle compile
    truffle migrate
    npm run start
```

**NOTE** : If you want to use this DAPP over public ethereum blockchain like Kovan , Ropsten , Ethereum Mainnet etc .First of all you will have to connect to these networks with the help of a ethereum node of respective networks. To get endpoint of ethereum node of one of these networks use [Infura](https://infura.io/).Then deploy and use it on that network with the help of that node.
