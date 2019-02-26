import React, { Component } from 'react'
import DropDownMenu from '../DropDownMenu'


export default class Header extends Component {

  constructor(props) {

    super(props)
    this.state = {defaultStyle:'tabFocus'}

  }

 loadRoute = (route)=>{
     window.location = '' +
         'Products'
     return false
 }
  render(){

const compstyle = {...component, ...this.props.headFoot}

    return(
      <div style = {compstyle}>

            <div style = {ddMenu}>
                <DropDownMenu addModiStyle = {this.props.addModiStyle}/>
            </div>
                <div style = {logo} >Garten Center Cladow</div>

    </div>

    )
  }


 }

// export default Radium(Header);


//STYLES

const ddMenu = {

    //border : 'solid',
    position : 'absolute',
    zIndex : 15,
    top :'70%',
    right : '1%',
    height :'30%'

}

const logo = {
    //border : 'solid red 1px',
    letterSpacing :'2px',
    position : 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    //fontFamily: 'Lato:700, sans-serif',
    //height: '54%',
    fontFamily: 'Lobster Two, cursive',
    fontSize: '8.9vw',
    textShadow: '7px 7px 5px rgba(0,51,0, .4)',
    color: '#426618',
    //transform: 'scale(1.5,1)'
}

const component = {
  position : 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',


  background: 'rgba(249, 225, 158, .6)',
  height: '100%',
  width : '100%'
  }

// const navBbox = {
//   //border: 'solid purple 1px',
//     position : 'relative',
//     display:'flex',
//     flexDirection : 'row',
//     justifyContent:'center',
//     width:'100%',
//     height : '47%'
//








