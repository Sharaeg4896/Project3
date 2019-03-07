import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from './pages/Search';
import Results from './pages/Results';
import NoMatch from './pages/NoMatch';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Header/>
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route exact path='/result' component={Results}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
