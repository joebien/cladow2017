import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class BigMapBtn extends Component{

  state = {}

 

  btnHover = (node)=>{
    if(node){

      node.onclick = ()=>{
      window.location.href = "https://www.google.com/maps/place/52%C2%B027'09.4%22N+13%C2%B008'31.7%22E/@52.4526,13.1399534,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d52.4526!4d13.1421474"}

      node.onmouseenter = ()=>{
      this.setState({hover : true})}
  
      node.onmouseleave = ()=>{
      this.setState({hover : false})}
  
    }
  }

  render(){

    let buttonHover = this.state.hover ? {background : 'white', color : 'dodgerblue'} : {}
  
  return(
    <button ref = {(ref)=>this.btnHover(ref)}style = {Object.assign({},button,buttonHover)} 
    
    >Go To Google Map
    </button>
  )
  }
}

class Pointer extends Component{
  render(){
    return(
      <div style ={pointer}>
      Cladow
        <img  style = {pointerInner} alt = {'test'} src = {require('../img/pointer/wBarrow.svg')}/>
      </div>
      )
  }
}

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 52.4520111, lng: 13.1419474},
    zoom: 16
  };

  render() {

  return (
      <div style = {component}>
      
        <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyC0-_oPbC6h-h8GWF-__KPnEmTih5t8lSs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
       <BigMapBtn/>
         <Pointer lat={52.4526000}lng={13.1421474}/>
       
        </GoogleMapReact>
      </div>
    )
  }
}

const button = {
  background : 'lightcyan',
  transition : '.5s'
}

const component = {
  width : '100%',
  height : '100%'
}

const pointer = {
  color:'limegreen',
  display : 'flex',
  flexDirection : 'row',
  alignItems : 'center',
  //border : 'solid 1px',
  height : '5vh',
    width: '21vw'
}

const pointerInner = {
    //border : 'solid red 1px',
   width : '6vw',
    padding:'3%'


}