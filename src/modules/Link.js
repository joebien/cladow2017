import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'




export default class Link extends Component {
render(){
  const title=this.props.title
  return(
<div style={component}>

            <NavLink to="/About" activeStyle={{...active,...this.props.frameAndTabs,}} ><div className='lato' style={linkText}>{title}</div>
            </NavLink>
</div>

  )
}
}

const component={
  //border:'dotted teal',
  position:'relative',
  zIndex:3,
  background: 'rgba(249, 225, 141, .9)',
  borderRadius: '5px'


}

const linkText = {
  border:'solid red 3px',
  //whiteSpace: 'nowrap',
  padding:'0 0 15%',
  opacity:0,



}



const active = {
  position:'relative',
  color:'rgba(92, 54, 15, 1)',
  background: 'rgba(249, 225, 141, .9)',
  //border : 'solid teal',
  //padding:'0% 3% 3vh 15%',
  //width:'110%',
  height : '2vw',
  textAlign : 'center',
  borderRadius: '.3em .3em 0px 0px',
}






