import React, { Component } from 'react'

import Buckets from '../Buckets'





export default class HomeDevice extends Component {
state = {}
componentDidMount(){


}

  render(){

    return(
      <div style = {component}>

        <div style = {textBox}>
          <div style={title}>
            <h2 style = {h2} >Heeerzlich-Willkommen !</h2>
          </div>
          <div style = {text}>
            <div> Wir, das GartenCenterCladow-Team,
              begrüßen Sie recht herzlich.
                {<br/>}{<br/>}
              Viele Angebote:

              Ob Häcksler, Vertikutierer, Rasenmäher oder Zubehör für Ihren Garten. Bei uns finden Sie genau das richtige!


              Hat Ihr Rasenmäher eine Inspektion nötig?
                {<br/>}{<br/>}
              Wir bieten Ihnen eine Inspektion beim

              Elektro-Rasenmäher schon ab 34,- €

              Benzin-Rasenmäher ab 49,- €

              Sofern sie einen Transport im Anspruch nehmen möchten ist dies ab einen Pauschalpreis von 10,- € möglich.
                {<br/>}
            </div>
          </div>
        </div>

        <div style = {graphic}>
          <Buckets/>

        </div>

      </div>
    )
  }
}



  const component = {
    position : 'relative',
    width : '100%',
    height : '100%',
    lineHeight : '130%',
    borderStyle:'solid solid solid solid',
    borderWidth:'3px',
    borderColor :'rgba(255, 255, 255, .3)',
    display:'flex',
    flexDirection:'column',
    boxSizing: 'border-box',
    // justifyContent: 'flex-start',
    // alignItems:'center',

      background : 'rgba(218,165,32,.4)'
  }

  const textBox = {
//border : 'solid',
      width : '100%',
    height : '87%',
    position : 'absolute',
    zIndex : '3',
    display :'flex',
    flexDirection : 'column',
    justifyContent : 'space-around',
    alignItems : 'center'
  }

  const text ={

    //border :'solid teal',
    //marginTop:'17%',
    background : 'rgba(255, 252, 202, .4)',
    marginRight : '1%',
    width : '75%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    padding:'2%',
    fontSize: '4vmin',
      fontFamily: ' "Lato", sans-serif',
      //fontFamily: '"Source Sans Pro", sans-serif'
}
  
  const graphic = {
    clipPath: 'inset(0px 63% 0px 6%)',
    zIndex :'0',
    width : '320%',
    //height: '105%',
    left : -69,
    bottom : '-4%',
    //border : 'dotted red 1px',
    position : 'absolute'
  }

  const title = {

    //border : 'solid green 1px',
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    position:'relative',
    zIndex:'10'
  }

  const h2 = {
  //width : '100%',
    //border :'dotted teal',
    fontSize : '3.5vh',
    padding : ' 0px',
    //margin : ' 10% 19%',
    letterSpacing : '2px',
    transform : 'scale(1,1.5)'

  }

