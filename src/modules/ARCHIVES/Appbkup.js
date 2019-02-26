import React from 'react'
import NavLink from './NavLink'




export default React.createClass({
  render() {
    return (
      <div className="bigBox">



        <div className="logo">   
          <img src = {"http://drive.google.com/uc?export=view&id=0B0mebtp9fyBcTjFrRHJ6RlRuNG8"}/></div>
        <ul role="nav" className="navbar">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})
