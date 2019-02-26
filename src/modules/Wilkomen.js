import React, { Component } from 'react'


export default class Wilkomen extends Component {
  state = {}

  compStyle = {}

  setCompStyle=(node)=>{
    if (!node) return
    this.compStyle = {
      display : 'flex',
      justifyContent : 'center',
      width : '100%',
      height : node.offsetWidth /6,
      fontSize : node.offsetWidth /11,
      //fontSize : '4vw',
      position : 'relative',
      fontWeight : 300,
    }
  }

  componentDidMount(){
      this.setState({ping:'pong'}) // refresh so setCompStyle has time to load
      this.mounted = true
  }

  componentWillUnmount(){
      this.mounted = false
      clearTimeout(this.showTimer)
      clearTimeout(this.hideTimer)
  }

// after delay top and bottom styles animate up and down;
// after second delay topbox and bottombox style go to opacity : 0;
// and final box goes to opacity : 1 ;
// and background goes to opacity : .5

    render() {
        this.showTimer = setTimeout(()=> {if(this.mounted && !this.state.show)this.setState({show:true})},200)

        // this.hideTimer = setTimeout(()=> {if(this.mounted && !this.state.hide){
        //   this.setState({hide:true})
        // }},2400)

        this.hideTimer = setTimeout(()=> {if(this.mounted && !this.state.showBknd)this.setState({showBknd:true})},2000)

        let topStyle = this.state.show? {...top,...topShow}: top
        
        let bottomStyle = this.state.show? {...bottom,...bottomShow}: bottom

        let bottomBoxStyle = this.state.hide ? {...bottomBox,...{opacity:0}} : bottomBox

        let topBoxStyle = this.state.hide ? {...topBox,...{opacity:0}} : topBox
        
        let bigBoxStyle = this.state.showBknd ? bigBoxShow : bigBox

        let finalBoxStyle = this.state.hide ? finalBox : {...finalBox,...{opacity:0}}
        
        return (

                  <div ref={(ref)=>this.setCompStyle(ref)} className = 'lato' style={this.compStyle}>

                    <div style = {bigBoxStyle}>


                      <div style = {topBoxStyle}>
                        <div style={topStyle}>Welcome to Quality</div>
                      </div>

                      <div style = {bottomBoxStyle}>
                        <div style={bottomStyle}>Welcome to Quality</div>
                      </div>

                      <div style = {finalBoxStyle}>
                        <div style={final}>Welcome to Quality</div>
                      </div>


                    </div>
                  </div>
        )
    }
  }

  const bigBox ={
    height : '60%',
    width : '100%',
    background:'rgba(255, 231, 158, 0)',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    // outline: '1px solid rgba(218,165,32,0)',
    // outlineOffset: '0px',
    textShadow : '3px 3px 5px rgba(184,134,11,.8)',
    letterSpacing : '1px',
    transition : '.8s',
    boredr : 'dotted purple 2px'

  }

  const bigBoxShow = {...bigBox,...{
    // outline: '1px solid rgba(218,165,32,.2)',
    // outlineOffset: '-4px',
    background:'rgba(255, 231, 158, .5)',
  }}

  const bottomBox = {
    textAlign : 'center',
    clipPath: 'inset(0)',
    position : 'absolute',
    zIndex : 1,
    top:'32%',
    left:'0',
    height:'25%',
    width : '100%',
  }

  const bottom = {
    lineHeight : '80%',
    position : 'absolute',
    zIndex : 1,
    top:'-230%',
    transition : '1s',
    left : '11%'
  }

  const finalBox = {
    //clipPath: 'inset(0)',
    position : 'absolute',
    zIndex : 3,
    left:'0',
    top : '8%',
    height:'25%',
    width : '100%',
    opacity : 1,
    //color : 'red',
   //border : 'dotted black 1px'
  }

  const final = {
    letterSpacing : '1px',
    lineHeight : '80%',
    position : 'absolute',
    zIndex : 3,
    top : '-1%',
    transition : '1s',
    left : '11%',
    textAlign : 'center',
    //border : 'dotted red 1px'
  }

  const topBox = {
    clipPath: 'inset(0)',
    position : 'absolute',
    zIndex : 0,
    left:'0',
    top : '8%',
    height:'25%',
    width : '100%',
    //border : 'dotted blue 1px'
  }

  const top = {
    lineHeight : '80%',
    position : 'absolute',
    zIndex : 0,
    bottom:'-200%',
    transition : '1s',
    left : '11%',
    textAlign : 'center',
    //border : 'dotted green 1px'
  }

  const topShow = {
    bottom:'-70%'
  }

  const bottomShow = {
    top:'-100%',
  }







