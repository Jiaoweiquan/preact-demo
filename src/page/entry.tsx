import * as React from 'react'
import { IndexRoute, Route, Router, Link, Redirect, browserHistory } from 'react-router'
require('./entry.less')

const Entry = () => (
    <div>
        <ol className="pageList">
            <li><Link to='/news'>Breaking News!</Link></li>
            <li><Link to='/joke'>Jokes</Link></li>
            <li><Link to='/gallery'>Beauty Gallery</Link></li>
            <li><Link to='/animal'>Cute Animals</Link></li>
        </ol>
    </div>
)

export default Entry