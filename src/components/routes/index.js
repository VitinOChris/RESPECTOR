import React, { Suspense }  from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/home'
import Login from '../../pages/login'
import Register from '../../pages/register'
import Futebol from '../../pages/categorias/futebol'
import Basquete from '../../pages/categorias/basquete'
import Skateboarding from '../../pages/categorias/skateboarding';
import Adidas from '../../pages/marcas/adidas'
import Nike from '../../pages/marcas/nike'
import Under from '../../pages/marcas/under armour'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={ Login } />
                <Route path="/register" component={Register} />
                <Route path="/Futebol" component={Futebol}/>
                <Route path="/Basquete" component={Basquete}/>
                <Route path="/Skateboarding" component={Skateboarding}/>
                <Route path="/Nike" component={Nike}/>
                <Route path="/Under Armour" component={Under}/>
                <Route path="/Adidas" component={Adidas}/>
            </Switch>
        </BrowserRouter> 
    )
}

export default Routes;