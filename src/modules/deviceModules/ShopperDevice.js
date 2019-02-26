  import React, { Component } from 'react'
  // import ProductInfoDevice from './ProductInfo'
  // import NavArrows from './NavArrows'
  //import ReactDOM from 'react-dom';
  import ReactSwipe from 'react-swipe'
  import ProductTile from '../ProductTile'


export default class Shopper extends Component {


    constructor(props) {
    super(props);

      this.wait = false
      this.holdBlink = false
      this.rightO = 1
      this.leftO = 1
    }

    state = {
        rArrZindx : 1,
        lArrZindx : 1,
        leftO:0,
        rightO:0,
        navArrows:true,
        productInfo:'',
        go:true,
        showFill : true,
        showProdInfo : 0,
        border: null
    }

 //METHODS

  horizonSlide(direction, d){ //Move iconGroup if it hasn't reached the end left or right
        if (direction === 'left' 
          && this.rightEnd.getBoundingClientRect().right > this.component.clientWidth + this.component.clientWidth * .06
          ) 
          {
          this.iconGroup.style.left = Number(this.iconGroup.style.left.slice(0,-1)) - d + '%'
        }

        if (direction === 'right' && this.leftEnd.getBoundingClientRect().left < this.component.clientWidth * .07
          )
          {
          this.iconGroup.style.left = Number(this.iconGroup.style.left.slice(0,-1)) + d + '%'

        }
      }

render(){

    let iconColl = []

    for (let subCat in this.props.products){
        iconColl.push(<div key={iconColl.length} style = {tile}><ProductTile {...this.props} name = {subCat} /></div>)
    }

    let iconSlides = iconColl.reduce(
        (result,icon,i,arr)=>{

            let slide = arr.splice(0,3)
            result.push(<div key = {i}><div style = {panel}>{slide}</div></div>)
            return result

        },[]
    )

return(
        <ReactSwipe swipeOptions={{continuous: true}}>
            {iconSlides}
        </ReactSwipe>
      )
    }
  }

//Styles

  const panel ={
    fontSize :'100%',
      //border:'solid red 1px',
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-around',
      margin : '0 11%'
}

  const tile = {
    width:'33%',
      //border : 'solid teal',
      margin : '4%',
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'center'
}


   

    

  
