import React, { Component } from 'react'

import {Motion, spring} from 'react-motion';

export default class Phone extends Component {

  state ={}

render(){

  const bounce = this.state.bounce ?
          {scale: spring(1.5,{stiffness: 122, damping: 3})}: {scale: spring(1,{stiffness: 122, damping: 3})}

  return(
      <div onTouchStart = {()=>this.setState({bounce:true}) }
           onTouchEnd={()=>this.setState({bounce:false})}
           style={component}>

        <Motion style = {bounce}>

          {({scale}) => <div style = {{...button,...{transform: `scale(${scale})`} }}>
            NEXT
      </div>}


        </Motion>
      </div>

        )
    }
}

const button = {
  width :'100%',

}

const component = {
  transformOrigin: '100% 100%',
  transform:'rotate(-90deg)',
  width : '100%',
  height : '100%',
  background :'rgba(255,255,255,.5)',
  //border :'solid 1px',
  padding: '4% 1% 8% 10%',
  borderRadius: '5px 5px',
  letterSpacing : '2px'
}