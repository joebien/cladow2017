

import React, { Component } from 'react'
import NavLink from './NavLink'
import Radium, { Style } from 'radium'
import {StyleRoot} from 'radium';


export default class Pics extends Component {



  render(){

    
    return(
    <StyleRoot>
            <div className='pics'>


<div  key={'01'} style={aniPic}><img src = 'http://joebien.github.io/img/baskets.jpg'/></div>

<div key={'02'} style={aniPic}><img src = 'http://joebien.github.io/img/candles.jpg'/></div>
<div key={'03'} style={aniPic}><img src = 'http://joebien.github.io/img/sprinklers.jpg'/></div>
<div key={'04'} style={aniPic}><img src = 'http://joebien.github.io/img/tools.jpg'/></div>

            
            </div>
    </StyleRoot>  
  )
}}


const scaleAni = Radium.keyframes({
  '0%': {width: '23%'},
 '10%': {width: '24%'},
  '100%': {width: '40%'},
  
}, 'pics');

const scaleJ = function(){console.log('scaleJ');}


const scaleAniB = Radium.keyframes({
  
'0%':{'width':'38%'},
  '100%': {width: '23%'},


 
}, 'pics');

const aniPic = {



  border:'4px solid rgba(255, 255, 255, .5)',
  outline: '1px solid rgba(27, 51, 19, .1)',
  outlineOffset: '3px',
  boxShadow: '10 10px 14 #926D14',


  width:'23%',
    animation: 'x .7s ease 0s 1',
    animationName: scaleAniB,
      
  


  ':hover':{
    animation: 'x .7s ease 0s 1',
    animationName: scaleJ,
    width:'40%',
  },

}



