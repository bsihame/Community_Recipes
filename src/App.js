import "./App.css";
import { Header } from "./components/headerFooter/Header";
import { RecipesView } from "./components/recipes/RecipesView";

function App() {
  return (
    <>
      <div className="navbar">
        <Header />
      </div>
      <div className="App">
        <div className="recipeViewContainer">
          <RecipesView />
        </div>
      </div>
    </>
  );
}

export default App;
