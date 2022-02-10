import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Switch from "react-switch";

// import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";
import { Home, home } from "./components/home/Home";
import { Navbar } from "./components/headerFooter/navbar/Navbar";
import { RecipesView } from "./components/recipes/recipesView/RecipesView";
import { RecipeForm } from "./components/recipes/RecipeForm";

function App() {
  return (
    <div className="App">
      <Navbar />
     
      {/* <Home/> */}
    </div>
  );
}

export default App;
