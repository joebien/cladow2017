 import React, { Component } from 'react'
 import Arrows from './Arrows.js'

 

 export default class NavArrows extends Component {


    constructor(props) {
      super(props)
      
      // this.blink = this.blink.bind(this)
      this.holdBlink = false

    }

    state ={
        blink : 1,
        opacity : 1,
        rightArrow : 1

      }



    // blink(stateVal,targetVal,steps){
    //
    //   if(this.holdBlink) return //hold new invokations for timeout
    //     this.holdBlink = true
    //     setTimeout(()=>{
    //       this.holdBlink = false
    //       this.setState({blink : 0})}
    //         ,400)
    //
    //   let val1 = this.state[stateVal] // set init values
    //     let val2 = targetVal
    //     let unit = (val2 - val1) / steps
    //     let  operator = {
    //       '>' : (a,b) => a > b,
    //       '<' : (a,b) => a < b
    //     }
    //     let compareVal = operator['<']
    //
    //   const increment = ()=>{ //set state val one unit higher/lower
    //     this.setState({blink:this.state.blink + unit})
    //
    //     if (this.state[stateVal] >= targetVal) {//switch direction at top value
    //
    //       unit = unit * -1
    //       val2 = val1
    //       compareVal = operator['>']
    //
    //       }
    //
    //     if(compareVal(this.state[stateVal], val2)) {//if target not reached - increment
    //         setTimeout(()=>{
    //           increment()
    //         },66)
    //       }
    //   }
    //
    //   increment() // initiate increment
    // }

    muteArrow = (arrow,val)=>{
  //this.setState({rightArrow:0})

  this.setState({[arrow]:val})
}

    render(){


    return(
            <div style = {styles.component}>

                <div style = {{...styles.arrowBoxL,...{opacity:this.props.leftOpacity}}} >

                  <Arrows flip = 'left'/>

                </div>

                <div style = {{...styles.arrowBoxR,...{opacity:this.props.rightOpacity}}}>

                  <Arrows flip = 'right'/>

                </div>


            </div>
          )
        }
  }

//styles

 const styles = {

     arrowBoxL : {

         //border : 'solid blue',
         position : 'relative',
         opacity : .4,
         margin : '.15% 18px',
         zIndex : 3,
     },

     img : {
         border : 'solid  green 1px',

        width : '100%',
        height : '100%'},

     arrow : {
         name : 'arrow',
         height: '100%',
         // transition: '.4s',
         // transitionTimingFunction : 'ease'
     },

     svgArrow : {
         opacity : .4
     },

     component : {
         position : 'relative',
         //border : 'solid red',
         width : '99%',
         height : '100%',
         display : 'flex',
         flexDirection : 'row',
         justifyContent : 'space-between',
         alignItems : 'center'
     },

     arrowBoxR : {
         //border : 'solid blue',
         position : 'relative',
         opacity : .4,
         //margin : '.15% 0',
         zIndex : 1,
         display : 'flex',
         flexDirection : 'column',
         justifyContent : 'space-around'
     },



     }

