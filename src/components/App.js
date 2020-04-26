import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import RecipesPage from "./recipes/RecipesPage";
import EditRecipePage from "./recipes/EditRecipePage";
import ListWrapper from './chefWrapper/ChefWrapper';
import Ingredients from "./ingredients/Ingredients";
import '../index.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/recipes" component={RecipesPage} />
        <Route path="/wrapper" component={ListWrapper} />
        <Route path="/ingredients" component={Ingredients} />
        <Route path="/recipe/:slug" component={EditRecipePage} />
        <Route path="/recipe" component={EditRecipePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;
