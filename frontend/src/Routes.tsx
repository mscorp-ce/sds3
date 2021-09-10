import Dashboard from "pages/Dashboard/Dashboard";
import Home from "pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;