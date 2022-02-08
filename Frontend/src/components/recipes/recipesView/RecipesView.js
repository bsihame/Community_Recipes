import React, { useEffect, useRef, useState } from "react";
import { getRecipes } from "../../../state/recipes/recipes";
import { Footer } from "../../headerFooter/Footer";
import { Navbar } from "../../headerFooter/navbar/Navbar";
import { RecipeForm } from "../RecipeForm";

export const RecipesView = (props) => {
  
   const getRecipe = () =>{
     recipes.current.map((recipe => {}));
     }
   

  const recipes = useRef([]);


  useEffect(() => {
    recipes.current = getRecipes();
    getRecipe();
  }, [])



  return (
    <>
    This is all the recipes
    </>
  )
}