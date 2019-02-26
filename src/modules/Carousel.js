import React, { Component } from 'react'
import Prod from './Prod'

export default class Carousel extends Component {

    state={
        clicked:false
    }

    images = []
    styles = []

    componentWillMount(){
      this.loadStyles()
      this.images = this.importAll(require.context('../img/specials', false, /\.(png|jpe?g|svg)$/));
    }

    componentDidMount(){
      setTimeout(()=>this.shiftStyles(),100)
    }

    //Shift placement of style objects in styles array puttin first in last position
    //Then toggle state.clicked to refresh
    shiftStyles = ()=>{
        this.styles.push(this.styles.shift())
        this.setState({clicked:!this.state.clicked})
    }

    //Load this.styles array with 6 style objects with varying opacity, top, left, width,       and zIndex values
    loadStyles =()=> {
      if (this.styles.length > 0) return

      for (let i = 0; i < 6; i++) {
        this.styles.push(
                {//border : 'solid green',
                  opacity : Number((i * .166).toFixed(1))+ .2,
                  position : 'absolute',
                  top : i * 11,
                  left:i*17,
                  width : i*15 + '%',
                  // height : 'this.clientWidth * .7',
                  zIndex : i,
                  fontSize : '200%',
                  info : i===5,
                  transition : 'height .5s .2s, width .5s .2s, top .5s .2s, left .5s .2s, opacity .5s 0s',
                }
        )
      }
    }

    // Load images array with images from specials folder
    importAll = (r)=>{
      return r.keys().map(r);
    }

  render(){

  const images = this.images


      return(
          <div  style = {component} onClick={this.shiftStyles}>

              <Prod  item = {0} image = {images[0]} style = {this.styles[0]}/>
              <Prod  item = {1} image = {images[1]} style = {this.styles[1]}/>
              <Prod  item = {2} image = {images[2]} style = {this.styles[2]}/>
              <Prod  item = {3} image = {images[3]} style = {this.styles[3]}/>
              <Prod  item = {4} image = {images[4]} style = {this.styles[4]}/>
              <Prod  item = {5} image = {images[5]} style = {this.styles[5]}/>

          </div>
      )
  }
}

const component = {
  //border : 'solid red',
}

