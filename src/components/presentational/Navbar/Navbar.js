import React from 'react';
import { Menu } from 'semantic-ui-react';
import classes from './Navbar.module.css';

const navbar = (props) => (
<Menu fixed inverted stackable className = { classes.navbar} >
        <Menu.Item
          name='marketplace'
        >
          E-commerce DAPP
        </Menu.Item>

        <Menu.Item
          name='sign-in'
      position='right'
      color = 'green'
    >
        {props.account}
        </Menu.Item>
      </Menu>
);

export default navbar;