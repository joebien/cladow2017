import React, { Component } from 'react'

export default class Map extends Component {
  fetchPlaces (mapProps, map) {
    const {google} = this.props
    const service = new google.maps.places.PlacesService(map);
    // ...
  }

  render() {
    return (
      <Map google={this.props.google}>
      </Map>
    )
  }
}