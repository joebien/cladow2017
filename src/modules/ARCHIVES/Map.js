import React, { Component } from 'react'

export default class Map extends Component {
  

  render() {
    return (
     <Map google={this.props.google} zoom={14}visible={true}>

  

</Map>
      
    )
  }
}