import React from "react";
import PropTypes from "prop-types";
import SimpleInput from "../common/SimpleInput";
import SelectInput from "../common/SelectInput";

const RecipeForm = ({
  recipe,
  levels,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{recipe.id ? "Edit" : "Add"} Recipe</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <SimpleInput
        name="title"
        label="Title"
        value={recipe.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="levelId"
        label="Level"
        value={recipe.levelId || ""}
        defaultOption="Select Level"
        options={levels.map(level => ({
          value: level.id,
          text: level.name
        }))}
        onChange={onChange}
        error={errors.level}
      />

      <SimpleInput
        name="category"
        label="Category"
        value={recipe.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

RecipeForm.propTypes = {
  levels: PropTypes.array.isRequired,
  recipe: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default RecipeForm;
