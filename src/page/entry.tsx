import * as React from 'react'
import { IndexRoute, Route, Router, Link, Redirect, browserHistory } from 'react-router'

const Entry = () => (
    <div>
        <ol>
            <li>Human</li>
            <li>Cats</li>
            <li>fishes</li>
            <li><Link to='/dial'>Dial</Link></li>
        </ol>
    </div>
)

export default Entry