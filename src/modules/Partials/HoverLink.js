import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HoverLInk extends Component {

  state={focus:false}

  componentDidMount(){
    if(this.props.link === 'Home') {
      this.setState({focus:true})
      this.setState({home:true})
    }
  }

  componentWillReceiveProps(){
    this.setState({focus:this.props.focus})
  }

  focus=(node)=>{
    if(node) {
      node.onclick =()=> {
        setTimeout(()=>this.setState({focus:true}),100 )
        if(this.props.link === 'Home') this.setState({home:true})
      }
    }
  }

  render() {
    const tabFocus = this.props.link === 'Home'? tabFocusH : tabFocus1
    const tabStyle = this.props.link === 'Specials' ? this.state.focus ? {...tab,...tabFocusSpecials}: tab : this.state.focus ? {...tab,...tabFocus}: tab

    const route = '/'+this.props.link

    const tabHitStyle = this.state.home? {...tabHit,...{zIndex:0}}: tabHit

    const title = this.props.title ? this.props.title : this.props.link

    return (

            <div ref={(ref)=>this.focus(ref)}
                 onClick={() => {this.props.addModiStyle(this.props.link)}}
                 style={tabHitStyle} className={'tabHit'}>

              <div style = {stableFontWeight}>
                {title}</div>

              <div className={'tab'} style={tabStyle}>
                <Link to = {route}>
                  {title}
                </Link>

              </div>

            </div>

    )
  }}

  const tabFocus1 = {
    background:'rgba(239, 198, 96, 1)',
  }

  const stableFontWeight = {
    fontWeight:'300',
    opacity:0,
    position:'relative',
    //border:'solid green',
    borderRadius:'5px',
    whiteSpace : 'nowrap',
    padding:'2% 6% 25px',
    bottom:'-150%'
  }

    const tab = {
      padding:'2% 6px 25px',
      //whiteSpace : 'nowrap',
      background:'rgba(85, 72, 51, .05)',
      borderRadius:'5px',
      //position : 'relative'
      zIndex:3,
      //border : 'solid pink'
    }

    const tabFocusH = {
      opacity:0
    }

    const tabFocusSpecials = {
      background:'rgba(19,142,195,.4)',
    }

    const tabHit={
      fontfamily:'inherit',
      //border:'red solid 1px',
      //width:'20%',
      height:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'center',
      clipPath:'inset(0px)',
      position:'relative',
      zIndex:3
    }