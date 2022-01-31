import React, { useState } from "react";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import "../../css/recipeForm.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  rootButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
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
        <Card className={classes.root}>
        <div className="recipeContainer">
            <form className="addRecipeForm" onSubmit={handleSubmit}>
              <div className="cardTitle">
                <TextField
                  id="outlined-basic"
                  className="titleInput"
                  label=" Title"
                  variant="outlined"
                  placeholder="Title"
                  onFocus={() => setError(false)}
                  value={title}
                  type="title"
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  required
                />
              </div>

              <div className="cardType">
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

              <div className="cardIngredients">
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
        </Card>
  );
};
