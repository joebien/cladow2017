import React, { Component } from 'react'
import SpecialText from '../SpecialText.js'

export default class Carousel extends SpecialText {

  // Variables Component 
    picAspect = .835 //Ratio of picObj height / width
    rolling = false
    specialParams = []
    unit ={}
    
 
    //SHIFT EACH SPECIALPARAMS OBJECTS PIC VALUE TO THE NEXT IMAGE - FIRST OBJECT GETS THE LAST PIC VALUE


 state = {data :''}

  componentDidMount(){
    this.handleOver = function(){
    this.info.addInfo()
    
    }
  }

  aniSpecial = ()=>{
    //abort id already in motion - rolling:true
    if(this.rolling) return
      this.rolling = true
    
    //clone specialParams 
    
      var newParams = this.specialParams.map((obj)=>Object.assign({},obj))

      //shift pic objects up 1 , last one to index 0
      newParams.unshift(newParams.pop())

      //dump shifted pic value backto specialParams
      this.specialParams.forEach((item,key) => {
        item.pic = newParams[key].pic
      })

      //Itterate over specParams animate each param toward ani values with aniPic

      this.specialParams.forEach((item, key) => {
          
        //Set values for first/smallest pic which isn't incrementally animated but changed to target values imediately as it was just moved from last/biggest pic
        if(key === 0){
      
          item.pic.childNodes[0].style.opacity = 0
          item.pic.style.left = item.ani.left.loc + 'vw'
          item.pic.style.width = item.ani.width.loc + 'vw'
          item.pic.style.height = item.ani.width.loc * this.picAspect + 'vw'
          item.pic.style.top = item.ani.top.loc + 'vw'
          item.pic.style.opacity = item.ani.opacity.loc
        }

        //Change zIndex of each pic to target value
        item.pic.style.zIndex = item.zIndex

        //animate each param toward ani values
        this.aniPic(item)

      })

    }

  
    //Animates each parameter one unit
  aniPic = (picObj)=>{
    
      function animate (){

      //Iterate over every param in picObj and animate one unit
        for (let param in picObj.ani){

      //Target = element style value ; width, left or zindex      
          let target = picObj.pic.style[param].slice(-2) === 'vw' ? Number(picObj.pic.style[param].slice(0,-2)) : Number(picObj.pic.style[param])
      
      //EndValue = value style will be animated to that which is stored in the 'ani' property
          let endValue = picObj.ani[param].loc
            
            if ( target < endValue ){
              
              // Increment domNode style parameter one unit
              if (picObj.pic.style[param].slice(-2) === 'vw'){

                  picObj.pic.style[param]  = (Number(picObj.pic.style[param].slice(0,-2))+ picObj.ani[param].unit) + 'vw'
              // Set width to height * this.picAspect
                  picObj.pic.style.height = Number(picObj.pic.style.width.slice(0,-2)) * this.picAspect + 'vw'
                }else //Set transparency
               { 
                picObj.pic.style[param]  = (Number(picObj.pic.style[param])+ picObj.ani[param].unit)
                if (picObj.zIndex === 1) console.log('picObj.pic.style[param] ', param ,picObj.pic)}
            }else {
              clearInterval(animateGo)
              
            }
            if(picObj.zIndex === 5 && target >= endValue) this.rolling = false
        }       
      }
      
      let animateGo = setInterval(animate.bind(this),20) 
    }

