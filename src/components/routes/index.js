import React  from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/home'
import Login from '../../pages/login'
import Register from '../../pages/register'
import Chut from '../../pages/categorias/chuteiras'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/Chuteiras" component={Chut}/>
            </Switch>
        </BrowserRouter> 
    )
}

export default Routes;