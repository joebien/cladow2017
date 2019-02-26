import React, { Component } from 'react'
import HoverLink from './HoverLink.js'


export default class Header extends Component {
  state = {focus:false}

  setFocus=()=>{
    this.setState({focus:true})
    this.setState({focus:false})
  }
          render() {


            const headerStyle = this.props.headFoot.borderColor ? { ...header,...{borderColor :this.props.headFoot.borderColor} } : header

            return(
              <header className='lato' style={headerStyle} >
              <div style = {logo} >Garten Center Cladow</div>
                <div style={navBox} onClick = {this.setFocus}>
                  <div style = {navBoxFill}/>
                  <nav style={nav}>

                    <HoverLink focus = {this.state.focus} link = 'Home'{...this.props} />

                    <HoverLink focus = {this.state.focus} link = 'About'{...this.props}/>

                    <HoverLink focus = {this.state.focus} title = 'Our &nbsp;Products' link = 'Products'{...this.props}/>

                    <HoverLink focus = {this.state.focus} link = 'Specials'{...this.props}/>

                    <HoverLink focus = {this.state.focus} title = 'Contact' link = 'Contact'{...this.props}/>

                  </nav>
                  <div style = {navBoxFill}/>
                </div>
              </header>
            )
          }
        }



const logo = {
  //border : 'solid blue',
  position : 'absolute',
  top : '0%',
  right:0,
  zIndex : '2',
  paddingTop:'.5%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '54%',
  width:'100%',
  fontFamily: 'Lobster Two, cursive',
  fontSize: '5.5vw',
  //fontWeight: 'bold',
  letterSpacing:'3px',
  textShadow: '7px 7px 5px rgba(0,51,0, .4)',
  color: '#426618',
  transform: 'scale(1.5,1)'
}

const navBox = {
  //border:'solid red 1px',
  width:'100%',
  height:'45%',
  display:'flex'
}

const navBoxFill = {
  width : '5%',
  borderStyle : 'none none solid',
  borderWidth : '2px',
  borderColor:'rgba(255,248,220,.4)',
}

const nav = {
  boxSizing: 'border-box',
  position:'relative',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-around',
  height:'100%',
  width:'90%',
  fontSize:'3vh',
  fontWeight:300,
  background: 'rgba(85, 72, 51, .1)',
  borderStyle:'solid solid none solid',
  borderColor:'rgba(255,248,220,.4)',
  // borderWidth:'3px 3px 0px 3px'
}

const header = {
  boxSizing: 'border-box',
  borderStyle:'solid',
  borderWidth:'15px 15px 6px',
  borderColor :'rgba(249, 231, 183, .2) rgba(249, 231, 183, .2) rgba(239, 198, 96, 1)',
  height:'100%',
  overflowY:'hidden',
  background : 'rgba(255, 231, 158, .5) ',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'flex-end'

}