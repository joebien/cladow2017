import React, { Component }  from 'react'
import Header from './Partials/Header'
import Main from './Partials/Main'
import Footer from './Partials/Footer'

class App extends Component{

 constructor(props) {
      super(props)

      this.state = {
        styles : {specials : {
          tab: 'rgba(44,85, 50, 0)',
          borderColor: 'rgba(44,85, 50, .7)',
          background : 'rgba(19,142,195,.4)',


        }} ,
        modiStyle : {}
      }

      this.addModiStyle = this.addModiStyle.bind(this)
  }

  addModiStyle(style){console.log('ModiStyle Fired ', style);

    if (style) {
        console.log('done');
      this.setState({modiStyle:Object.assign(this.state.modiStyle, this.state.styles[style])})
    }else{
      this.setState({modiStyle:{}})
    }
  }

  render() {
    return (
      <div style ={bigBox} className="bigBox">
        <div style = {littleBox} className="littleBox">
        APP
          <div style = {bkrOverlay}></div>
          <Header modiStyle = {this.state.modiStyle} addModiStyle = {this.addModiStyle}/>
          <Main modiStyle = {this.state.modiStyle} content = {this.props.children}/>
          <Footer modiStyle = {this.state.modiStyle}/>
        </div>
      </div>
    )
  }
}

export default App


const bigBox = {
}

const littleBox = {
  position : 'relative',
//border : 'solid red 1px'
}

const bkrOverlay = {
  zIndex :'-1',
position :'absolute',
width : '100%',
height : '100%',
background : 'rgba(19,142,195,.2)'
}