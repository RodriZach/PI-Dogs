import './App.css';
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import DogDetail from './Components/Home/Dogs/DogDetail';
import Landing from './Components/Landing/Landing';
import CreateDog from './Components/Create/CreateDog';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/home/:id'>
        <DogDetail />
      </Route>
      <Route exact path='/form'>
        <CreateDog />
      </Route>

    </div>
  );
}

export default App;
