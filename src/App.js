import React from "react";
import "./App.css";
import SearchPage from './pages/SearchPage';
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <SearchPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
