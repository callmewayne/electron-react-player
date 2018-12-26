import React, { Component} from 'react';
import {
   Route,
   Link
} from 'react-router-dom';
import { Header } from './header/index';
import { Footer} from "./footer/index";
import { MainBody } from './mainBody/index'
class App extends React.Component{
   
    render(){
       var  appStyle = {
            width:'100%',
            height:'100%'
        }
        return (
            <div style={appStyle}>
               <Header />
               <MainBody />
               <Footer />
            </div>
        )
    }
}
export { App }