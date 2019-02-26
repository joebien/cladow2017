

import React, { Component } from 'react'


import Gmap from './Gmap'
import Email from './Email'

export default class Contact extends Component {

 constructor(props) {
      super(props);
      this.state = { 
        address:'mailto:info@GartenCenterCladow.de?Subject=Cladow%20question',
        test:'poptart'        
      }
 }
   
  render(){ 

    return(
      <div style = {component}>

        <div style = {leftBox}>

<div >

      

</div>
            <div style = {text}>

              <h1 style = {h1}>Unsere Öffnungszeiten</h1>
              <img  style = {wBarrow} alt = {'test'} src = {require('../img/pointer/wBarrow.svg')}/>
                <p style = {p}>
                
                  Das GartenCenterCladow finden Sie im Kladower Dorfkern, an der Sakrower Landstraße 5, in 14089 Berlin.
                  Unser hauseigener Parkplatz steht zu Ihrer Verfügung.
                  </p>
                 
                <p style = {Object.assign({}, yellowBox, p)}>
                  
                  Vormittags
                  Nachmittags
                  Mo - Fr
                  9:00 - 13:00 Uhr
                  15:00 - 18:30 Uhr {<br/>}
                  Samstag 9:00 - 14:00 Uhr {<br/>} 
                           
                  </p>

                <p style = {p}>
                  Kontakt Sie erreichen uns während der Geschäftszeiten {<br/>}Telefonisch unter
                  030 - 365 59 64
                  Oder senden ein Fax an
                  030 - 365 50 45{<br/>}

                   
                  Gerne bearbeiten wir auch Ihre Anfragen, Wünsche und Anregungen per Mail via
                  
                  <br />
                  </p>
     
                <p style = {p}>
                  
                  Oder nutzen Sie einfach das nachfolgende Kontaktformular.
                  <br />
                  Wir freuen uns über Ihre Nachricht.
                  </p>
            </div>

            <div style = {email}>
              <Email address = {this.state.address}/>
            </div> 

        </div>
        <div style = {rightBox}>
          <Gmap />
        </div>

      </div>
    )
  }
}

const h1 = {
  marginBottom : '2%'
}
const wBarrow = {
   width : '17%',
   border : 'solid 1px',
   marginBottom : '2%'
}

const leftBox = {
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
  border:'solid',
  width:'50%'
}
const rightBox = {
  border:'solid',
  width:'50%'
}

const email = {
  
  //border : 'solid purple',
   width : '30%',
   height : '10%'
  
 }


const p = {
 // border : 'solid purple',
  textAlign : 'center',
  margin : '.5%'
}

  
const yellowBox = {  
  background:'rgba(249, 225, 158, .2)',
  outline: '2px solid rgba(249, 225, 158, .3)',
  outlineOffset: '4px',
}

const component = {
  position : 'relative',
  borderStyle : 'solid solid solid solid',
  borderWidth : '1px',
  borderColor :'black',
  height :'100%',
  display : 'flex',
  flexDirection : 'row'
}

const text = {
  //border:'solid',
    fontSize: '2vmin',
  position:'relative',
  //width:'70%',
  margin:'.5%',
  display:'flex',
  flexDirection:'column',
  
  justifyContent:'flex-start',
  alignItems:'center',
  
  
  //padding:'0% 5% 0%',
  
}
















