import React from "react";
import { connect } from "react-redux";
import * as recipeActions from "../../redux/actions/recipeActions";
import * as levelActions from "../../redux/actions/levelActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import RecipeList from "./RecipeList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class RecipesPage extends React.Component {
  state = {
    redirectToAddRecipePage: false
  };

  componentDidMount() {
    const { recipes, levels, actions } = this.props;

    if (recipes.length === 0) {
      actions.loadRecipes().catch(error => {
        alert("Loading recipes failed" + error);
      });
    }

    if (levels.length === 0) {
      actions.loadLevels().catch(error => {
        alert("Loading levels failed" + error);
      });
    }
  }

  handleDeleteRecipe = async recipe => {
    toast.success("Recipe deleted");
    try {
      await this.props.actions.deleteRecipe(recipe);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddRecipePage && <Redirect to="/recipe" />}
        <h2>Recipes</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-recipe"
              onClick={() => this.setState({ redirectToAddRecipePage: true })}
            >
              Add Recipe
            </button>

            <RecipeList
              onDeleteClick={this.handleDeleteRecipe}
              recipes={this.props.recipes}
            />
          </>
        )}
      </>
    );
  }
}

RecipesPage.propTypes = {
  levels: PropTypes.array.isRequired,
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    recipes:
      state.levels.length === 0
        ? []
        : state.recipes.map(recipe => {
            return {
              ...recipe,
              levelName: state.levels.find(a => a.id === recipe.levelId).name
            };
          }),
    levels: state.levels,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadRecipes: bindActionCreators(recipeActions.loadRecipes, dispatch),
      loadLevels: bindActionCreators(levelActions.loadLevels, dispatch),
      deleteRecipe: bindActionCreators(recipeActions.deleteRecipe, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesPage);
