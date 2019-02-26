import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'



export default  class Header extends Component {

  constructor(props) {

    super(props)
    this.state = {defaultStyle:'tabFocus'}

  }
 
  render(){
    const compstyle = {...component, ...this.props.headFoot}

    return(

      <div style = {component}>






<nav style={nav}>


    <div style={hitBox} >
      <div className = 'tab' >HOME
                {/*<NavLink to='/home' style={link} activeStyle={active}>Home</NavLink>*/}
      </div>
    </div>

  <div style={hitBox} >




    <div className = 'tab'  >ABOUT
          {/*<NavLink to='/about'  activeStyle={active}>About</NavLink>*/}
        </div>
  </div>
</nav>


    </div>

    )
  }
 }



const hitBox = {
  name:'tab',
  position:'relative',

  border: 'solid 1px ',

  fontSize: '2.3vmin',
  height:'65%',
  width:'20%',

  //clipPath: 'inset(0px 0px 2px)',
  display:'flex',
  justifyContent:'center',
}

const tab = {
  //height:'100%',
  border:'solid blue 1px',
  position:'relative',
  zIndex:3,
  //display: 'block',
 // background: 'rgba(249, 225, 141, .9)',
  //padding:'2% 4% 90%  ',

}

const link = {
  display: 'block',
  color:'rgba(92, 54, 15, 1)',
  padding:'2% 4% 90%  ',
  background: 'rgba(249, 225, 141, .9)',
  borderRadius: '.3em .3em 0px 0px',
}

const active = {



}

const nav = {
  display:'flex',

  alignItems:'flex-end',
  width:'100%',
  height:'45%',
  border:'red solid'
}

const component = {
  position : 'relative',
  //border:'solid blue',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100%',
  width : '100%',
  zIndex:111
  }

  const backGround = {
    borderStyle:  'solid solid solid solid',
    borderWidth: '.5px .5px .5px',
    background: 'rgba(249, 225, 158, .8)',
    height: '100%',
    width : '100%',
    position : 'absolute',
    zIndex : '-1'

  }








const navBbox = {
  //border: 'solid purple 1px',
    position : 'relative',
    display:'flex',
    flexDirection : 'row',
    justifyContent:'center',
    width:'100%',
    height : '47%',
  zIndex:'111'
  }

const navbar = {
  position : 'absolute', 
  fontFamily: 'Lato:700, sans-serif',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  height: '93%',
  width: '90%',
  borderStyle: 'solid solid none solid',
  borderColor: 'rgba(249, 225, 158, .5)',
  background: 'rgba(212, 176, 77, .1)',
  borderWidth: '3px',
  bottom : -3,
  zIndex:111
  }

const logo = {
  //border : 'solid red 1px',
  position : 'absolute',
  top : '0%',
  zIndex : '2',
  paddingTop:'.5%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  //fontFamily: 'Lato:700, sans-serif',
  height: '54%',
  fontFamily: 'Lobster Two, cursive',
  fontSize: '5.9vw',
  textShadow: '7px 7px 5px rgba(0,51,0, .4)',
  color: '#426618',
  transform: 'scale(1.5,1)'
  }

 const space2 = {
  position : 'absolute',
  right :'0px',
  bottom : '0px',
  width:'4.7%',
  borderStyle: 'none none solid none',
  borderColor:'rgba(249, 225, 158, .5)',
  borderWidth: '3px'
  }










