    import React, { Component } from 'react'
 
export default class ShowCartBtn extends Component {
  state = {}

    //set state.buttonOver which sets btnHover to new style object to
    //merge with button style object popping cart btn out with shadow
    //and new border color
    btnHover = (mouse)=>{
        if(mouse === 'enter') {
           if (!this.state.buttonOver)this.setState({buttonOver:true})}
        if(mouse === 'leave') {
           if (this.state.buttonOver)this.setState({buttonOver:false})}
    }

	render(){
	  let btnHover = this.state.buttonOver ? {
	      border : 'solid green .5px',
	      boxShadow :'-6px 4px 6px DarkGoldenrod',
	     
	    } : {} 

    return(
      <div style = {component}>

              <div style = {hitArea}
                   onClick = {()=>this.props.setShowCart()}
                   onMouseEnter = {()=>this.btnHover('enter')}
                   onMouseLeave = {()=>this.btnHover('leave')}
              >
              </div>

              <img  alt = {'shc'} key = {1}
                    style = {{...button,...btnHover}}
                    //src = {'https://joebien.github.io/public/img/cart.svg'}
                      src={this.props.toolSvgs.cart}
              />

      </div>
    )
  }
}

    const component = {
    	display : 'flex',
    	flexDirection : 'row',
    	justifyContent : 'flex-end',
    	alignItems : 'flex-start',
    	position : 'relative',
    	//border : 'solid red',
    	width : '100%',
    	height : '100%'
    }	

    const hitArea = {
      width : '100%',
      height : '100%',
      //border : 'solid',
      position : 'absolute',
      zIndex : '5'
  	}

    const button = {
      border : 'solid DarkGoldenrod .5px',
        //margin : '2%',
      width : '16%',
      height : 'vw1.8',
      boxShadow :'-3px 3px 5px DarkGoldenrod',
    }
