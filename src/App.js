import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import { CategoryPage } from "./pages/categorypage/categorypage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={CategoryPage} />
      </Switch>
    </div>
  );
}

export default App;
