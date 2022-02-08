import "./App.css";
import { Navbar } from "./components/headerFooter/navbar/Navbar";
// import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login"

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        {/* <Home /> */}
        {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;
