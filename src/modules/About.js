import React, { Component } from 'react'
import IconScroll from './IconScroll'
import HoverSeq from './HoverSeq'

class Text extends Component {

    state = {
      one: 1,
      carMod: {width: '26vh'}
    }

  render(){
    return(
          <div style = {{...text,...this.props.visible}}>
            <p className = 'lato' style ={p}>
              The GartenCenterCladow has been serving the community since 2012. In the  old Berlin fire brigade building in the Sakrower Landstraße 5, 14089 Berlin.


              {<br/>}{<br/>}
              Our team is committed to providing quality expert service.

              Our team consists of the best sales, technical support, customer support and product expert staff.


              {<br/>}
            </p>

          </div>
      )
  }
}

export default class About extends Component {

  //4 video clips representing staff that animate on mouse over and slideout an info text box on click

 state = {
        carNodes:[] ,
        visible:{opacity:1},
        altitude:{top:'-9%'},
        newtest:'one',
        carMod:{width:'26vh', height : '100%'},
        mounted:true
      }

    componentDidMount(){
      this.setState({mounted:true})
    }

    componentWillUnmount(){
      this.setState({mounted:false})
    }

  //Methods

  //Loads required jpgs for each hoverSeq component
    fillPics(path, total, picNo){
        picNo = picNo + 1 || 0 
        if (picNo > total) return []
        let ele = <img alt = {'ele'} style = {img} src = {require('../img/' +           path + '-' + picNo + '.jpg')}/>
        return [].concat(ele).concat(this.fillPics(path, total, picNo))
    }

  //Hide and show main text block on mouseOver
    toggle=(e,mouse)=>{
        if(mouse==='click'){if(!this.photoRowInner.contains(e.target))this.closeAllSLideOuts()}
        if(mouse==='enter'){ if(this.state.visible.opacity === 1) {this.setState({visible: {opacity: 0}})}
            this.sequenceOpacity()}
        if(mouse==='leave'){ if(this.state.visible.opacity === 0) {this.setState({visible: {opacity: 1}})}}
     }

  //Close any info text box slide outs that are open on click in HoverSeq
    closeAllSLideOuts=()=>{
      for(let k=1;k<5;k++){
      this['h'+k].slide.setInfo('close')
      }
    }

  //Turn up opacity of each HoverSeq left to right on mouseOver
    sequenceOpacity=()=>{
      if(this.state.mounted) {
        for (let k = 1; k < 5; k++) {
          let node = 'h' + k
          setTimeout(() => {if(this[node]!==null) {this[node].setOpacity(1)}}, k * 200)
        }
      }
    }

    render(){

        return  (
                  <div
                          style = {component} className = 'lato'
                          onClick={(e)=>this.toggle(e,'click')}
                          onMouseEnter={(e)=>this.toggle(e,'enter')}
                          onMouseLeave={(e)=>this.toggle(e,'leave')}
                  >

                    <div style={backGround}/>
                      <div style = {header}>We are now the GartenCenterCladow team
                         </div>

                      <div style = {photoRow}>{/*animated photos of staff*/}

                          <div style = {textBox}>
                            <Text visible = {this.state.visible}/>
                          </div>

                          <div ref={(ref=>this.photoRowInner=ref)} className = 'lato' style = {photoRowInner} >

                            <div  style={photoBox}>
                              <div style = {photo}>
                                <HoverSeq ref={(ref)=>this.h1=ref}
                                          pics = {this.fillPics('staff/seq/phoneAss/phoneAss',6)}
                                          number = '1'
                                          direction = 'right'
                                          text='10'
                                          closeAllSLideOuts = {this.closeAllSLideOuts}
                                />
                              </div>
                              Customer Service
                            </div>

                             <div style={photoBox}>
                              <div style = {photo}>
                                <HoverSeq ref={(ref)=>this.h2=ref}
                                          pics = {this.fillPics('staff/seq/techHelp/techHelp',7)}
                                          direction = 'right'
                                          text='11'
                                          closeAllSLideOuts = {this.closeAllSLideOuts}
                                />
                              </div>
                               Techical Expertise
                            </div>

                            <div style={photoBox}>
                              <div style = {photo}>
                                <HoverSeq ref={(ref)=>this.h3=ref}
                                          pics = {this.fillPics('staff/seq/pos/pos',7)}
                                          direction = 'left'
                                          text='12'
                                          closeAllSLideOuts = {this.closeAllSLideOuts}
                                />
                              </div>
                            Retail Sales
                            </div>

                            <div style={photoBox}>
                              <div style = {photo}>
                                <HoverSeq ref={(ref)=>this.h4=ref}
                                          pics = {this.fillPics('staff/seq/counter/counter',7)}
                                          direction = 'left'
                                          text='13'
                                          closeAllSLideOuts = {this.closeAllSLideOuts}
                                />
                              </div>
                            Product Knowledge
                            </div>
                          </div>

                      </div>

                      <div style = {container}> {/* animated graphic at bottom of screen */}
                        <IconScroll ref='iScroll' carMod = {this.state.carMod}/>
                      </div>

                  </div>
      )
  }
}

//Styles

const header = {
  marginTop : '1%',
  fontSize : '4vw',
  textShadow : '3px 3px 4px #87751A',
  fontWeight : 300,
  letterSpacing : '7px',
  whiteSpace : 'nowrap',
  opacity : '.9-'

}

const component = {
  position : 'relative',
  height :'100%',
  width : '100%',
  display : 'flex',
  flexDirection : 'column',
  justifyContent:'space-around',
  alignItems :'center'
}

const backGround = {
  width : '99.9%',
  height:'100.5%',
  borderStyle:'none solid solid solid',
  borderWidth:'1px',
  borderColor :'rgba(255, 255, 255, .6)',
  position : 'absolute',
  zIndex:-1
}

const textBox = {
  position:'absolute',
  zIndex:2,
  width:'100%',
  left:0,
}

const photoBox = {
    //border:'solid orange',
    width : '30vh',
    height:'101%',
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    justifyContent:'space-around'
}

const p = {
    textShadow: '0px 0px 2px white',
    boxShadow: '0px 0px 7px white',
    textAlign: 'center',
    margin: '0 5%',
    background : 'rgba(251, 253, 226, .8)',
    letterSpacing : '.2vh',
    lineHeight : '150%',
    padding : '1%',
}

const photoRow = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    height : '22vw',
    width : '92%',
    //clipPath: 'inset(0% 0%)',
    border : 'solid green .5px',
    marginBottom : '5%',
}

const photoRowInner = {
    border : 'solid 1px',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'flex-start',
    width : '91%',
    height : '90%'
}

    const photo = {
      margin : '2.5%',
      height:'85%'
}

    const img = {
    width : '100%',
    boxShadow: '3px 3px 3px goldenrod'
}

    const text = {
    fontSize: '1.5vw',
    width:'100%',
    height : '60%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    background : 'rgba(251, 253, 226, .5)'
}

    const container = {
    position : 'absolute',
    bottom : 0,
    width :'100%',
    height : '11%',
    display:'flex',
    justifyContent:'center'
}












