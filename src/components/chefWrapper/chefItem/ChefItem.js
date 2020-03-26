import React from 'react';
import './ListItem.css';

const ListItem = ({
    image,
    name,
    description,
    link
}) => (
    <li className="listItem__wrapper">
        <img
            src={image} className="listItem__image"
            alt={name}
        />
        <div>
            <h2 className="listItem__name">
            {name}
            </h2>
            <p className="listItem__description">
            {description}
            </p>
            <a 
                href={link} 
                className="listItem__button"
                >
                visit page
                </a>
        </div>
    </li>
);

export default ListItem;