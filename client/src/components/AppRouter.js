import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

function AppRouter() {
    const isAuth = false
    return (
        <div>
            <Switch>
                {
                    isAuth && authRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} component={Component} exact/>
                    )
                }
                {
                    publicRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} component={Component} exact/>
                    )
                }
                <Redirect to={SHOP_ROUTE}/>
            </Switch>

        </div>
    )
}

export default AppRouter