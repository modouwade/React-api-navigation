import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import News from "./Pages/News";
import NotFound from "./Pages/NotFound";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={News} />
          <Route path="/about" exact component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
