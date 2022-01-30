
import './App.css';
import { Recipe } from './components/recipes/recipes';
import { RecipesView } from './components/recipes/RecipesView';


function App() {
  return (
    <div className="App">
      <RecipesView />
      <Recipe />
    </div>
  );
}

export default App;
