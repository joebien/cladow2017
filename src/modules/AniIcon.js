import React, { Component } from 'react'

export default class AniIcon extends Component {

state = {}

  btnHover = ()=> {
    this.setState({cartBtnHover: !this.state.cartBtnHover})
  }

  render(){

  const aniIconStyle = this.state.cartBtnHover ? aniIconHover : aniIcon

  const {imgSrc, name, handleClick} = this.props
      return(

              <div style = {aniIconStyle}

                   onMouseEnter = {this.btnHover}

                   onMouseLeave = {this.btnHover}

                   onClick = {() => handleClick(name)} >

                <img alt = {'icon'} src = {imgSrc} style = {img}/>

              </div>
      )
  }
}
//Styles

  const aniIcon = {
      height :'100%',
      display :'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      //border:'solid green 1px',
      marginRight:'.2%',
      marginLeft:'.2%',
      position:'relative',
      background : '',
      width:'4vw',
      transition: 'all .4s cubic-bezier(.58,-0.01,.12,1.47)',
  }

  const aniIconHover = {
          ...aniIcon,
          ...{background : 'rgba(255, 255, 255, .6)'}
  }

  const img = {
      width:'100%',
  }


   

   

    

  