    //Assign specialParams object parameter values - then apply parameters to DOM element
  placeSpecial(pic,key,total){
//original max=29 min=5

    let steps = 30   
    const max = this.props.max //max width
    const min = this.props.min //min width
    let compWidth
    let compHeight
    //Get width and height of component
    if (pic) {compWidth = pic.parentElement.clientWidth

              compHeight = pic.parentElement.clientHeight

    }

      //Calculate dimensions and location of each pic//

    if (pic != null){

      pic.style.position = 'absolute'

      //Calulate placement paramaters
        
      let width = (((max  - min)/5)*key + min) 

        //let left = Math.pow(key/total,2)*compWidth
      let left = Math.pow(key/total,2)* 18
      let top = Math.pow(key/total,6)*compHeight
      let opacity =  (key +1)/total 
       
      //Assign parameters to dom element    
      pic.style.top = top + 'vw'
      pic.style.width = width +'vw'
      //pic.style.height = height + 'vh'
      pic.style.left = left + 'vw'
      pic.style.zIndex = key
      pic.style.opacity = opacity
     
      //Assign parameters to specialParams object
      let prev = {}
      
      // define previous ani
        if (this.specialParams.length>0) {
          prev = this.specialParams.slice(-1)[0].ani
        }
        
      //Load specialParams with picObjects
        this.specialParams.push({
          pic : pic,  
          zIndex : key,
          ani : {
            width:{loc:width,unit:0, getUnit:function(){getUnit(this,prev.width)}},
            left:{loc:left,unit:0, getUnit:function(){getUnit(this,prev.left)}},
            top:{loc:top, unit:0, getUnit:function(){getUnit(this,prev.top)}},
            opacity:{loc:opacity, unit:0, getUnit:function(){getUnit(this,prev.opacity)}}
          }    
        })

      for (let param in this.specialParams[this.specialParams.length-1].ani){
        this.specialParams[this.specialParams.length-1].ani[param].getUnit()}
      }  
      
    ///////GET UNIT FUNCTION///////////////////
    function getUnit( param, prev ){
      
      if (prev){
      param.unit =((param.loc - prev.loc) / steps)}
    }
  }


    //getData = (data) => this.text2 = data

  render(){

    //Load 'arrPics Array' with product img nodes each referenced to placeSpecial which loads specialParams array then applies params to DOM element
      let picArr = []

      for(let i=0;i<=5;i++){
 
          picArr.push(
            <div onMouseOver = {()=>this[i].addInfo()} onMouseLeave = {()=>this[i].addInfo('drop')}style = {pic} key = {i}ref = {(ref)=>this.placeSpecial(ref, i, 5)}>

              

              <Info text = {this.specText['i'+i]} ref = {(ref) => {this[i] = ref}}/>

              <img alt = {'special'} style = {img}  key = {i}src = {require('../img/specials/special-' + i  + '.jpg')}/>

             
            </div>
          )
      }

  return(

   <div onClick = {()=>console.log('state',this.state)} style = {component}  > 
    {picArr} 
   </div>
   

  )
  }
}



////INFO CLASS
  class Info extends Component{

    state = {
      fontSize : 4
    } //Empty state required

    addInfo(arg){// Set state.info which triggers content of infoBox style and fontsize variable 

      if (arg === 'drop'){
        this.setState({
          info : false
        })
      }else {
        this.setState({
          info : true,
          fontSize : this.infoBox.clientHeight / 5 
        })
      }
    }

    render(){
     
      //Define text content fro  props.text
        let heading = this.props.text ? this.props.text.heading : '' 
        let text = this.props.text ? this.props.text.text : ''
      
      //Define infoText div which is displayed when parent component:carousel.arrpics.pic is mouseover
        let infoText = this.state.info === true ? 
         <div style = {infoTextStyle}>

           <h1 style = {h1}>{heading}</h1>
           <div style = {p}>{text}</div>

         </div> : ''

      //Define infoBox style which is activated on this main div when parent component is mouseover
        let infoBoxStyle = this.state.info === true ?  {
          borderStyle: 'solid none solid solid',
          borderWidth:'.5px',
          position : 'absolute',
          textAlign : 'center',
          zIndex : 15,
          width : '50%',
          height : '100%',
          left  : '-50%',
          bottom : '-1px',
          background : 'LightCyan',
          opacity : 1,
          
          } : {} 

         
    return(
        <div ref ={(ref)=>this.infoBox = ref} onClick = {()=>this.addInfo('drop')} style = {Object.assign({},infoBoxStyle,{fontSize : this.state.fontSize / 4})}> 

          {infoText}

        </div>
      )
    }
  }

//STYLES

const h1 = {
  paddingTop : '6%',
  //border : 'solid teal 1px',
  margin : 0,
}

const p ={
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'center',
  margin : 0,
  height : '55%',
  //border : 'solid green  1px'
}

const infoTextStyle = {
    //border : 'solid red 1px',
  padding : '1%',
  height : '100%'
  }

const img = {
    //zIndex:-11,
    height : '100%',
    width : '100%'
  }

const pic = {
    display : 'flex',
    flexDirection : 'row',
    position : 'relative',
    border : 'solid .5px',
  }

const component = {
    position : 'relative',
    //border : 'solid red', 
     width : '100%',
     height : '100%'
  }




