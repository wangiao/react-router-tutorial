import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import Repos from "../03-navigating-with-link/modules/Repos";
import About from "../03-navigating-with-link/modules/About";

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('app'))
