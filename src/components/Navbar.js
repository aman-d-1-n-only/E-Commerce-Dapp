import React from 'react';
import { Menu } from 'semantic-ui-react';

const navbar = (props) => (
<Menu inverted stackable>
        <Menu.Item
          name='marketplace'
        >
          MarketPlace
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          position = 'right'  
    >
        {props.user}
        </Menu.Item>
      </Menu>
);

export default navbar;