import React from 'react';
import {
  Card, Button, CardImg, CardText, CardDeck,
  CardBody
} from 'reactstrap';
import './Ingredients.css'

const Ingredients = () => {
  return (
      <>
    <CardDeck padding-down="10px" margin-bottom="100px">
      <Card margin-bottom="20px">
        <CardImg top width="100%" height="188px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuALFfi5KHsTVOF_iRE98MLShF7AQ7-mxqIIj4ld67SkfLe_Sp" alt="Card image cap" />
        <CardBody>
        <h3 className="listItem__name">Chicken</h3>
          <CardText>Find recipes for fried chicken, chicken breast, grilled chicken, chicken wings, and more! Allrecipes has more than 5,430 kitchen-approved chicken recipes.</CardText>
          <Button color="primary">Find</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" height="188px" src="https://www.inspiredtaste.net/wp-content/uploads/2019/04/Garlic-Caper-Butter-Baked-Salmon-Recipe-Video.jpg" alt="Card image cap" />
        <CardBody margin-bottom="20px">
          <h3 className="listItem__name">Salmon</h3>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="primary">Find</Button>
        </CardBody>
      </Card>
      <Card margin-bottom="20px">
        <CardImg top width="100%" height="188px" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190305-lemon-garlic-asparagus-pasta-horizontal-161-1553190755.jpg" alt="Card image cap" />
        <CardBody>
        <h3 className="listItem__name">Pasta</h3>
          <CardText>Delicious pasta dishes from classic spaghetti Bolognese to lasagne and linguine. Find the perfect pasta recipe for midweek meals as well as easy pasta dishes you can rustle up using your storecupboard.</CardText>
          <Button color="primary">Find</Button>
        </CardBody >
      </Card>
    </CardDeck>
      </>
  );
};

export default Ingredients;