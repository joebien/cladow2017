 import React, { Component } from 'react'
 
export default class ProdItem extends Component {


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

        if(out === 'out'){ // Hide - on Out node = selectedBox
          this.setState({
            popOut : false,
            selected:false,
            itemText : '',
            addC : '',
            charge : ''
          })
          node.style.zIndex = 0 
          //node.style.border = null
          node.childNodes[1].childNodes[1].style.border = ''
          node.style.background = ''
          node.childNodes[1].style.border = ''
          node.childNodes[1].childNodes[1].childNodes[1].style.border = ''

        node.childNodes[1].childNodes[1].childNodes[0].style.border = ''
          node.style.width = ''
          
        }else{ //Show node = prodPics - alll the elements of selectedBox are given values which makes selectedBox visible, showing a pic, info, price, add to cart and show cart

          node.nextSibling.style.border = 'solid pink 3px'
          node.nextSibling.style.background = 'Yellow'
          node.nextSibling.style.width = '25%'

          node.nextSibling.style.zIndex = 5 
          
          node.nextSibling.childNodes[1].childNodes[1].childNodes[0].style.border = 'dotted 1px'
          node.nextSibling.childNodes[1].childNodes[1].childNodes[1].style.border = 'solid Maroon .5px'
          node.nextSibling.childNodes[1].style.border = 'solid Goldenrod .5px'
       
          this.setState({
            popOut : true,
            selected:true,
            itemText:'This is some text about ' + this.props.productInfo.toolName+this.props.no,
            charge : 'Cost - $ ' + this.props.no,
            addC : 'Add to Cart'
          })

        // Set last ProdItem popout to the left to keep it in view
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
            <img alt ={'cart'} key = {1} style = {button} src = {'https://joebien.github.io/public/img/cart.svg'}/>
          </div> : null

    //selectedBoxLeft = product graphic and name or null when popout out
      let selectedBoxLeft = this.state.selected ? 
        <div style = {selectBoxLeft}>
        <div style = {toolName}>{this.props.productInfo.toolName + this.props.no}</div>
        <img alt = {'prodpic'} style = {img} src={this.props.prodPic}/>
        </div> : null

    return(
      <div style = {component}>

        {/*One of four icon images*/} 
          <div  style = {prodPics} onMouseEnter = {(e)=>{this.popOut(e)}}>
             
                  <div style = {toolName}>{this.props.productInfo.toolName + this.props.no}</div>
                  <img alt = {'prodpic'} style = {img} src={this.props.prodPic}/>
             
            
          </div> 
        {/*mouseleaves selectedBox to close popout opened by mouseEnter prodPics*/}
          
          <div style = {selectedBox} onMouseLeave = {(e)=>{ this.popOut(e,'out')}}>
        
            {/*toolImage and title*/}
            
            <div>{selectedBoxLeft}</div>
       
            {/*prod info add to cart and show cart*/}    
            <div style = {text}>

              <p style = {{margin : '0'}}> {this.state.itemText} </p>

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


//styles

const selectBoxLeft = {
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
//border : 'solid red',
  height : '100%',
  //width : '25%'
}

  const toolName = {
      //border : 'solid',
      textAlign : 'center',
      width : '100%',
      fontSize : '2vh',
      marginTop : '6%',
      background : 'rgba(255, 255, 255, .5)'
    }

 const price = {
  margin : '1%',
      //border : 'solid',
      height :'10%'
    }

 const selectedBox = {
        display : 'flex',
        flexDirection : 'row',
        bottom: '-5%',
        border : 'solid pink 3px',
        position:'absolute',
       // top : '-5%',
        height : '111%',
        //width : '20%',
        //background : 'LightYellow',
        zIndex : '0',  
    }

  const component = {
      //border : 'dotted red',
      height : '100%'
    }

const prodPics = {
  height :'100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-around',
        displayItems : 'center',
        //border : 'solid Maroon 3px'
      }

      const img = {
      //border : 'dotted teal',
      height : '80%',
      //marginTop : '6%'
    }

    const addCart = { 
      margin : '1%',
      padding : '1%',
      height : '10%',
      ':hover': {
        boxShadow: '-3px 5px 5px rgba(184,134,11,.5)'
      }
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
          transitionTimingFunction: 'cubic-bezier(.58,-0.01,.12,1.47)'
        }
    }

   

    const addBox = {

      width :'104%',
      //border : 'solid',
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between'
    }




 
