import React, { Component } from 'react'
import SpecialText from '../SpecialText.js'



export default class Prod extends Component {

    state = {info:false}

    componentWillReceiveProps(){
        this.setState({info:false})
       setTimeout(this.setInfo,200)
    }

    setInfo =()=>{

        this.setState({info:true})
    }

    render(){

       const infoToggle = this.state.info ?  infoOpen : infoClosed



        return(
            <div style = {{...this.props.style,...{color:this.props.color},...component}} >
                <img style = {img} src ={this.props.image} alt = {this.props.image}/>

                <div style={clipBox}>
                    <div style = {infoToggle}>

                        <SpecialText item = {this.props.item} info={this.props.style.info}/>

                    </div>
                </div>

            </div>
        )
    }
}

const component = {
    //border : 'solid teal 1px',

}

const clipBox = {
  //border:'solid green',
  height : '20vh',
  position : 'relative'

}

const infoOpen = {

    zIndex : '-1',
    position : 'absolute',
    top : 0,
    transition : '.7s'

}

const infoClosed = {
  zIndex : '-1',
  position : 'absolute',
  top : '-100%',


}

const img ={
  border : 'solid teal 1px',
    width : '100%',
  //boxShadow: '-5px 5px 10px rgba(0, 0, 0, 0.2)'
}