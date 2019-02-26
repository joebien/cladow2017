import React, { Component } from 'react'
import Envelope from '../img/email.svg'
import {Motion, spring} from 'react-motion';
// In your render...



export default class Email extends Component {

  state = {
        toggle : true
  }

  openEmail = ()=>{
    window.location = this.props.address
  }

  render(){
      const bounce = this.state.spring ?
          {scale: spring(1.5,{stiffness: 122, damping: 3})}: {scale: spring(1,{stiffness: 122, damping: 3})}

    return(
          <div onTouchStart={()=>this.setState({spring:true})}
               onTouchEnd={()=>{
                   this.setState({spring:false})
                   //setTimeout(this.openEmail,800)
               }
               }
               style ={component}>


              <Motion style = {bounce}>

                  {({scale}) => <div style = {{...email,...{transform: `scale(${scale})`} }}>

                    <img style ={img}  src={Envelope} alt='email' />

                  </div>}
              </Motion>

          </div>

        )
    }
}



const img = {
    //border : 'solid 1px',
    width:'100%'
}

const email = {
    //border : 'solid orange',
    display:'flex',
    justifyContent:'space-around',
    width :'100%',
}

const component = {
 //border : 'solid red 1px',
  width:'100%',
  height : '100%',
  display:'flex',
  flexDirection : 'column',
  justifyContent:'space-around', 
  position : 'relative',
  
}
 

