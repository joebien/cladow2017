import React, { Component } from 'react'

export default class Footer extends Component {

  state={}

  render(){

    const compstyle = this.props.headFoot.footBorderColor ? {...footer, ...{borderWidth: '0px 3px 3px',borderColor:this.props.headFoot.footBorderColor}} : footer

    const blocRmod = {...blocR,...this.props.blocRtOp}

    return(

        <div style = {compstyle} >

            <span className='footerLink' style = {blocL}>
                <h2 style={h2}>Vormittags</h2>
                  <span  style = {span}>
                    Mo - Fr 9:00 - 13:00 Uhr
                    Samstag 9:00 - 14:00 Uhr
                  </span>
            </span>

            <span style = {blocRmod}>
                <h2 style = {h2}>Nachmittags</h2>
                <span style = {span}>
                  Mo - Fr 15:00 - 18:30 Uhr
                </span>
            </span>

        </div>

    )
  }

 }
//STYLES
  const blocL = {
    margin : '0 2%',
    fontSize: '3.9vmin',
    //border : 'solid 1px',
    //padding : '1%'
  }

  const blocR = {
    textAlign : 'right',
   margin : '0 2%',
    fontSize: '3.9vmin',
    //border : 'solid 1px',
    //padding : '1%'
}

  const h2 = {
    fontSize: '3.9vmin',
    marginBottom : '0px'
  }

  const span = {
    fontSize: '80%',
    whiteSpace: 'nowrap'
  }

  const footer = {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle:  'none solid solid solid',
    borderColor: '#efc660',
    
    borderWidth: '0px 1px 1px',
    //fontSize: '1vw',
    background: 'rgba(249, 225, 158, .4)',
    height: '100%',
    // width : '100%'

  }


