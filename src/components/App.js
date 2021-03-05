import React, { Component } from 'react';
import MarketPlace from '../abis/Marketplace.json';
import Web3 from 'web3'
import './App.css';

class App extends Component {
  state = {
    accounts: null,
    instance: null
  };

  async componentWillMount() {
    await this.loadWeb3();
    console.log('We are connected to our ethereum blockchain.');
    await this.loadBlockChainData();
    console.log( this.state.account , this.state.instance )
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
    let web3 = window.web3 ;
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = MarketPlace.networks[networkId];
    const instance = new web3.eth.Contract(
      MarketPlace.abi ,
      deployedNetwork && deployedNetwork.address
    );
      
    this.setState({
      account: accounts[0],
      instance: instance
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            MarketPlace
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Market Place</h1>
                <p> Current User : { this.state.account}</p>
                <p>
                  Earn some money with your used stuff !!!
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
