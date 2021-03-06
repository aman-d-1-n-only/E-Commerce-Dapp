import React from 'react';
import { Button, Table , Header , Form , Container } from 'semantic-ui-react'

const main = (props) => (
    <Container>
        <h1>Add Product</h1>
        <Form>
            <Form.Field>
              <input placeholder='Product Name' type = 'text' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Product Price' type ='number'/>
            </Form.Field>
            <Button primary type='submit'>Add Product</Button>
        </Form>

        <h1>Buy Product</h1>
        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Sr. No.</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Owner</Table.HeaderCell>
                    <Table.HeaderCell>Buy</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h2' textAlign='center'>
                        1
                        </Header>
                    </Table.Cell>
                    <Table.Cell singleLine>MacBook Pro 13</Table.Cell>
                    <Table.Cell>
                        $1.679
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        0x7681022jdjdisnks29u92uendnjdn..
                    </Table.Cell>
                    <Table.Cell>
                        <Button primary >Buy</Button>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Container>    
);  

export default main;