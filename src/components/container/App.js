import React, { Component  } from 'react';
import Navbar from '../presentational/Navbar/Navbar';
import Main from '../presentational/Main/Main'

import MarketPlace from '../../abis/Marketplace.json';
import Web3 from 'web3';

import { Container, Header , Dimmer, Loader, Image, Segment} from 'semantic-ui-react';
import classes from './App.module.css';

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
      loading:false,
      marketplace: marketplace,
    });
  };

  render() {
    return (
      <div>
        <Navbar account={ this.state.account }/>
        <Container className = {classes.main} fluid textAlign='center'>
          <Header size='huge'>MarketPlace</Header>
          <Header size='medium' color='green' >Earn some money with your used stuff !!!</Header>
        </Container>
        {this.state.loading ?
          <Segment>
            <Dimmer active inverted>
              <Loader size='small'>Loading</Loader>
            </Dimmer>
            <Image src='https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' />
          </Segment> : <Main />}
      </div>
    );
  }
}

export default App;
