
import './App.css';
import { Header } from './components/headerFooter/Header';
import { RecipesView } from './components/recipes/RecipesView';


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <RecipesView /> 
        </div>
    </div>
  );
}

export default App;
