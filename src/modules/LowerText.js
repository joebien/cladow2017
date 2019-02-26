import React, { Component } from 'react'

//delay 1 sec then merge 'lowerText lowerTextshow' classNames to animate height of clipPath div to expose text

export default class LowerText extends Component {
  state = {}

  setFontSize = (node)=>{
    if (node === null)return
    // this.textFont = {fontSize : node.offsetWidth / 25}
    this.textFont = {fontSize : '1.5vw'}
  }

    render(){
      setTimeout(()=> {if(!this.state.show)this.setState({show:true})},1000)

      const textStyle = this.state.show ? lowerTextshow : lowerText
      //const textStyle = {...pretextStyle,...this.textFont}

      return (
              <div style = {comp}>
                    <div ref={(i)=>{this.setFontSize(i)}} style = {textStyle} >
                      <div style = {{margin : '2%'}}>
                       We carry a variety of the latest technology in gardening tools. Shredders, lawnThatchers, lawnmowers, hand tools and accessories for your garden. With us you will find exactly the right one! Our expert team can help you find the best tools for any project large or small.{<br/>}
                       Cladow has a star reputation with a a community of long term return customers. We are sure you will find the most complete services at the most reasonabe price.{<br/>}
                        <div style = {{textAlign : 'center'}}>Call or walk in today!</div>

                      </div>
                    </div>
              </div>
      )
    }
  }

const lowerText = {
  background : 'rgba(255, 231, 158, .8)',
  marginRight : '1%',
  width : '100%',
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'space-around',
  alignItems : 'center',
  textAlign : 'justify',
  fontSize : '18px',
  fontFamily : '"Lato", sans-serif',
  fontWeight : '100',
  lineHeight : '150%',
  position : 'absolute',
  top : '-85%',
  transitionProperty : 'top',
  transitionDuration : '2s',
  transitionTimingFunction : 'cubic-bezier(0.64, 0.09, .45, 1.04)'
}

const lowerTextshow = {
  ...lowerText,...{
  top:0,
  outline: '1px solid rgba(218,165,32,.5)',
  outlineOffset : '-4px',
  }
}

const comp = {
  textShadow : '3px 1px 1px rgba(255,255,255,1)',
  width : '90%',
  height : '100%',
  position : 'relative',
  clipPath: 'inset(0)',
  fontSize : '2vw'
}








