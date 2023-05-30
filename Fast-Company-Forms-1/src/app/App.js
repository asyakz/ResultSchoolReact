import React from "react";
import Users from "./components/layouts/users";
import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import Nav from "./components/nav";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
