import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadRecipes, saveRecipe } from "../../redux/actions/recipeActions";
import { loadLevels } from "../../redux/actions/levelActions";
import PropTypes from "prop-types";
import RecipeForm from "./RecipeForm";
import { newRecipe } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageRecipePage({
  recipes,
  levels,
  loadLevels,
  loadRecipes,
  saveRecipe,
  history,
  ...props
}) {
  const [recipe, setRecipe] = useState({ ...props.recipe });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (recipes.length === 0) {
      loadRecipes().catch(error => {
        alert("Loading recipes failed" + error);
      });
    } else {
      setRecipe({ ...props.recipe });
    }

    if (levels.length === 0) {
      loadLevels().catch(error => {
        alert("Loading levels failed" + error);
      });
    }
  }, [props.recipe]);

  function handleChange(event) {
    const { name, value } = event.target;
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      [name]: name === "levelId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    setSaving(true);
    saveRecipe(recipe).then(() => {
      toast.success("Recipe saved!")
      history.push("/recipes");
    }).catch(error => {
      setSaving(false);
      setErrors({onSave: error.message});
    });
  }

  return levels.length === 0 || recipes.length === 0 ? (
    <Spinner />
  ) : (
    <RecipeForm
      recipe={recipe}
      errors={errors}
      levels={levels}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageRecipePage.propTypes = {
  recipe: PropTypes.object.isRequired,
  levels: PropTypes.array.isRequired,
  recipes: PropTypes.array.isRequired,
  loadRecipes: PropTypes.func.isRequired,
  loadLevels: PropTypes.func.isRequired,
  saveRecipe: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getRecipeBySlug(recipes, slug) {
  return recipes.find(recipe => recipe.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const recipe =
    slug && state.recipes.length > 0
      ? getRecipeBySlug(state.recipes, slug)
      : newRecipe;
  return {
    recipe,
    recipes: state.recipes,
    levels: state.levels
  };
}

const mapDispatchToProps = {
  loadRecipes,
  loadLevels,
  saveRecipe
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageRecipePage);
