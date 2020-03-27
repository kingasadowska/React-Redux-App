import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://pinchofyum.com/wp-content/uploads/Top25Recipes-01.png',
    key: '1'
  },
  {
    src: 'https://www.simplyrecipes.com/wp-content/uploads/2020/03/Recipes-for-Keeping-Healthy-LEAD-768x513.jpg',
    key: '2'
  },
  {
    src: 'https://www.budgetbytes.com/wp-content/uploads/2014/08/30-Easy-Recipes-for-College-Students-H.jpg',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;