import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './component/Create';
import Index from './component/Index';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return ( < Router >
            <
            div className = "container" >
            <
            nav className = "navbar navbar-expand-lg navbar-light bg-light" >
            <
            a className = "navbar-brand" > React Express App < /a> <
            div className = "collapse navbar-collapse"
            id = "navbarSupportedContent" >
            <
            ul className = "navbar-nav mr-auto" >
            <
            li className = "nav-item" > < Link to = { '/create' }
            className = "nav-link" > Create < /Link></li >
            <
            li className = "nav-item" > < Link to = { '/index' }
            className = "nav-link" > List < /Link></li >
            <
            /ul> <
            hr / >
            <
            /div> < /
            nav > < br / >
            <
            h2 > Welcome to React Express Tutorial < /h2> <
            ul >
            <
            li > < Link to = { '/create' } > Create < /Link></li >
            <
            li > < Link to = { '/index' } > List < /Link></li >
            <
            /ul> <
            hr / >
            <
            Switch >
            <
            Route exact path = '/create'
            component = { Create }
            /> <
            Route path = '/index'
            component = { Index }
            /> < /
            Switch > <
            /div> < /
            Router >
        );
    }
}

export default App;