import React from "react";
import Users from "./layouts/users";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Nav from "./components/ui/nav";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/users/:userId?/:edit?" component={Users} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
