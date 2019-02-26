  import React, { Component } from 'react'
  import ProdItem from './ProdItem'
  import IconScroll from './IconScroll'

export default class ProductPanel extends Component {

    state = {
        selected : null,
        carMod:{width:'84vh',height:'100%'}
      }

    render(){

      //load img specified in props.productInfo.toolName
        
        let prodPic = this.props.productInfo.toolName ? this.props.productInfo.img : null

      //Make Tooltabs array which contains 4 <ProdItem/>s
        let toolTabs = []
        const colors = ['rgba(193,52,61,.2)','rgba(255,255,255,.6)','rgba(19, 172, 172, .3)','rgba(40,172,19,.2)']
        
        if (this.props.productInfo.toolName){
          for (let i = 1; i<5; i++){
            toolTabs.push(
                    <ProdItem
                        color = {colors[i-1]}
                        {...this.props}
                        no = {i} key = {i} prodPic = {prodPic}
                    />
            )
          }
        }

      // Fill element = scrolling animated graphic at the bottom of the screen
      // <IconScroll/> till Shopper.IconRow is clicked then = []
        let fill = this.props.showBottomScroll ?
          <div style = {fillBox}>
            <IconScroll carMod = {this.state.carMod} goScroll = {true}/>
          </div>  : []
    
    return (

      // Bottom animated graphic taken out and elements(toolTabs) are shown when IconLinks is clicked

        <div style = {component} > {fill}
          <div style={{...innerBox,...{opacity : this.props.showElements}}}>
          
            <div style = {prodPics}> {toolTabs[0]} </div>

            <div style = {prodPics}> {toolTabs[1]} </div>

            <div style = {productInfo}> {this.props.productInfo.info} </div>

            <div style = {prodPics}> {toolTabs[2]} </div>

            <div style = {prodPics}> {toolTabs[3]} </div>
          </div>
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
    justifyContent:'center',
    zIndex : 1
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

  const innerBox = {
          ...component,
          ...{width:'98%'}
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