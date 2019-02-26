 import React, { Component } from 'react'
  import NavLink from './NavLink'
  import Radium, { Style } from 'radium'


class ProdItem extends Component {


    constructor(props) {
      super(props); 
      //this.node 
      this.state = {
        popOut:false,
        selected:null,
        itemText:null
      }
      this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount(){ this.setState({innerWidth:this.getInnerWidth()})}

    getInnerWidth(){ return window.innerWidth }

    popOut(e,out){ // Show and hide product info and add to cart button - selectedBox
        
        e.stopPropagation()
        let node = e.currentTarget

        if(out){ // Hide - on Out node = selectedBox
          this.setState({
            popOut : false,
            selected:null,
            itemText : null,
            addC : null,
            charge : null
          })
          node.style.zIndex = 0 
          node.style.border = null
          node.childNodes[1].childNodes[1].style.border = null
          node.style.background = null
          node.childNodes[1].style.border = null
          node.childNodes[1].childNodes[1].childNodes[1].style.border = null

          node.childNodes[1].childNodes[1].childNodes[0].style.border = null
          node.style.width = null
          
        }else{ //Show node = prodPics - alll the elements of selectedBox are given values which makes selectedBox visible, showin a pic, info, price, add to cart and show cart

          node.nextSibling.style.border = 'solid teal 1.5px'
          node.nextSibling.style.background = 'LightYellow'
          node.nextSibling.style.width = '25%'
          node.nextSibling.style.zIndex = 5 
          
          node.nextSibling.childNodes[1].childNodes[1].childNodes[0].style.border = 'solid .5px'
          node.nextSibling.childNodes[1].childNodes[1].childNodes[1].style.border = 'solid Maroon .5px'
          node.nextSibling.childNodes[1].style.border = 'solid Goldenrod .5px'
          

          
          let nodeCode = node.innerHTML
          console.log('props  ',nodeCode);
       
          this.setState({
            popOut : true,
            selected:{__html:nodeCode},
            itemText:'This is some text about ' + this.props.productInfo.toolName+this.props.no,
            charge : 'Cost - $ ' + this.props.no,
            addC : 'Add to Cart'
          })

          let window = this.state.innerWidth
          let loc = node.getBoundingClientRect().left
              
          if(loc > window /2) {
          node.nextSibling.style.left = node.getBoundingClientRect().left -180
          }
        }
    }

    addToCart(){ //call addToCart on Products component passing toolName and number from shopper component
      
      this.props.addToCart([this.props.productInfo.toolName + this.props.no,this.props.no])}

       
  render(){ 

    //viewCart = cart graphic with button to show cart by setShowCart() on Products component
      const viewCart = this.state.popOut ?  <div  onClick = {()=>this.props.setShowCart()}>
              <img key = {1} style = {button} src = {'https://joebien.github.io/public/img/cart.svg'}/>
            </div> : null

    return(
      <div style = {component}>

          {/*One of four icon images*/} 
        <div  style = {prodPics} onMouseEnter = {(e)=>{this.popOut(e)}}>
            <div >
                <div style = {toolName}>{this.props.productInfo.toolName + this.props.no}</div>
                <img style = {img} src={this.props.prodPic}/>
            </div>
          
        </div> 

        <div style = {selectedBox} onMouseLeave = {

          (e)=>{
            this.popOut(e,'out')
            console.log('mouseleave')
          }

        } >

          <div style = {{border : 'solid red'}}dangerouslySetInnerHTML={this.state.selected}/>
          
          <div style = {text}>

            <p > {this.state.itemText} </p>

            <div style = {addBox}>
              <div style = {price}>{this.state.charge}</div>
              <div onClick = {this.addToCart}style = {addCart}> {this.state.addC} 
              </div>
            </div>
            <div>{viewCart}</div>

          </div>

        </div>

      </div>
    )
  }
}


module.exports = Radium(ProdItem)

const addCart = { 
  padding : '1%',
  //border : 'solid red 1px'

  ':hover': {
    boxShadow: '-3px 5px 5px rgba(184,134,11,.5)'
  }
}


const toolName = {
  //border : 'solid',
  textAlign : 'center',
  width : '100%',
  fontSize : '2vh',
  marginTop : '6%',
  background : 'rgba(255, 255, 255, .5)'
}

const img = {
  //border : 'dotted teal',
  height : '80%',
  marginTop : '6%'
}

const component = {
  //border : 'dotted teal',
  //height : '100%'
}


 const prodPics = {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-around',
    displayItems : 'center',
    //border : 'solid Maroon 3px'
  }


  const selectedBox = {
    display : 'flex',
    flexDirection : 'row',
    bottom: '2%',
    //border : 'dotted red 1px',
    position:'absolute',
    top : '2%',
    //height : '120%',
    //width : '20%',
    //background : 'LightYellow',
    zIndex : '0',  
}


const text = {
  position : 'relative',
  //border : 'solid purple 11px',
  fontSize : '2vh',
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'space-around',
  alignItems : 'center',
  padding : '2%'
    
    // textAlign : 'center',
    // verticalAlign : 'middle',
    // marginTop : '20%'

}

const button = {
  border : 'solid blue .5px',
  width : '30%',
  marginLeft : '65%',
  boxShadow :'-3px 3px 5px DarkGoldenrod',

  ':hover': {
      border : 'solid Crimson .5px',
      boxShadow :'-6px 4px 6px DarkGoldenrod',
      transitionTimingFunction: 'cubic-bezier(.58,-0.01,.12,1.47)',
     
    }

}

const price = {
  padding : '1%'
}

const addBox = {

  width :'104%',
  //border : 'solid',
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'space-between'
}







const selectText ={
  padding : '3%'
}


const titleNPic = {
  //border : 'dotted red',
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',

  width : '50%'

}



const border = {border : 'solid'}



 
