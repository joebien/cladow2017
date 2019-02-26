import React, { Component }  from 'react'
import MediaQuery from 'react-responsive'
import Header from './Partials/Header'
import HeaderDevice from './Partials/HeaderDevice'
import Main from './Partials/Main'
import MainDevice from './Partials/MainDevice'
import Footer from './Partials/Footer'
import FooterDevice from './Partials/FooterDevice'
import GoldFlowers from '../img/goldFlowers.jpg'
import GoldFlowersDT from '../img/goldFlowersDT.jpg'
import BlueFlowersDT from '../img/blueFlowersDT.jpg'
import Bluelines from '../img/bluelines.jpg'
import { Link } from 'react-router-dom'

export default class App extends Component{

      state = {
        styles : {specials : {
          tab: 'rgba(44,85, 50, 0)',
          background : 'rgba(19,142,195,.4)',
          headFoot : {
            borderColor :'rgba(249, 231, 183, .2) rgba(249, 231, 183, .2) rgba(19,142,195,.4)',
            footBorderColor : 'rgba(19,142,195,.4)'
          }
        }} ,
        modiStyle : {},
        specialsStyle:false
      }

  // pushContact=(bool)=>{console.log('pushcontact',bool)
  //   if(bool === false){this.main.pushRoute(false)}else{
  //   this.main.pushRoute(true)}
  // }

  addModiStyle = (style)=>{
    if(style === 'Specials' || style ===  'specials') {
      this.setState({specialsStyle:true})}
      else{this.setState({specialsStyle:false})
    }

    this.setState({cRoute:style.toLowerCase()})
  }

  render() {

    this.headFoot = this.state.specialsStyle ?
       this.state.styles.specials.headFoot:
        {}

    this.backGroundSrc = this.state.specialsStyle ? Bluelines : GoldFlowers

    this.DTbackGroundSrc = this.state.specialsStyle ? BlueFlowersDT : GoldFlowersDT

    this.blocRtOp = this.state.specialsStyle ? {opacity:0} : {}

    const littleBoxStyle = this.state.specialsStyle ? {...littleBox, ...littleBoxSpecials}:littleBox
    return (

      <div style = {mother}>
{/*////////////DEVICE//////////////////////////////////////////////////////////////////////////*/}
        <MediaQuery query='(max-width: 361px)'>




                <div style = {componentDevice}>
                  <img style = {backGround} src = {this.backGroundSrc} alt = 'backGround'/>

                  <div style = {headerdevice}> <HeaderDevice headFoot = {this.headFoot} addModiStyle = {this.addModiStyle}/> </div>

                  <div style = {maindevice}>

                    <MainDevice cRoute = {this.state.cRoute}
                                frameAndTabs = {this.frameAndTabs} addModiStyle = {this.addModiStyle}/>
                  </div>

                  <div style = {footerdevice}> <FooterDevice headFoot = {this.headFoot}/> </div>

                </div>


        </MediaQuery>

{/*////////////DESKTOP///////////////////////////////////////////////////////////////*/}

        <MediaQuery query='(min-width: 362px)'>

          <div ref={(ref)=>this.bigBox = ref} style ={bigBox}>
            <img style = {backGround} src = {this.DTbackGroundSrc} alt = 'DTbackGround'/>
            <div style = {littleBoxStyle} >


                <div style = {component}>

                  <div style = {header}> <Header headFoot = {this.headFoot} addModiStyle = {this.addModiStyle} bigBox={this.bigBox}/> </div>


                  <div style = {main} > <Main ref={(ref)=>this.main=ref}/> </div>


                  <div  style = {footer}>
                    <Link className='footerLink' style = {link} to = './Contact'>
                      <Footer blocRtOp = {this.blocRtOp} headFoot = {this.headFoot}/>
                    </Link>
                  </div>
                </div>


            </div>
          </div>

        </MediaQuery>

      </div>
    )
  }
}



//STYLES

const link = {
  textDecoration: 'none',

}

const header = {
  position:'relative',
  height: '21%',
}

const headerdevice = {
        ...header
}

const mother ={
  //clipPath: 'inset(0%)',
  //background : 'green',
  //border : 'solid green',
  height : '100vh',
  width : '100vw',
  //fontFamily: ' "Lato", sans-serif',
}

const backGround = {
  position : 'absolute',
  top: 0,
  zIndex : -1,
  height : '100%',
  width : '100%',
  opacity: 1
}

const component = {
  //border : 'dotted red 2px',
  name:'comp',
  height : '100%',
  width : '100%',
  display : 'flex',
  flexDirection : 'column',
}

const componentDevice = {
        ...component
}

const maindevice = {
    name: 'main',
    marginBottom: '1%',
    height: '75%',
    width: '100%',
    //border : 'dotted green 3px'
}

const main= {
  name : 'main',
  margin : '.2% 0%',
  height : '63.5%',
  width : '100%',
  //border : 'dotted green 3px'
}



const bigBox = {
  overflowX:'hidden',
  border : 'solid black 1px',
  position : 'relative',
  display : 'flex',
  justifyContent : 'space-around',
  alignItems:'center',
  height : '100%',
  width : '100%',
  //padding : '1%',
}

const littleBox = {  
 //border : 'solid pink 2px',
  //position : 'relative',
  display : 'flex',
  alignContent : 'center',
  flexDirection : 'column',
  padding : '1px',
  boxShadow : '10px 10px 14px #926D14',
  height : '95%',
  width : '95%',
}

const littleBoxSpecials ={
  boxShadow : '10px 10px 14px #186469',
}

const footer = {
  position : 'relative',
  height : '15%',
}

const footerdevice ={
        ...footer
}


