import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import { AuthenticationPage } from "./pages/authentication/authenticationpage.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/signin" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
