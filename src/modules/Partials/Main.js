import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Products from '../Products'
import Specials from '../Specials'
import Contact from '../Contact'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export default class Main extends Component {

  state = {}

  render() {

    if (this.state.redirect) {
      return <Contact/>
    } else {return (
              <main style={main}>
                <Switch>

                  <Route exact path='/' component={Home}/>
                  <Route path='/home' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/products' component={Products}/>
                  <Route path='/specials' component={Specials}/>
                  <Route path='/contact' component={Contact}/>
                </Switch>
              </main>
      )
    }
  }
}


const main ={
  boxSizing: 'border-box',
  // border :'solid #efc660 2px',
  width : '100%',
  height : '100%',
  background : 'rgba(255, 231, 158, .5)',
}