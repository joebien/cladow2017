
import React, { Component } from 'react'
import CarouselDevice from './CarouselDevice'

export default class SpecialsDevice extends Component {

  render(){

    return(
      <div style = {component}  >

        <div style = {text}>

          Wir, das "Team" vom GartenCenterCladow {<br/>} stellen uns vor.

        </div>

            <div style = {carouselBox}>
              <CarouselDevice max = {75} min = {5} ref = {(ref) => {this.car = ref}}/>
            </div>


        <div style = {footBox}>
          <div style = {hrL}/>

            <div style = {text2}>
              Hier finden Sie die aktuellen Sonderangebote.
            </div>

            <div style = {bottomText}>
            (Tap Anywhere to Browse)</div>

          <div style = {hrR}/>
        </div>

      </div>
    )
  }
}


const component = {
  background : 'rgba(176,224,230,0)',
  zIndex : 1,
  position:'relative',
  height:'100%',
  width : '100%',
  display:'flex',
  justifyContent: 'space-between',
  flexDirection:'column',
  //border : 'solid red'
}

const footBox = {
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'space-between',
  alignItems : 'flex-end',
  //border : 'solid green',
  width:'100%',
  height : '8%',
  position : 'relative'
}

const text2 = {
  width:'100%',
  position : 'absolute',
  //border : 'solid orange',
  fontSize: '4vw',
  letterSpacing: '.2vw',
  top : 0,
  textAlign : 'center'
}


const bottomText = {
  fontSize: '2.5vmin',
  //lineHeight: '.4',
  //display : 'flex',
  //border : 'solid 1px',
  height : '50%',
  topMargin:' 22%'
}

const hrL = {
  margin : '1%',
  borderStyle:'solid none none none ',
  borderColor:'teal',
  borderWidth:'1px',
  height : '30%',
  width : '32%'
}

const hrR = {
  margin : '1%',
  borderStyle:'solid none none  none ',
  borderColor:'teal',
  borderWidth : '1px',
  height : '30%',
  width : '28%',
}





const carouselBox = {
  //border :'dotted blue 2px',
  position : 'absolute',
  zIndex : '6',
  left : '.5%',
  top : '13%',
  width : '85%',
  height : '6%',
}

const text = {
  //border : 'solid red',
  zIndex : '1',
  width:'97%',
    height : '20%',
  top:'0px',
  textAlign:'center',
  fontSize: '6.5vmin',
  letterSpacing: '.3vw'
}









