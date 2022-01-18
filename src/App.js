import react from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Header";

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/checkout">
         <h1>checkout</h1>
       </Route>
       <Route path="/login">
       <h1>login</h1>
       </Route>
       <Route path="/">
       <Header/>
         <h1>homepage</h1>
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;