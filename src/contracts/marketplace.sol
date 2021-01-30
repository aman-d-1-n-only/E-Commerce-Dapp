pragma solidity ^0.5.0;

contract Marketplace {
    string public name;

    //Stores the no of products we have on blockchain in our mapping
    uint256 public productCount = 0;

    //to store the list of products : as this is state variable so products added in this mapping is added to blockchain
    mapping(uint256 => Product) public products;

    //Custom Data Structure for storing the object
    struct Product {
        uint256 id;
        string name;
        uint256 price;
        address owner;
        bool purchase;
    }

    event ProductCreated(
        uint256 id,
        string name,
        uint256 price,
        address owner,
        bool purchase
    );

    constructor() public {
        name = "Hello World !! ";
    }

    function createProduct(string memory _name, uint256 _price) public {
        //Make sure parameters are correct
        require(bytes(_name).length > 0);
        require(_price > 0);

        //Increment productCount
        productCount++;

        //Create the product
        products[productCount] = Product(
            productCount,
            _name,
            _price,
            msg.sender,
            false
        );

        //Emiiting a event that product is stored on blockchain
        emit ProductCreated(productCount, _name, _price, msg.sender, false);
    }
}
