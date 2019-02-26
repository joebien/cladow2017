

import React, { Component } from 'react'
import Gmap from '../Gmap'
import Email from '../Email'
import Phone from '../Phone'

export default class ContactDevice extends Component {

 constructor(props) {
      super(props);
      this.state = { 
        address:'mailto:info@GartenCenterCladow.de?Subject=Cladow%20question',
        test:'poptart'        
      }
 }

  render(){
    return(
        <div style = {compoBox}>
          <div style = {component}>

            <div style = {leftBox}>


              <div style = {text}>
                <h1 style = {h1}>Unsere Öffnungszeiten</h1>
                <img  style = {wBarrow} alt = {'test'} src = {require('../../img/pointer/wBarrow.svg')}/>
                <p style = {p}>
                
                  Das GartenCenterCladow finden Sie im Kladower Dorfkern, an der Sakrower Landstraße 5, in 14089 Berlin.
                  Unser hauseigener Parkplatz steht zu Ihrer Verfügung.
                  </p>

                <p style = {p}>
                  Kontakt Sie erreichen uns während der Geschäftszeiten {<br/>}Telefonisch unter
                  030 - 365 59 64
                  Oder senden ein Fax an
                  030 - 365 50 45{<br/>}

                   
                  Gerne bearbeiten wir auch Ihre Anfragen, Wünsche und Anregungen per Mail via
                  
                  <br />
                  </p>
              </div>

              <div style = {phonemail}>
                <div style = {email}>
                  <Email address = {this.state.address}/>
                </div>

                <div style = {phone}>
                  <Phone/>
                </div>
              </div>

              <div style = {text}><p style = {p}>

                Oder nutzen Sie einfach das nachfolgende Kontaktformular.
                <br />
                Wir freuen uns über Ihre Nachricht.
                </p>
              </div>

            </div>

            <div style = {rightBox}>
              <Gmap />
            </div>

          </div>
        </div>

    )
  }
}

const img = {
 //border : 'solid',
  width : '100%'
}

const phonemail ={

    width : '65%',
    height : '25%',
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-around',
    //border : 'dotted teal'
}

const email = {
    //border : 'solid purple 1px',
    width : '30%',
    height : '100%',
}

const phone = {
  //  border : 'solid purple 1px',
    width : '30%',
    height : '100%'
}

const leftBox = {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    //border:'solid pink',
    width:'100%',
    height: '75%'
}

const compoBox ={
    height:'100%',
   width:'100%',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    //border:'solid red'

}

const component = {
    position : 'relative',
    borderStyle : 'solid solid solid solid',
    borderWidth : '0px',
    borderColor :'black',
    height :'100%',
    width : '95%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    background : 'rgba(239,202,100,.4)'
}


const text = {
    //border:'solid green',
    fontSize: '2vh',
    position:'relative',
    //width:'70%',
    margin:'0%',
    display:'flex',
    flexDirection:'column',

    justifyContent:'flex-start',
    alignItems:'center',


    //padding:'0% 5% 0%',

}

const h1 = {
    //border:'solid',
  margin: '0 0 2% 0'
}

const wBarrow = {
   width : '11%',
   border : 'solid 1px',
   marginBottom : '2%'
}

const rightBox = {
  //border:'solid red',
  width:'90%',
    height : '25%'
}

const p = {
 //border : 'solid purple',
  textAlign : 'center',
  margin : '.5%'
}



















