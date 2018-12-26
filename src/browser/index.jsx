import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
} from 'react-router-dom';
import { Provider } from 'mobx-react'
import { App } from "./views/app";
import "./index.less"

class RootApp extends  React.Component {
    render(){
        return (
           <Router >
                <App />
           </Router>
        )
    }
}

ReactDOM.render(
    <Provider >
         <RootApp />
    </Provider>,
    document.getElementById('root')
)