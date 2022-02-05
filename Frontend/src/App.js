import "./App.css";
import { Header } from "./components/headerFooter/Header";
// import { Footer } from "./components/headerFooter/Footer"
import { RecipesView } from "./components/recipes/RecipesView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Switch from "react-switch";
import { Home } from "./components/home/Home";

function App() {
  return (
    <>
        <Header />
      <div className="App">
        <div className="recipeViewContainer">
          <RecipesView />
        </div>
      </div>
    </>
    
  );
}

export default App;
