import React, { Component } from 'react'
import SlideOut from './SlideOut.js'


export default class HoverSeq extends Component {

  state = { picNo:0,
    test:0,
    opacity : .5}

  componentWillUnmount(){
    clearTimeout(this.timeOut)
  }

  //setOpacity by sequenceOpacity method on parent component
  setOpacity=(val)=>{
    this.setState({opacity:val})
  }


  autoSlide


  hoverSeq = (dir)=>{



    if(dir === 'fwrd' && this.autoSlide === undefined) {
      this.autoSlide = setTimeout(()=>this.slide.setInfo('open'),1000)
      // console.log('autoSlide ',autoSlide)
    }
    if(dir === 'bkwrd') {
      clearTimeout(this.autoSlide)
      this.autoSlide = undefined
      this.slide.setInfo('close')
    }

          //set phase to bkwrd to stop forward
          if(dir ==='bkwrd')this.phase = 'bkwrd'

          //incerement jpg numbers on mouseOver
          if (dir === 'fwrd'){
            this.setState({opacity : .9})
          //increment state.picNo
            let picNo = this.state.picNo + 1

          // terminal case
            if ( picNo > this.props.pics.length-1|| this.phase === 'bkwrd') return
          //increment state.picNo
            this.setState({picNo:picNo})
          // callback
            this.timeOut = setTimeout(()=>{this.hoverSeq('fwrd')}, 120)
          }

          //decrement jpg numbers on mouseLeave
          if (dir === 'bkwrd'){
            this.setState({opacity : .7})
          // decrement picNo
           let picNo = this.state.picNo - 1
          // terminal case
           if ( picNo < 0 ) {
            this.phase = 'fwrd'
            return}
          // decrement state.picNo
            this.setState({picNo:picNo})
          // callback
            this.timeOut = setTimeout(()=>this.hoverSeq('bkwrd'), 120)
          }
  }

  //Set height of containg div based on width which is based on parent component
  setHeight=(node)=>{
      if(node) node.style.height = node.offsetWidth * 1.13 + 'px'
  }

  render (){
    //jpg sequence opacity changes on mouseOver
    let picBoxStyle = {...picBox,...{opacity:this.state.opacity}}

    return (
          <div style = {component} ref = {(ref)=>this.setHeight(ref)}>

            {/*Transparent hit zone div on top to hold mouseEvents*/}
            <div
                    onClick={()=>{
                      this.props.closeAllSLideOuts()
                      this.slide.setInfo('toggle')
                    }}
                    onMouseEnter = {()=>this.hoverSeq('fwrd')}
                    onMouseOut = {()=>this.hoverSeq('bkwrd')}
                    style = {picBoxHit}>
            </div>

            {/*load jpgs from props.pics array loaded by fillPics on parent component*/}
            <div style = {picBoxStyle}>
                  {this.props.pics[this.state.picNo]}
            </div>

            {/*Text box slide out onClick*/}
            <SlideOut
                    {...this.props}
                    ref={(ref)=>this.slide=ref}

            />

          </div>
    )
  }
}

  const picBox = {
    //opacity : '.7',
    height : '100%',
    width : '100%',
    position : 'absolute',
    zIndex : '1',
    //border : 'dotted '
  }

  const component = {
    //border : 'dotted red',
    width : '100%',
    position : 'relative',
  }

  const picBoxHit = {
    opacity : '1',
    //border : 'solid orange 1px',
    width : '100%',
    height : '35vh',
    position : 'absolute',
    zIndex : '2'
  }



