  import React, { Component } from 'react'
  import ProdItem from '../ProdItem'
  import IconScroll from '../IconScroll'

export default class ProductInfoDevice extends Component {

    state = {
        selected : null,
        carMod:{width:'84vh',height:'100%'}
      }

    render(){



      //Tooltabs array which contains 4 <ProdItem/>s


          <ProdItem setShowCart = {this.props.setShowCart} addToCart = {this.props.addToCart} no = {i} key = {i} />

    
    return (
        <div>
        prodITEMS
        </div>
      )
    }
}
  
//styles

  const fillBox = {
    position : 'absolute',
    top : '0px',
    //border : 'dotted red 1px',
    width :'100%',
    height : '100%',
    display:'flex',
    justifyContent:'center'
  }
 
  const prodPics = {position : 'relative',
    //margin : '1%, 7%',
    width: '7%',
    
    height : '100%',
    boxShadow: '4px 4px 5px goldenrod',
  }
  
  const component = {
    //border : 'solid orange',
    position : 'relative',
    //outline: '1px solid black',
    outlineOffset: '-15px',
    display : 'flex',
    flexDirection : 'row',
    justifyContent: 'space-around',
    alignItems : 'center',
    width :'100%',
    height : '90%'
  }

  const productInfo = { 
    display : 'flex',
    textAlign : 'center',
    border:'solid goldenrod .5px',
    boxShadow: '4px 4px 5px goldenrod',
    width : '40%',
    background:'rgba(259, 229, 204, .5)',
    fontSize:'1.2vw'
  }