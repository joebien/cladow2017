import React, { Component } from 'react'
import ExternalText  from './ExternalText.js'



export default class SlideOut extends Component {

  state ={
    info:false,
    text:{heading:'',text:''}
  }

  componentDidMount(){
    let newText = this.childComp.getText()
    this.setState({text:newText})
  }

  setWidth=(node)=>{
  if(node) node.style.width = node.offsetHeight * 2 +'px'
  }


  setInfo = (close)=>{
    if (close ==='toggle'){this.setState({info:!this.state.info})}else if
    (close === 'close') {this.setState({info:false})}  else if
    (close === 'open') {this.setState({info:true})}


  }

    render(){

      const infoToggle = this.props.direction === 'right' ?  this.state.info ? infoOpen : infoClosed : this.state.info ? infoOpenL : infoClosedL

      const textStyle = this.props.direction === 'right'?
              {...text,...{left:0}} : {...text,...{right:0}}

        return(
                <div style={component}>

                  <div style = {infoToggle}>

                    <div ref={(ref)=>this.setWidth(ref)} style = {textStyle} title="infotDT" >

                      <div style={heading}>{this.state.text.heading}</div>
                      <div style={body}>{this.state.text.text}</div>

                    </div>

                  </div>

                  <ExternalText testFunc={this.testFunc} {...this.props} ref={(ref)=>this.childComp = ref} />

                </div>
        )
    }
}

const heading={
  fontSize:'150%',
  fontWeight:'medium',
  margin:'2%',
  textShadow: '2px 2px 2px gray',
}

const body = {
  border:'#24762C solid 1px',
  height:'90%',
  letterSpacing:'.5px',
  lineHeight:'150%',
  fontWeight:'light',
  margin:'0 2% 3%',
  display :'flex',
  alignItems:'center',
  padding:'1%',
  overflowY:'auto',
  fontSize:'1.2vw',

}

const text = {
  //textAlign: 'center',
  //border:'solid green 1px',
  //width : set by setWidth method,
  height: '100%',
  background: '#FFF3C6',
  position : 'absolute',
  display:'flex',
  flexDirection:'column',
  //left : '26px',
  //zIndex:3
}

const component = {
   //border : 'solid teal 3px',
  width : '100%',
  height : '100%',
  position : 'absolute',
  //zIndex : 3,
  left:'0%',

}

const infoOpen = {
  position:'absolute',
  left:'101%',
  //border:'solid white 3px ',
  height : '100%',
  width : '260%',
  clipPath: 'inset(0)',
  transition : '1s .1s',
  zIndex:10
}

const infoClosed = {

  position:'absolute',
  left:'100%',
//border:'solid ',
  height : '100%',
  width : '0%',
  clipPath: 'inset(0)',
  //zIndex:3
}

const infoOpenL = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'flex-end',
  position:'absolute',
  right:'100%',
  //border:'solid red',
  height : '100%',
  width : '260%',
  clipPath: 'inset(0)',
  transition : '1s .5s',
  zIndex:3
}

const infoClosedL = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'flex-end',
  position:'absolute',
  right:'100%',
  //border:'solid red',
  height : '100%',
  width : '0%',
  clipPath: 'inset(0)',
}
