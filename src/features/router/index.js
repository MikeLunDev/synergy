import { Redirect, Route, Switch } from "react-router"
import HomePage from "../pages/Homepage"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"

const Router = () => {

    return (
        <Switch>
            <Route path={"/"} exact>
                <Redirect to={"/login"} />
            </Route>
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/homepage"} component={HomePage} />
            <Route path={"/signup"} component={SignupPage} />
        </Switch>
    )
}



export default Router