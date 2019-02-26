import React, { Component } from 'react'
import ShowCartBtn from './ShowCartBtn'


export default class ShoppingCart extends Component {

    state = {}

    total(){
      let total = 0
      for (let item in this.props.shoppingCart){
        total += this.props.shoppingCart[item].cost
      }
      return total
    }


    handleChange(e, item, val){

      this.props.editQuantity(e, item, val)

    }

    setScroll = (scroll) => {

    if(scroll) scroll.scrollTop = scroll.scrollHeight
  }

  render(){
    let contents = []
    let total = 'Your Total $' + this.total()
    
    for (let item in this.props.shoppingCart){
    
      contents.push(
        <div key = {contents.length} style = {li}>
          
          <div style = {listing}>

            <input type = 'text' value = {this.props.shoppingCart[item].quantity} style = {inputQ} onChange = {(e)=>this.handleChange(e,item, 'quantity')}/>

            <div style = {itemName}> {item}</div>
            
            <div style = {itemName}>${this.props.shoppingCart[item].cost}</div>
            
          </div>
            
          <div onClick = {(e)=>this.props.remove(e, item)}style = {remove}>
              <div style = {lilBox}>
                <img style = {img} alt ={'x'}src = {require('../img/x.jpg')}/>
              </div>
          </div>
           
        </div>
      )
    }

    let CartEmptyMsg = contents.length === 0 ? 'Your Cart Is Empty' : null

    let cartShow = this.props.opacity ? {opacity : 1} : {opacity :0}
  return(
        <div style = {{...component,...cartShow}}>
          <div style = {inner}>
              
              <div style = {btnBox}>

                 <ShowCartBtn {...this.props}/>

              </div>
              
              <span style = {yourcart}>Your Cart</span>

                {CartEmptyMsg}

              <div style = {cartHeader}>
                    <div style = {{marginLeft : '3%'}}>Qty</div>
                    <div style = {{width : '55%', textAlign : 'center'}}>Item</div>
                    <div style = {{marginLeft : '3%'}}>Cost</div>
              </div>

              <div ref = {(ref)=>this.setScroll(ref)} style = {scroll}>  
                {contents}
              </div>

              <div style = {totalBox}>{total}</div>

          </div>

        </div>
      )
    }  
} 



const inner = {
  //height : '99%',
  border : 'solid teal .5px',
  width : '22vw',
  display : 'flex',
  flexDirection :'column',
  alignItems : 'space-around',
  marginBottom : '10%',
  marginTop : '3%',
  position : 'relative'
}

const btnBox = {
  right : 3,
  top :2,
  //border : 'solid red 1px',
  position : 'absolute',
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'flex-end',
  alignItems : 'center',
   width : '100%',
  height : '7vh',
}

const cartHeader = {
  fontSize: '2.5vh',
  width:'100%',
  display:'flex',
  flexDirection : 'row',
  background:'rgba(249, 225, 158, .9)',
}

const scroll = { 
  //width : '80%',
  //border : 'solid blue',
  maxHeight :'200px',
  overflowY : 'scroll',
  background : 'rgba(147, 236 , 79, 1)',
}

const yourcart = {
  margin : '2%',
  width : '90%',
  //border : 'solid',
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'center'
}



const img ={
  width : '100%'
}

const remove = {
  display: 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  width : '12%',
  background : 'rgba(255 , 254, 195, .6)',
}

const li = {
  margin : '2%',
  width : '93%',
  position : 'relative',
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'space-between',
  boxShadow :'1px 1px 4px LimeGreen',
}

const totalBox = {
  marginTop : '4%',
  background : 'rgba(255 , 254, 195, 1)',
  width : '100%',
  textAlign : 'center'
}

const inputQ = {
  width : '12%',
  textAlign: 'center', 
}

const listing = {
  background : 'rgba(255 , 254, 195, .6)',
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'space-between',
  width : '97%'
}  

const itemName = {
  background : 'none',
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'center'
}

const component = {
  display : 'inline-block',
  background : 'rgba(147, 236 , 79, .8)',
  borderStyle : 'solid',
  borderWidth : '4px 3px',
  borderColor : 'rgba(255 , 254, 195, .6)',
  transition : '1s .3s'
}

const lilBox = {
  border : 'solid green .5px',
  width : '50%',
  height : '50%',
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'center'
 }




