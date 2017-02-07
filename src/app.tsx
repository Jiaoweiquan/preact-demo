import * as React from 'react'
import { IndexRoute, Route, Router, Link, Redirect, browserHistory } from 'react-router'
import { createHashHistory } from 'history'
import Entry from './page/entry'
import Dial from './page/dial'
require('./base_style.less')

const router = (
    <Router history={createHashHistory()}>
        <Route path="/">
            <IndexRoute component={Entry} />
            <Route path="dial" component={Dial}/>
            <Route path="*" component={Entry}/>
        </Route>
    </Router>
)

export default router