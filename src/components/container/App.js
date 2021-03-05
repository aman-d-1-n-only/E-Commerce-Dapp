import React, { Component  } from 'react';
import Navbar  from '../presentational/Navbar/Navbar'

import MarketPlace from '../../abis/Marketplace.json';
import Web3 from 'web3';

import { Container , Header } from 'semantic-ui-react'
import classes from './App.module.css'

class App extends Component {
  state = {
    accounts: '',
    marketplace: null,
    productCount: 0,
    products: [],
    loading : true 
  };

  async componentDidMount() {
    await this.loadWeb3();
    console.log('We are connected to our ethereum blockchain.');
    await this.loadBlockChainData();
    console.log(this.state.account, this.state.marketplace);
  };

  async loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
         try {
            await window.ethereum.enable();// Request account access if needed
          } catch (error) {
           console.log('Please give access to perform transactions.');// User denied account access...
          }
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      }else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
  };

  async loadBlockChainData() {
    let marketplace = null ;
    let web3 = window.web3 ;
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = MarketPlace.networks[networkId];
    if (deployedNetwork) {
        marketplace = new web3.eth.Contract(
        MarketPlace.abi , deployedNetwork.address
      );
    } else {
      alert('Contract is not deployed to the network !');
    }

    this.setState({
      account: accounts[0],
      marketplace: marketplace
    });
  };

  render() {
    return (
      <div>
        <Navbar user={ this.state.account }/>
        <Container className = {classes.main} fluid textAlign='center'>
          <Header size='huge'>MarketPlace</Header>
          <Header size='medium' color='green' >Earn some money with your used stuff !!!</Header>
        </Container>
      </div>
    );
  }
}

export default App;
