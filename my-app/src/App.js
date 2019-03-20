import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from './pages/search';
import NoMatch from './pages/nomatch';
import Landing from "./pages/landing";
import hairTips from "./pages/hairTips";
import Footer from "./components/footer"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component= {Landing}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/hairTips' component={hairTips}/>
          <Route component={NoMatch}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
