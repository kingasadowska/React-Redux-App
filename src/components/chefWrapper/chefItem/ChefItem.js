import React from 'react';
import './ChefItem.css';
import PropTypes from 'prop-types';

const ChefItem = ({
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
ChefItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string.isRequired,
};

export default ChefItem;