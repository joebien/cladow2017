
  import React, { Component } from 'react'
  import NavLink from './NavLink'
  import Radium, { Style } from 'radium'
  import IconLinks from './IconLinks'
 

  export default class HorizonBrowse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    } 

      // render(){
      //   return (
      //     <div  onMouseMove = {(event)=>this.refs.iconLinks.MouseMove(event)} style = {component}>
      //       <div style = {linkBox}>
      //         <IconLinks ref ='iconLinks'   products = {this.props.products}/>
      //       </div>
      //     </div> 
      //   )
      // }

      render(){
        return (
          <div   style = {component}>
            <div style = {linkBox}>
              <IconLinks products = {this.props.products}/>
            </div>
          </div> 
        )
      }

  }

  const linkBox = {
  
    width : '100%',
    overflow: 'hidden'
    
  }

  const component = {
    border :'dotted red 13px',
    display:'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    width : '100%',
    height : '100%'

  }


   



    