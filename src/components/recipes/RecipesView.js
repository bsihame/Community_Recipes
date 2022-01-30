import React, { useEffect, useRef, useState } from "react";
import { getRecipes } from "../../state/recipes/recipes";
import { Footer } from "../headerFooter/Footer";
import { Header } from "../headerFooter/Header";

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
    Recipe  View
    </>
  )
}