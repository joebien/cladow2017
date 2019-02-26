 import React, { Component } from 'react'
 import ShowCartBtn from './ShowCartBtn.js'
 
export default class ProdItem extends Component {

  state = {
        popOut:false,
        selected:null,
        z:-1,
        opacity : 0,

        charge : 'Cost - $' + this.props.no,
        addC : 'Add to Cart' 
      }

    //Show action box on hover enter productBox leave actionBox
    //call addToCart on Products component (3 levels up) passing toolName and number from shopper component (1 level up)

  addToCart = ()=>{
    this.props.addToCart(
     [this.props.productInfo.toolName + this.props.no,this.props.no]
    )
  }

  hover = (mouse) => {

      if(mouse === 'enter'){
       this.setState({
          itemText:'This is some text about ' + this.props.productInfo.toolName+' ' +this.props.no,
          opacity:1,
          z:5
        })
      }

      if(mouse === 'leave'){
        this.setState({
          opacity:0,
          z:-1
        })
      }
  }

  render(){

    //style modifier for last 2 actionBoxes
    let rightOrLeft = this.props.no > 2 ?{right:0,left:undefined}:{}
    const border = this.props.color.slice(0,this.props.color.length-3)+'.3)'
    const toolNameStyle = {...toolName,...{border:'solid 1px ' + border}}

    return(
    
      <div style = {{...component,...{background:this.props.color, border:'solid 1px ' + border}}} >
        
          {/*productBox framing toolname and graphic*/}
          <div
                  style = {productBox}
                  onMouseEnter={()=>this.hover('enter')}
          >

            <div style = {toolNameStyle}>{this.props.productInfo.toolName + this.props.no}
            </div>

            <img alt = {'prodpic'} style = {img} src={this.props.prodPic}/>

          </div>

          {/*ACTION BOX : APPEARS OVER PRODUCT BOX ON productBox MOUSEENTER*/}
          {/*TRANSPARENT ON actionBox MOUSELEAVE*/}
          <div style = {
            { ...actionBox,
              ...{zIndex:this.state.z,opacity:this.state.opacity},
              ...rightOrLeft}
            }
               onMouseLeave={()=>this.hover('leave')}>

            <div style = {{...actionBoxLeft,...{background:this.props.color}}}>
                <div style = {toolNameStyle}>
                  {this.props.productInfo.toolName + this.props.no}
                </div>
                <img alt = {'prodpic'} style = {img} src={this.props.prodPic}/>
            </div>
          
            <div style = {actionBoxRight}>
  
                <div style = {text}>{this.state.itemText}</div>
  
                <div style = {addBox}>
  
                  <div style = {price}>{this.state.charge}</div>
             
                  <div onClick = {this.addToCart} style = {addCart}>
                    {this.state.addC}
                  </div>
  
                </div>
  
                <div style = {showCart}>
                  <ShowCartBtn {...this.props} click = {this.props.setShowCart}/>
                </div>
                
            </div>

          </div>

      </div>
    )
  }
}


//styles

  const text ={
    textAlign : 'center',
  }

  const showCart = {
    width : '100%',
    height : '30%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-end'
  }

  const actionBoxRight = {
    width : '70%',
    position : 'relative',
    border : 'solid Khaki .5px',
    fontSize : '2vh',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-around',
    alignItems : 'center',
  }

  const actionBox = {
    name : 'actionBox',
    opacity : '0',
    display : 'flex',
    flexDirection : 'row',
    bottom: '-5%',
    border : 'solid LemonChiffon 3px',
    position:'absolute',
    zIndex : 10,
    height : '111%',
    width : '400%',
    background : 'rgba(255, 255, 255, 1)',
    left : '-30%',
    top : '-7%'
  }

  const actionBoxLeft = {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    height : '100%',
    width : '30%',
  }

  const price = {
    width : '34%',
    padding : '1%',
    textAlign : 'center',
    border : 'solid teal .5px',
  }

  const addCart = {
    padding : '1%',
    width : '44%',
    textAlign : 'center',
    border : 'solid teal .5px',
  }

  const component = {
    border : 'solid goldenrod .5px',
    position : 'relative',
    height : '100%',
  }

  const productBox = {
    position : 'relative',
    height :'100%',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-around',
    displayItems : 'center',
  }

  const addBox = {
    width :'100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around'
  }

  const img = {
    height : '80%',
    margin : 0,
    width : '100%',

  }

  const toolName = {
  width : '98%',
    textAlign : 'center',
    fontSize : '2vh',
    marginTop : '6%',
    background : 'rgba(255, 255, 255, .5)',
  }



   

  

     

   


  


   

   

   

   



 
