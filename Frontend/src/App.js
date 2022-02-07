import "./App.css";
import { Header } from "./components/headerFooter/Header";
import { RecipesView } from "./components/recipes/recipesView/RecipesView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Switch from "react-switch";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login"

function App() {
  return (
    <div className="App">
      <div>
        {/* <Home /> */}
        <Login />
      </div>
    </div>
  );
}

export default App;
