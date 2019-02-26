import React, { Component } from 'react'
import HeadSet from '../img/phone.svg'
import {Motion, spring} from 'react-motion';

export default class Phone extends Component {

    state = {
        toggle: true,
      jiggle : false
    }


    render() {

        const jiggle = this.state.jiggle ?
      {left :spring(5, {stiffness: 150, damping:3})} : {left: spring(0, {stiffness: 150, damping:3})}

        return (
            <div onTouchStart={() => this.setState({jiggle: true})}
                 onTouchEnd={() => this.setState({jiggle: false})}

                 style={component}>


                <Motion style={jiggle}>
                    {({left}) => <div style={{...phone, ...{left: `${left}`}}}>

                        <img style ={img} src={HeadSet} alt='phone'/>

                    </div>}
                </Motion>

            </div>
        )
    }
}
const img = {
    //border : 'solid 1px',
    width : '100%'
}
const phone = {
    position : 'absolute',
    //border: 'solid teal',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
}

const component = {
    //border : 'solid red 1px',
    width:'100%',
    height : '100%',
    display:'flex',
  flexDirection : 'column',
    justifyContent:'space-around',
    position : 'relative'
}