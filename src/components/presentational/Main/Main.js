import React, { Component } from 'react';
import { Button, Table, Header, Form, Container } from 'semantic-ui-react';

import classes from './Main.module.css'
class Main extends Component {

    createProductHandler = (event) => {
        event.preventDefault();
        const name = this.productName.value;
        const price = window.web3.utils.toWei(this.productPrice.value.toString() , 'Ether' );
        this.props.createProduct(name, price);
    }

    render() {
        return (
            <Container className = { classes.main}>
                <h1>Add Product</h1>
                <Form onSubmit={ event => this.createProductHandler(event) }>
                    <Form.Field>
                        <input placeholder='Product Name' ref={ input => this.productName = input } type='text' />
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Product Price( Ethers)' ref={ input => this.productPrice = input } type='number' />
                    </Form.Field>
                    <Button primary type='submit'>Add Product</Button>
                </Form>
                <h1>Buy Product</h1>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Sr. No.</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Price(Ethers  )</Table.HeaderCell>
                            <Table.HeaderCell>Owner</Table.HeaderCell>
                            <Table.HeaderCell>Buy</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.products.map( (product , key ) => {
                            return (
                                <Table.Row key = {key}>
                                    <Table.Cell>
                                        <Header as='h2' textAlign='center'>
                                            { product.id.toString()}   
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell singleLine>{ product.name}</Table.Cell>
                                    <Table.Cell>
                                        {window.web3.utils.fromWei(product.price.toString() , 'Ether')}
                                </Table.Cell>
                                    <Table.Cell textAlign='right'>
                                        {product.owner}
                                </Table.Cell>
                                    <Table.Cell>
                                        { !product.purchase ? 
                                            <Button
                                            name={product.id}
                                            value={product.price}
                                            onClick={event => {
                                            this.props.purchaseProduct(event.target.name , event.target.value)
                                            }}
                                            primary >Buy</Button> : 'Purchased' }
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })
                        }
                    </Table.Body>
                </Table>
            </Container>
        );
    }
};

export default Main;