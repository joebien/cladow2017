import React, { Component } from 'react'
import NavLink from './NavLink'
import Radium, { Style } from 'radium'
import HorizonBrowse from './HorizonBrowse'
import IconLinks from './IconLinks'
import Shopper from './Shopper'
require("babel-core").transform("code", {
  plugins: ["transform-es2015-arrow-functions"]
});
require("babel-core").transform("code", {
  presets: ["stage-2"]
});

import ShoppingCart from './ShoppingCart'

var greek = <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At multis malis affectus. Ita multa dicunt, quae vix intellegam. Ea possunt paria non esse. Idemne potest esse dies saepius, qui semel fuit?
            </p>

export default class Products extends Component {

  constructor(props) {
    super(props),
    
    this.state = {
      prodNames : ['flower','shovel', 'wBarrow', 'sprinkler', 'shears', 'rake', 'claw', 'fence', 'boot', 'hose', 'grass', 'pump', 'waterer', 'mower', 'lilShovel'],
      products:'',

      shoppingCart:{},

      buttonOver : false,

      cartOpacity : false
      
    }

    this.capitalize = this.capitalize.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.removeCartItem = this.removeCartItem.bind(this)
    this.setShowCart = this.setShowCart.bind(this)
    this.editQuantity = this.editQuantity.bind(this)
    this.hoverButton = this.hoverButton.bind(this)
  }

  componentWillMount(){ 



    const products = {}

    this.state.prodNames.forEach( function(name){
      products[name] = <span><h3 style = {{margin:'1.5%'}}>{this.capitalize(name)}</h3>{greek}</span>
    },this )

      this.setState({defaultText:              
           
        <p>Wir führen ein sehr breites Sortiment in den verschiedenen Bereichen.  
        Als "Ihr Versorger vor Ort" bemühen wir uns ständig unser Sortiment zu erweitern und genau das im Geschäft zu haben was Sie benötigen.
         
        Sollte dies einmal nicht der Fall sein, haben wir die Möglichkeit durch die Untersützung vieler hervorragender Firmen Sonderbestellungen schnell und unkompliziert abzuwickeln.
        {<br/>}
         </p>
      }) 
    
      this.setState({products:products})


    }

    componentDidMount (){
      
    }

  editQuantity(e, item, val){

    let cart = this.state.shoppingCart

    cart[item][val] = Number(e.target.value)
    cart[item].cost = cart[item].quantity * cart[item].price

    this.setState({shoppingCart : cart})

    //this.setState({shoppingCart:{[item] : {[val]:e.target.value}}})

  
  }
  
  capitalize(word){
    return String.fromCharCode(word.charCodeAt(0)-32) + word.slice(1) 
    }

  addToCart = (item,e) =>{
    
    let cart = this.state.shoppingCart

    


    let price= cart[item[0]] ? cart[item[0]].price + item[1] : item[1]

    cart[item[0]] = {
      price : item[1],
      cost : item[1],
      quantity : 1
    }

   
    
    this.setState({shoppingCart : cart})
  }

  showCart(cart){

    if (cart == 'set') {
      this.setState({cartOpacity:!this.state.cartOpacity})
}else if (cart) {
      cart.style.opacity = this.state.cartOpacity ? 1 : 0
      cart.style.width = this.state.cartOpacity ? '26%': '0%'
    }
    }

    setShowCart(){
      this.setState({cartOpacity:!this.state.cartOpacity})
    }

  removeCartItem(e, item){

    let cart = this.state.shoppingCart

    delete cart[item]

    this.setState({shoppingCart : cart})


   
   
      }

  handleMouseMove(e){
    
    this.Shopper.MouseMove(e)
  }

 setScroll(scroll){
  
    if(scroll) scroll.scrollTop = scroll.scrollHeight

 }

hoverButton(node){// set state.buttonOver which sets btnHover to new style object to merge with button style object popping cart btn out with shadow and new border color
  if (node){

    node.addEventListener('mouseenter',()=>{
      if (!this.state.buttonOver)this.setState({buttonOver:true})
    })

    node.addEventListener('mouseout',()=> {
      if (this.state.buttonOver)this.setState({buttonOver:false})
    })

  }
}

