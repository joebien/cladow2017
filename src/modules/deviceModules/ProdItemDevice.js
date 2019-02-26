 import React, { Component } from 'react'

export default class ProdItemDevice extends Component {

    state = {
        showDescription : false,
        touch : false,
        lightning:false
      }

     addToCart = ()=>{ //call addToCart on Products component passing toolName and number from shopper component
      
      this.props.addToCart([this.props.productInfo.toolName + this.props.no,this.props.no])}

     over = (node, mouse)=>{
      if (node){
        if (mouse === 'over') {
          node.onmouseenter=()=>{this.setState({
              over:1,
              z:22
            })
          }}
        if (mouse === 'out') {
          node.onmouseleave=()=>{
            this.setState({
              over:0,
              z:-1
            })
          }}
      }
     }

     showDescription = ()=>{
        this.setState({showDescription:!this.state.showDescription})
     }


    handleTouch =(node)=>{
       if(!node)return

       node.addEventListener('touchstart', ()=>{this.setState({itemTouch:true})})
       node.addEventListener('touchend', ()=>{this.setState({itemTouch:false})})

    }

    touchLightning =(node)=>{
        if(!node)return

        node.addEventListener('touchstart', ()=>{this.setState({lightning:true})})
        node.addEventListener('touchend', ()=>{this.setState({lightning:false})})

    }




    render(){
      const itemtint = this.state.itemTouch ? tinter : {...tinter, ...{background : this.props.tint}}
      const lightningTog  = this.state.lightning ? lightning : {...lightning, ...{opacity:0}}
      return(//One of the four options for product selected from shopper component
    
            <div  style = {component} >
              <div style = {imgBox}>
                <div
                    ref = {(ref)=>this.handleTouch(ref)}
                    onClick = {()=>this.props.itemClick(this.props.subCat,this.props.name, this.props.tint)}
                    style = {itemtint}>

                </div>

                <img alt = {'prodpic'} style = {img} src={'https://joebien.github.io/img/singleIcons/' + this.props.name + '.svg'}/>
              </div>
                <div style = {rightBox}>

                  <div  ref = {(ref)=>this.handleTouch(ref)}
                        onClick = {()=>this.props.itemClick(
                            this.props.subCat,this.props.name, this.props.tint)}
                        style = {prodInfo}>

                     <div style = {toolName}>{this.props.subCat.subCat +' '+ this.props.name}</div>

                     <div style = {price}>${(this.props.subCat.price).toFixed(2)}</div>
                  </div>

                  <div style ={Addcart} ref = {(ref)=>this.touchLightning(ref)} >
                    <div style = {{marginRight : '3%'}} onClick = {()=>this.props.addToCart(this.props.subCat, this.props.name)}>
                        Add to Cart
                    </div>
                      <div style = {lightningTog}>
                    <img  style = {lightningImg} src ={require('../../img/lightning.jpg')} alt='lightning'/>
                      </div>
                  </div>

                </div>
            </div>
      )
        }
}


//styles

 const imgBox = {
    //border : 'solid',
     width : '20%',
     height : '100%'
 }

 const tinter = {
     position : 'absolute',
     height : '100%',
     width : '20%',
     opacity : '.35'

 }

 const rightBox = {
    // border : 'dotted blue 3px',
     width : '84%',

 }

 const Addcart = {
     //border : 'dotted blue 2px',
     display : 'flex',
     flexDirection : 'row',
     width : '100%',
     height : '30%',
     justifyContent : 'flex-end'
 }

 const lightning = {
    //border : 'solid red',
    left : '68%',
     bottom : '4%',

     height : '30%',
     width : '30%',
     position : 'absolute',
     zIndex : -1,
     opacity :1
 }

 const lightningImg = {
     height : '100%',
     width : '100%',
 }

 const component = {
    border : 'solid teal 1px',
     position : 'relative',
     height : '10vh',
     width : '80vw',
     display : 'flex',
     //flexDirection : 'row'
 }

 const img = {
    color : 'tint(red, 50%)',
     //border : 'dotted teal',
     //height : '40%',
     margin : 0,
     //width : '22vw',
     height : '110%'
 }
 const prodInfo = {
     display : 'flex',
     flexDirection : 'row',
     justifyContent : 'space-between',
     alignItems : 'flex-end',
     width : '90%',
     height : '66%',
     //border : 'solid red .5px',


 }
 const toolName = {
     height : '50%',
     textAlign : 'center',
     fontSize : '3vh',
     padding : '2%',
     background : 'rgba(255, 255, 255, .5)',
     border : 'solid teal .5px',
     marginLeft : '3%'
 }

 const price = {
     height : '50%',
     textAlign : 'center',
     border : 'solid teal .5px',
     marginBottom : '2%'
 }






   

  

     

   


  


   

   

   

   



 
