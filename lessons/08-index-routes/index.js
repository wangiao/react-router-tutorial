import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>

            {/* add it here, as a child of `/` */}
            {/*只有新打开页面的时候，才会加载home组件。已经做过点选Link的动作后不会再显示Home*/}
            <IndexRoute component={Home}/>

            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'))
