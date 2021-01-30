const Marketplace = artifacts.require('./Marketplace');

//required to use chai with promises
require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Marketplace', ( [deployer , seller , buyer ]) => {
    let marketplace;

    before(async () => {
        marketplace = await Marketplace.deployed()
    });

    describe('deployment', async () => {
        it('deployment successfull', async () => {
            const address = await marketplace.address
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null );
            assert.notEqual(address, undefined );
        })

        it('has a name', async () => {
            const name = await marketplace.name();
            assert.equal( name , "Hello World !! " )
        })
    })
    
    describe('products', async () => {

        let result, productCount 
        before(async () => {
            //In Ethereum ether is stored in wei . 1 ether = 10^18 wei 
            result = await marketplace.createProduct('iPhone X', web3.utils.toWei('1', 'Ether'), { from: seller })//{ from : }metadata
            productCount = await marketplace.productCount()
        })


        it('create product', async () => {

            //SUCCESS CASE : If product is created then what we are creating is what strring on blockchain
            assert.equal(productCount, 1)
            const event = result.logs[0].args 
            assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct');
            assert.equal(event.name , 'iPhone X' , 'name is correct');
            assert.equal(event.price , '1000000000000000000' , 'price is correct');
            assert.equal(event.owner ,seller  , 'owner is correct');
            assert.equal(event.purchase, false, 'purchase is correct');
            
            //Failure Case : If the product parameters are not fulfilled then smart contract is reacting in a way it should be
            await marketplace.createProduct('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected
            await marketplace.createProduct('iPhone X', 0 , { from: seller }).should.be.rejected


        })

        it('read product', async () => {

            const product = await marketplace.products(productCount)
            assert.equal(product.id.toNumber(), productCount.toNumber(), 'id is correct');
            assert.equal(product.name , 'iPhone X' , 'name is correct');
            assert.equal(product.price , '1000000000000000000' , 'price is correct');
            assert.equal(product.owner ,seller  , 'owner is correct');
            assert.equal(product.purchase, false, 'purchase is correproduct');

        })
    })
})
