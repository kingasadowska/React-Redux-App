import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Recipes</h1>
    <p>Try best recipes!</p>
    <Link to="about" className="btn btn-primary">
      See more
    </Link>
  </div>
);

export default HomePage;
