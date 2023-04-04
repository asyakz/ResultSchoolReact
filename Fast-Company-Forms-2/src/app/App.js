import React from "react";
import Users from "./layouts/users";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Nav from "./components/ui/nav";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from "react-router-dom";
import UserFormPage from "./components/page/userPage/userFormPage";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/users/:userId?/edit" component={UserFormPage} />
        <Route path="/users/:userId?" component={Users} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
