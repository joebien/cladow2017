import React, { Component } from 'react'
// import Router from 'react-router'
// import Route from 'Router.Route'
// import DefaultRoute from 'Router.DefaultRoute'
// import Link from 'Router.Link'
import {RouteHandler} from 'react-handler'
//import RouteHandler from 'react-handler';
import Header from './Partials/Header'
//import Main from './Partials/Main'



export default class App extends Component {

  // mixins: [Router.State],

  componentDidMount() {
  }

  render() {const name = this.getRoutes().reverse()[0].name;
    return (

            <div>
              <Header/>
              <div className='main'><RouteHandler key={name}/></div>
            </div>
    )
  }}