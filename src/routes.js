import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";

// history
import { history } from "./helpers/history";

// pages
import Recipes from './Recipes';
import Login from "./Login";
import CreateRecipe from "./CreateRecipe";
import RouteGuard from "./RouteGuard";

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                {/* <Route exact path="/"
                    component={Recipes} />
                <Route path="/login" component={Login} />
                <Redirect to="/" /> */}
                <Route exact path="/" component={Recipes} />
                <RouteGuard exact path="/form" component={CreateRecipe} />
                {/* <RouteGuard exact path="/login" component={Login} /> */}
                <Route path="/login" component={Login} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Routes;