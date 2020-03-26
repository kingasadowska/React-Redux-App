import React from 'react';
import ListItem from './chefItem/ChefItem';
import './ChefWrapper.css';
import { chefs } from '../../data/chefs';

const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        {chefs.map(item => (
            <ListItem key={item.name} {...item} />
        ))}
    </ul>
);

export default ListWrapper;