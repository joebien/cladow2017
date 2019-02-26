import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Buckets from './Buckets.js'
import Wilkomen from './Wilkomen.js'
import LowerText from './LowerText.js'
import StarReviews from './StarReviews.js'



export default class Home extends Component {
state = {}
componentDidMount(){

//this.props.history.push('/About')
    // if(this.props.location.pathname === '/')window.location.href = "http://localhost:8080/home"
}

pushRoute = ()=>{
  this.setState({redirect:true})
}

// pushContact = () => this.setState({contact:true})

  render(){

    if (this.state.redirect) { return <Redirect push to="/products" /> }

    return(

      <div style = {component} onClick = {()=>this.pushRoute()}>
        <div style={backGround}/>
        <div style = {wilko}><Wilkomen/></div>

        <div style = {textBox}>
          <LowerText/>
        </div>

        <div style={reviews}><StarReviews/></div>

        <div style={graphicClip}>
                <div className='bucketGraphic' style={graphic} >
                  <Buckets/>
                </div>
        </div>

      </div>

    )
  }
}

  const graphicClip = {

    width:'100%',
    height:'200%',
    //border:'dotted green',
    position:'absolute',
    clipPath:'inset(0)'
  }

  const graphic = {
    //display : 'block',
    //clipPath: 'inset(0px 0px 0px 0px)',
    //width : '1650px',
    //border : 'dotted red',
    left : '16px',
    bottom:0,
    position : 'absolute',
    zIndex : 6,

  }

  const reviews ={
    position:'absolute',
    right:'1%',
    top:'14%',
    width:'25%',
    height :'80%',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    zIndex:3
  }

  const component = {
    position : 'relative',
    width : '100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'flex-end',
    alignItems:'center',
  }

  const wilko = {
    position : 'absolute',
    zIndex:3,
    width : '47%',
    height : '25%',
    left : '29%',
    top : '5vw',
  }

  const textBox = {
    height : '90%',
    width : '45%',
    position : 'absolute',
    zIndex : '3',
    left: '30%',
    top : '11vw',
    display:'flex',
    justifyContent:'center'
  }

  const backGround = {
    width : '99.9%',
    height:'100%',
    borderStyle:'solid solid solid solid',
    borderWidth:'0px',
    borderColor :'rgba(255, 255, 255, .6)',
    position : 'absolute',
    zIndex:-1
  }

