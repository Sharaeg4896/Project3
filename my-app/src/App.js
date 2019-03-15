import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from './pages/search';
import Results from './pages/results';
import NoMatch from './pages/NoMatch';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Landing from "./pages/landing";
import hairTips from "./pages/hairTips";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Header/>
        <Switch>
          <Route exact path="/" component= {Landing}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/result' component={Results}/>
          <Route exact path='/hairTips' component={hairTips}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
