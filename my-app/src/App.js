import React from "react";
import { BrowswerRouter as Router, Route, Switch} from "react-router-dom";
import Search from './pages/search';
import Results from './pages/results';
import NoMatch from './pages/nomatch';
import Navbar from "./components/navbar";
import Header from "./components/header";
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
