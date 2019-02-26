import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import IconScrollDevice from './IconScrollDevice'
import HoverSeq from '../HoverSeq'

class Text extends Component {

  constructor(props) {
    super(props);
    this.state = {
      one:1,
      carMod:{width : '26vh'}
    }
  }
  render(){
      let pAni = this.props.textAni ? Object.assign({},p,{opacity : 1, fontSize : '18px'}) : p
    return(
          <div style = {text}>
            <p style ={pAni}>
              Das GartenCenterCladow besteht seit Anfang 2012. Im Gebäude der alten Berliner Feuerwehr in der Sakrower Landstraße 5, 14089 Berlin, wo bisher die Firma Frohberg bis zum Ende ihr Geschäft hatte.  
              {<br/>}{<br/>}
              Wir streben danach mit Qualität, Angebot und Flexibilität Ihren Einkauf bei uns zu perfektionieren. 
   
              Unser Team besteht aus:
   
              Rebekka Jahnke, Inhaberin
           
              {<br/>}
            </p>

          </div>
      )
  
  }
}

export default class AboutDevice extends Component {

 state = { 
        carNodes:[] ,
        visible:{opacity:'1'},
        altitude:{top:'-9%'},
        newtest:'one',
        carMod:{width:'26vh', height : '100%'},
        textAni : false,
      }

  //Methods

componentDidMount(){
    this.triggerHoverSeq()
    this.iScroll.moveMe()

}

componentWillUnmount(){
  clearTimeout(this.timeOut)
}


    fillPics(path, total, picNo){ //LOAD STAFF PICS 
        picNo = picNo + 1 || 0 
        if (picNo > total) return []
        let ele = <img alt = {'ele'} style = {img} src = {require('../../img/' + path + '-' + picNo + '.jpg')}/>
        return [].concat(ele).concat(this.fillPics(path, total, picNo))
    }




    animateHoverSeq = (photo,dir) => {
        photo.hoverSeq('fwrd')
    }

    timeOut

    triggerHoverSeq = (i) => {
         i = i||1
                if (i > 3 && !this.state.cancel) {
             this.setState({
                 textAni:true,
             })
            // this.iScroll.animateScroll()

                }
        if (i > 4) {
            return
        }
            this.animateHoverSeq(this['photo'+i], 'fwrd')
            this.timeOut = setTimeout(()=>this.triggerHoverSeq(i+1),500)


    }



  render(){
       //VARIABLES
      const textBoxExpand = {
          transform : 'scale(1)',
          opacity : 1
      }

      let textBoxAni = this.state.textAni ? {...textBox,...textBoxExpand} :           textBox

      return(
      //component div w/ Iscroll on mouseMove + Hide Text(toggleText) on mouseEnter//
        <div onClick = {this.doClick} style = {component}>

            <div style = {textBoxAni}>
                <Text textAni = {this.state.textAni}/>
            </div>

            <div style = {photoRow}>{/*animated photos of staff*/}

                <div style = {photoRowInner1}>

                    <div title = 'photo1'  style = {photo}>
                        <HoverSeq
                            ref = {(ref)=>this.photo1 = ref}
                            startOpacity = '.9'
                            pics ={this.fillPics('staff/seq/phoneAss/phoneAss',6)}/>
                    </div>

                    <div style = {photo}>
                        <HoverSeq
                            ref = {(ref)=>this.photo2 = ref}
                            startOpacity = '.9'
                            pics = {this.fillPics('staff/seq/techHelp/techHelp',7)} />
                    </div>

                </div>

                <div style = {photoRowInner2}>

                    <div style = {photo}>
                        <HoverSeq
                            ref = {(ref)=>this.photo3 = ref}
                            startOpacity = '.9'
                            pics = {this.fillPics('staff/seq/pos/pos',7)} />
                    </div>

                    <div style = {photo}>
                        <HoverSeq
                            ref = {(ref)=>this.photo4 = ref}
                            startOpacity = '.9'
                            pics = {this.fillPics('staff/seq/counter/counter',7)} />
                    </div>

                </div>

            </div>


          <Route render={({history}) => (
                  <div style = {container}
                       onClick={() => {
                         history.push('/products')
                         this.props.addModiStyle('products')
                         this.setState({cancel:true})

                       }}
                  >
                    <IconScrollDevice ref={(ref)=>this.iScroll = ref} carMod = {this.state.carMod}/>
                  </div>
          )} />

        </div>
      
    )
  }
}

//Styles


const container = {
    position : 'absolute',
    bottom : 0,
    //border : 'solid gold 1px',
    width :'100%',
    height : '9%',
    display:'flex',
    justifyContent:'center',
    boxShadow: '0px 0px 17px 7px rgba(244,164,96,.6)',
    //outline : 'solid 1px',
    overflow : 'hidden'
}

const textBox = {
    //border : 'solid green',
    position : 'absolute',
    zIndex : 1,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    transform : 'scale(.01)',
    top : '9.3%',
    margin : '5%',
    transition : '1s',
}

const p = {
    //color : 'red',
    //textShadow: '0px 0px 2px white',
    boxShadow: '0px 0px 7px white',
    textAlign: 'center',
    margin: '5%',
    padding : '7% 2%',
    background : 'rgba(251, 253, 226, .8)',
    transition : '.3s',
    fontSize: '0px',
    letterSpacing : '.1vh',
    lineHeight : '100%',
    fontFamily: '"Source Sans Pro", sans-serif',
    fontWeight : 200

}

const text = {
    //border : 'solid',

    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    background : 'rgba(251, 253, 226, .5)',

}

const component = {
  //border : 'solid 4px',
    position : 'relative',
    borderStyle : 'solid solid solid solid',
    borderWidth : '0px',
    //borderColor :'red',
    height :'100%',
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent:'space-between',
    alignItems :'center'
}

const photoRow = {
    border : 'solid green .5px',
    // display : 'flex',
    // flexDirection : 'column',
    // justifyContent : 'space-around',
    // alignItems : 'flex-start',
    height : '100%',
    width : '100%',
    clipPath: 'inset(0% 0%)',
    //marginBottom : '5%',
}

const photoRowInner1 = {
    //border : 'solid 1px',
    position : 'absolute',
    top : '9%',
    left : '1.5%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'flex-start',
    width : '97%',
    //height : '100%'
}

const photoRowInner2 = {
    //border : 'solid 1px',
    position : 'absolute',
    top : '46.5%',
    left: '1.5%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'flex-start',
    width : '97%',
    // height : '100%'
}

const photo = {

    display : 'inline-flex',
    //border : 'solid 1px',
    width : '95%',
    //height : this.width * 2,
    //margin : '2%',
    }

const img = {
    //border:'solid 1px blue',
    //height:'100%',
    width : '100%',
    boxShadow: '3px 3px 3px goldenrod',
    }









