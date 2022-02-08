import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import "../../css/recipeForm.css";

const useStyles = makeStyles(() => ({
  inputText: {
    width: "300px",
    margin: "10% 0",
  },

  inputType: {
    width: "300px",
    margin: "10% 0",
  },

  inputIngredients: {
    width: "300px",
    margin: "10% 0",
  },

  rootButton: {
    width: "300px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "48px",
  },
}));

export const RecipeForm = (props) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);
  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <div className="recipeContainer">
      <h1
        className="recipeContainerTitle"
        // style={"'Tangerine', serif"}
      >
        Add A Recipe
      </h1>
      <form className="addRecipeForm" onSubmit={handleSubmit}>
        <div className={classes.inputText}>
          <TextField
            id="outlined-basic"
            className="titleInput"
            label=" Title"
            variant="outlined"
            placeholder="Title"
            onFocus={() => setError(false)}
            value={title}
            type="text"
            onChange={(e) => setTitle(e.currentTarget.value)}
            required
          />
        </div>

        <div className={classes.inputType}>
          <TextField
            id="outlined-basic"
            className="typeInput"
            label=" Type"
            variant="outlined"
            placeholder="Type"
            onFocus={() => setError(false)}
            value={type}
            type="type"
            onChange={(e) => setType(e.currentTarget.value)}
            required
          />
        </div>

        <div className={classes.inputIngredients}>
          <TextField
            id="outlined-basic"
            className="ingredientsInput"
            label=" Ingredients"
            variant="outlined"
            placeholder="Ingredients"
            onFocus={() => setError(false)}
            value={ingredients}
            type="ingredients"
            onChange={(e) => setIngredients(e.currentTarget.value)}
            required
          />
        </div>
        <div>
          <Button className={classes.rootButton} type="submit">
            Create A Recipe
          </Button>
        </div>
      </form>
    </div>
  );
};
