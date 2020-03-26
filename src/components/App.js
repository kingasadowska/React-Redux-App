import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import RecipesPage from "./recipes/RecipesPage";
import ListWrapper from './chefWrapper/ChefWrapper';
import '../index.css';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/recipes" component={RecipesPage} />
        <Route path="/wrapper" component={ListWrapper} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
