import React, { Component } from 'react'
import {Route,} from 'react-router-dom'

import HomeDevice from '../deviceModules/HomeDevice'
import AboutDevice from '../deviceModules/AboutDevice'
import ProductsDevice from '../deviceModules/ProductsDevice'
import SpecialsDevice from '../deviceModules/SpecialsDevice'
import ContactDevice from '../deviceModules/ContactDevice'
import NextButton from '../deviceModules/NextButton'





export default class Main extends Component {

  static defaultProps = {cRoute:'home'}

  routes = ['home','about','products','specials','contact']

componentWillReceiveProps(nextProps){

  if(this.props.cRoute!==nextProps.cRoute) {


    let newRoute = (this.routes.findIndex((r) => {

      return r === nextProps.cRoute}) + 1)%5

    this.setState({
      routeNo: newRoute
    })
  }
}
    constructor(props) {

      super(props)
      this.state = {
       routeNo : 0
      }  
    }

  render(){
    // let styleChange = this.props.modiStyle.borderColor ? {borderColor:this.props.modiStyle.borderColor} : {}

    return(


        <div style = {component}>

          <div style = {next}>

            <Route render={({history}) => (

               <div onClick={

                 ()=> {
                   let nextRouteNo = (this.state.routeNo + 1) %5
                   this.setState({routeNo:nextRouteNo})
                   this.props.addModiStyle(this.routes[this.state.routeNo])
                   history.push('/' + this.routes[this.state.routeNo])
                 }

               }>
                 <NextButton/>

                </div>

            )}/>

          </div>

          <div style = {innerBox}>
            <Route exact path="/" component={HomeDevice}/>
            <Route path="/home" component={HomeDevice}/>
            <Route path="/about" component={()=>(<AboutDevice {...this.props}/>)}/>
            <Route path="/products" component={()=>(<ProductsDevice {...this.props} />)}/>
            <Route path="/specials" component={SpecialsDevice}/>
            <Route path="/contact" component={ ()=>(<ContactDevice/>)}/>
          </div>

        </div>
    )
  }
}

const next = {
  position : 'absolute',
  zIndex : 33,
  right:'0%',
  top:'38%'
}

const innerBox = {
  //border : 'green solid 1px',
  height:'100%',
  width:'99%',
}

const component = {
  position : 'relative',
  display:'flex',
  justifyContent: 'center',
  alignItems:'center',
  flexDirection: 'column',
  // boxSizing: 'border-box',
  // borderStyle: 'solid solid solid solid ',
  //
  //
  //   borderWidth: '2vw',

//border : 'solid red 1px',

  //background: 'rgba(249, 225, 141, .9)',
  
  height:'100%',
  width:'99%',


}