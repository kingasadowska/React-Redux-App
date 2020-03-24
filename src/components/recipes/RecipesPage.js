import React from "react";
import { connect } from "react-redux";
import * as recipeActions from "../../redux/actions/recipeActions";
import * as levelActions from "../../redux/actions/levelActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import RecipeList from "./RecipeList";

class RecipesPage extends React.Component {
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

  render() {
    return (
      <>
        <h2>Recipes</h2>
        <RecipeList recipes={this.props.recipes} />
      </>
    );
  }
}

RecipesPage.propTypes = {
  levels: PropTypes.array.isRequired,
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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
    levels: state.levels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadRecipes: bindActionCreators(recipeActions.loadRecipes, dispatch),
      loadLevels: bindActionCreators(levelActions.loadLevels, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
