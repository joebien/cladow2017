
import React, { Component } from 'react'
import Envelope from '../img/email.svg'
import {Motion, spring} from 'react-motion';


export default class Email extends Component {

  state = {
    toggle : true
  }

  openEmail = ()=>{
    window.location = this.props.address
  }

  shrink = (node)=>{
      if(node === null)return
      node.onclick = ()=>{
        node.style.transform = 'scale(.1)'
        setTimeout(()=>node.style.transform = 'scale(1)', 500)

      }
  }

  render(){



      const bounce = this.state.spring ?
          {scale: spring(1.2,{stiffness: 122, damping: 5})}: {scale: spring(1,{stiffness: 122, damping: 3})}

    return(


          <div
                  ref={(ref)=>this.shrink(ref)}
                  onMouseEnter={()=>this.setState({
                    spring:true,
                    hover:true
                  })}
                  onMouseLeave={()=>{
                   this.setState({
                     spring:false,
                     hover:false
                   })
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
    position : 'absolute',
    display:'flex',
    justifyContent:'space-around',
    width :'100%',
    cursor: 'pointer',
    zIndex : 0

}

const component = {
 //border : 'solid red 1px',
  width:'100%',
  height : '100%',
  display:'flex',
  flexDirection : 'column',
  justifyContent:'space-around', 
  position : 'relative',
  transition : '.5s'
  
}
 

