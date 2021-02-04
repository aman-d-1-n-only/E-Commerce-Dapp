import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';

class App extends Component {

  //React Component Life Cycle Hook
  async componentWillMount() {
    await this.loadWeb3
    console.log('We are connected to our ethereum blockchain')
  };

  //Instanciating Web3 with provider exposed by the metamask in a browser
  async loadWeb3() {
    window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
    });
  }

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
