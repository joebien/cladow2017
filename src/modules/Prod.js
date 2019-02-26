import React, { Component } from 'react'
import SpecialText from './SpecialText.js'



export default class Prod extends Component {

    state = {info:false}

    componentWillMount(){

    }

    //Set info to false at the start of each cycle
    componentWillReceiveProps(nextProps){

      if(this.props !== nextProps) {
        this.setState({info:false})
        this.setInfo()
      }
    }

    //Set info to true if this component is in front - prop.style.info === true
    setInfo=()=> {

      setTimeout(()=>{if (this.props.style.info && !this.state.info) this.setState({info:true})},650)
    }
  
    render(){
    //Show or hide info div based on state.info
      const infoToggle = this.state.info ?  infoOpen : infoClosed

      return(
              <div style = {{...this.props.style,...component}} >
                <div style = {clickText}>
                  <div style = {innerClickText}>(Click to Browse)</div>
                </div>
                <img style = {img} src ={this.props.image} alt = {this.props.image}/>

                <div style={infoBox}>

                    <div style = {infoToggle}>
                        <SpecialText item = {this.props.item} info={this.state.info}/>
                    </div>

                </div>

              </div>
        )
    }
}

const innerClickText = {

}

const clickText = {
  //border : 'solid blue',
  position : 'absolute',
  bottom : 0,
  left : '0%',
  width : '100%',
  zIndex : 11,
  display : 'flex',
  justifyContent : 'center',
  color : 'lightblue',
  fontSize : '50%'
}

const component = {

}

const infoBox = {
  //border:'dotted',
  height :'100%',
  width : '100%',
  position : 'absolute',
  top : 0
}

const infoOpen = {
  fontSize:'4.2vw',
  //border:'solid red',
  height : '100%',
  zIndex : '-2',
  position : 'absolute',
  right : '100%',
  transition : 'font-size .3s .5s,right 1s .5s'
}

const infoClosed = {
  fontSize:'2.2vw',
  //border:'solid red',
  height : '100%',
  zIndex : '-2',
  position : 'absolute',
  right : '0%',
  top : '0'
}

const img ={
  opacity : 1,
  border : 'solid teal 1px',
  width : '100%',
  display : 'block',
}