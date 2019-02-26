import React, { Component } from 'react'
import HeadSet from '../img/phone.svg'
import Email from './EmailDT.js'
import PhoneShadow from '../img/PhoneShadow.svg'
import {Motion, spring} from 'react-motion';

export default class PhoneDT extends Component {

    state = {
      toggle: true,
      jiggle : false,
      bounce: false
    }

    ring=(phone)=>{
      if(phone === null) return

      const turnPhone=(v)=>{
        phone.style.transform='rotateZ('+v+'deg)'
      }
      let counter = 0

      const ringPhone =()=>{
        counter++
        if(counter > 9) {
          turnPhone(0)
          counter = 0
          return}

        turnPhone(6)
        setTimeout(()=>turnPhone(-6),50)
        setTimeout(()=>ringPhone(),100)
      }

      phone.onmousedown = ()=>{
        ringPhone()
      }

    }

    render() {console.log('phoneRenders')

      const bounce = this.state.bounce ?
              {scale: spring(1.1,{stiffness: 122, damping: 5})}: {scale: spring(1,{stiffness: 122, damping: 3})}

        return (
            <div onMouseOver={() => this.setState({bounce: true})}
                 onMouseLeave={() => this.setState({bounce: false})}
                 style={component}>
              <img style ={img} src={PhoneShadow} alt='phoneSh'/>

              <Motion style = {bounce}>

                {({scale}) => <div style = {{...phone,...{transform: `scale(${scale})`} }}>

                  <img ref={(ref)=>{this.ring(ref)}} style ={img} src={HeadSet} alt='phone'/>

                </div>}
              </Motion>

            </div>
        )
    }
}

const img = {
    width : '100%',
    marginBottom : '8%'
}

const phone = {
    position : 'absolute',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    cursor: 'pointer'
}

const component = {
    width:'100%',
    height : '100%',
    display:'flex',
    flexDirection : 'column',
    justifyContent:'space-around',
    position : 'relative',
    //border : 'solid blue'
}