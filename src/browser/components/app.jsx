import React, { Component} from 'react';
import {
   Route,
   Link
} from 'react-router-dom';
import { Header } from './header/index';
import { Footer} from "./footer/index"
class App extends React.Component{
    render(){
        return (
            <div >
               <Header />
               <Footer />
            </div>
        )
    }
}
export { App }