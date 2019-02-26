import React, { Component } from 'react'

export default class StarReviews extends Component {
  state = {}

  componentDidMount(){
    this.showReviews()
    }

  setFontSize=(node)=> {
    if (node) {
      //t
    }
  }

  showReviews=()=>{
    for(let k=1;k<4;k++){
      let review = this['star'+k]
      setTimeout(()=>review.style.left = '0%',k*200 + 2000)
    }
  }

  render(){

    return(

      <div ref ={(ref)=>this.setFontSize(ref)} className = 'lato' style = {component}>

        <div  style = {textBox}>
          <div ref={(ref)=>{this.star1=ref}} style={text}>
            &#9734;&#9734;&#9734;&#9734; Voted best hardware store {<br/>}- Hardware Review
          </div>
        </div>

        <div style = {textBox}>
          <div ref={(ref)=>{this.star2=ref}}  style={text}>
            &#9734;&#9734;&#9734;&#9734; Number 1 in customer satisfaction {<br/>}- Consumer Rapport
          </div>
        </div>

        <div  style = {textBox}>
          <div ref={(ref)=>{this.star3=ref}} style={text}>
            &#9734;&#9734;&#9734;&#9734; Go to resource for garden support {<br/>}- Green Thumb Quarterly
          </div>
        </div>

      </div>

    )
  }
}


const textBox={
  margin:'2% 1%',
  width:'95%',
  //height:'16%',
  position:'relative',
  //border:'dotted red',
  display:'flex'

}

const text = {
  //border : 'solid 1px',
  margin :'0 2% ',
  position : 'absolute',
  left:'150%',
  transition:'.5s',
  //height:'100%',
  width:'100%',
  background:'rgba(255, 231, 158, .5)',
  // display:'flex',
  // flexDirection: 'column',
  // justifyItems: 'center'
  paddingLeft:'3%'
}

  const component = {
    textShadow : '3px 3px 5px rgba(92,81,,.6)',
      position : 'relative',
      width : '100%',
      height:'43%',
   //border : 'solid blue',


      display:'flex',
      flexDirection:'column',
      justifyContent: 'space-between',
      //alignItems:'center',
  }

