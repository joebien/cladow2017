
import React, { Component } from 'react'
import Carousel from './Carousel'

export default class Specials extends Component {

  render(){

    return(
      <div className = 'lato' style = {component}>

        <div style = {text}>

          <h1 >Featured Products{<br/>}

           Specials and Promotions{<br/>}
          </h1>

          <div style = {text2}>
            These are some of our featured items. Recommended for the cuting edge gardening enthusiast.
            With us you will find everything for your garden and much more!
            The offered items are special prices incl. VAT.

            The offered articles can not be combined with other promotions.

            Articles can be reserved online or by phone.

            {<br/>}{<br/>}

          </div>

        </div>

        <div title='carouselBoxDT' style = {carouselBox}>
          <Carousel ref = {(ref) => {this.car = ref}}/>
        </div>

      </div>
    )
  }
}

const h1 = {
  border:'solid red'
}

const component = {
  background : 'rgba(19,142,195,.4)',
  // clipPath: 'inset(0px)',
  position:'relative',
  boxSizing: 'border-box',
  outline: '1px solid teal',
  outlineOffset: '-10px',
  height:'100%',
  width : '100%',
  border :'solid rgba(19,142,195,.4) ',
}

const carouselBox = {
  position : 'absolute',
  zIndex : 2,
  right : '-2%',
  top: '1%',
  width : '43%',
}

const text = {
  //border : 'solid red',

  zIndex : '0',
  width:'32%',

  margin : '5% 2% 0',
  textAlign:'center',
  fontSize: '1vw',
  letterSpacing: '.3vw',
  textShadow: '2px 2px 4px darkgreen'
}

const text2 = {
  //border : 'solid',

  zIndex : '0',
width : '90%',
  left : '4.5%',
  textAlign:'center',
  fontSize: '2.5vmin',
  letterSpacing: '.2vw',

}




