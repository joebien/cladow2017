import React, { Component } from 'react'

export default class FooterDevice extends Component {

    render(){
        const compstyle = {...footer, ...this.props.headFoot}
        return(

            <div style = {compstyle} >


                <span style = {blocL}>
            <h2 style={h2}>Vormittags</h2>
              <span style = {span}>
                Mo - Fr 9:00 - 13:00 Uhr{<br/>}
                Samstag 9:00 - 14:00 Uhr
              </span>
          </span>

                <span style = {blocR}>
            <h2 style = {h2}>Nachmittags</h2>
            <span style = {span}>
              Mo - Fr {<br/>}
                15:00 - 18:30 Uhr
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
    //marginTop: '.05%',
    //padding:'1%',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'flex-start',

    //borderColor: 'green',


    fontSize: '1vw',
  background: 'rgba(249, 225, 158, .3)',
    height: '100%',
    width : '100%'

}