  render(){
    let btnHover = this.state.buttonOver ? {
      border : 'solid Crimson .5px',
      boxShadow :'-6px 4px 6px DarkGoldenrod',
     
    } : {}
   
    return(
    

    <div onMouseMove = {(e)=>{this.handleMouseMove(e)}} style = {component}>
     
      {/*HEADER*/} 
      
        <div style = {header}>
         
           <div style = {text}>   
                         
              <h2 style={head}>Unser Sortiment</h2>

                     <p>Wir führen ein sehr breites Sortiment in den verschiedenen Bereichen. Als "Ihr Versorger vor Ort" bemühen wir uns ständig unser Sortiment zu erweitern und genau das im Geschäft zu haben was Sie benötigen. Sollte dies einmal nicht der Fall sein, haben wir die Möglichkeit durch die Untersützung vieler hervorragender Firmen Sonderbestellungen schnell und unkompliziert abzuwickeln.
                      </p>

            </div> 
            <div style = {hitArea}onClick = {()=>this.setShowCart()} ref = {(ref)=>this.hoverButton(ref)}>
</div>
              <img  key = {1} style = {Object.assign({},button, btnHover)} src = {'https://joebien.github.io/public/img/cart.svg'}/>

            
          </div>
        {/*CART*/}
          
        <div>
            <div style = {cart} ref = {(ref)=>this.showCart(ref)}>
              
              <div style = {butnBox} onClick = {()=>this.setShowCart()}>
                <span style = {yourcart}>Your Cart</span>
                
                <img  key = {2} style = {button2} src = {'https://joebien.github.io/public/img/cart.svg'}/>
              </div>

              <div style = {cartHeader}>
                  <div style = {{marginLeft : '3%'}}>Qty</div>
                  <div style = {{width : '55%', textAlign : 'center'}}>Item</div>
                  <div style = {{marginLeft : '3%'}}>Cost</div>
              </div>
              <div ref = {(ref)=>this.setScroll(ref)} style = {scroll}>
                <ShoppingCart 
                editQuantity = {this.editQuantity}
                remove = {this.removeCartItem} shoppingCart = {this.state.shoppingCart}/>
              </div>

            </div>

          </div>

       {/* <div  onMouseMove = {(event)=>this.refs.iconLinks.MouseMove(event)} style = {wideBox}> */}


 
<div style = {shopperBox}>
          <Shopper 
            ref = {instance => {this.Shopper = instance}} 
            setShowCart = {this.setShowCart} 
            addToCart = {this.addToCart}    
            products = {this.state.products}
          />
  
</div>       
         
 
   
        </div>
    
    )
  }

}

const hitArea = {
  width : '10%',
  height : '15%',
    right : '1%',
  border : 'solid',
  position : 'absolute',
zIndex : '5'}

const button = {
  //position : 'absolute',
//zIndex : '1',
  border : 'solid blue .5px',
  width : '4%',
  height : '11%',
  marginRight : '2%',
  boxShadow :'-3px 3px 5px DarkGoldenrod',
  transition : 'box-shadow .5s'

}

const component = {
  borderStyle:'solid solid solid solid',
  borderWidth:'0px',
  //borderColor :'red',
  height:'100%',
  display:'flex',
  flexDirection:'column',
  justifyContent: 'space-between',
  alignItems:'center',
  position : 'relative'

}

const cartHeader = {
  fontSize: '2.5vh',
  width:'100%',
  display:'flex',
  flexDirection : 'row',

  background:'rgba(249, 225, 158, .9)',


}

const cart = {
  //padding : '2%',
 // border : 'solid red',
 borderStyle : 'solid',
 borderWidth : '4px 3px',
 borderColor : 'rgba(255 , 254, 195, .6)',
  position :'absolute',
  display : 'block',
  zIndex : '22',
  width : '20%',
  top : '0',
  right: '0',

 
}

const butnBox = {

  //border : 'solid teal 1px',
  
  position : 'relative',
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'space-between',
  alignItems : 'center',
  width : '100%',
  height : '8vh',
  //borderRight : 'solid rgba(255 , 254, 195, .6) 1px',
borderBottom : 'solid rgba(255 , 254, 195, .6) 1px',
background : 'rgba(147, 236 , 79, 1)',

}

const scroll = { 
  
//border : 'solid blue',
  maxHeight :'200px',
  overflowY : 'scroll',
background : 'rgba(147, 236 , 79, 1)',
}



const shopperBox = {
  //border : 'solid teal',
  height : '60%',
  width : '100%'
}



const yourcart = {
  width : '90%',
  //border : 'solid',
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'center'
}









const button2 = {
  border : 'solid blue .5px',
  width : '11%',
  margin : '3%',
  boxShadow :'-3px 3px 5px DarkGoldenrod',

  ':hover': {
      border : 'solid Crimson .5px',
      boxShadow :'-6px 4px 6px DarkGoldenrod',
      transitionTimingFunction: 'cubic-bezier(.58,-0.01,.12,1.47)',
     
    }

}



const header = {
  display : 'flex',

}

const head = {
  margin : '1% 1% -1%'
}

const text = {
  //border : 'solid',
  margin:'0',
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
  alignItems:'center',
  padding:'0% 1% 1%',
  fontSize: '2.5vmin',
}

const scrollBox = {
  display:'flex',
  justifyContent: 'space-around',
  border:'solid 1px rgba(73, 191, 112, .3)',
  fontSize: '2.2vw',
  background:'rgba(249, 225, 158, .62)',
  height:'60%',
  padding:'.5%',
  overflow: 'auto',
  margin:'.1% 0% ',
  boxShadow: '15px 10px 25px rgba(153,153,51, 0.5)'
}









