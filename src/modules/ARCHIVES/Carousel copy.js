import React, { Component } from 'react'
import NavLink from './NavLink'




export default class Carousel extends Component {

  constructor(props) {
      super(props)

      this.placeSpecial = this.placeSpecial.bind(this)
      
      this.specialParams = []
      this.unit ={}
  }
 
    //SHIFT EACH SPECIALPARAMS OBJECTS PIC VALUE TO THE NEXT IMAGE - FIRST OBJECT GETS THE LAST PIC VALUE


  aniSpecial(){

    //console.log('anispecial fired');
 
      //clone specialParams 
      var newParams = this.specialParams.map((obj)=>Object.assign({},obj))
  
      //shift pic objects up 1 , last one to index 0
      newParams.unshift(newParams.pop())

      //dump shifted pic value backto specialParams
      this.specialParams.forEach((item,key) => {
        item.pic = newParams[key].pic
      
      })
      
      console.log('specP  ',this.specialParams);

      //Itterate over specParams animate each param toward ani values with aniPic
      this.specialParams.forEach((item, key) => {
       
        if(key == 0){
          item.pic.style.left = item.ani.left.loc + 'vw'
          item.pic.style.width = item.ani.width.loc + 'vw'
          item.pic.style.top = item.ani.top.loc + 'vw'
          item.pic.style.opacity = item.ani.opacity.loc
        }

        item.pic.style.zIndex = item.zIndex

        //animate each param toward ani values
        this.aniPic(item)


      })

      console.log( this.specialParams[0].pic)


  }

  
    //Animates each parameter one unit
  aniPic(picObj){
    let count = 0
     
      function animate (){ //console.log('animate fired');

      //Iterate over every param in picObj and animate one unit
         for (let param in picObj.ani){

          //let target = Number(picObj.pic.style[param].slice(0,-2))
            
            let target = picObj.pic.style[param].slice(-2) == 'vw' ? Number(picObj.pic.style[param].slice(0,-2)) : Number(picObj.pic.style[param])
        
            let endValue = picObj.ani[param].loc
            
              if ( target < endValue ){
              
                // Increment domNode style parameter one unit

                 //picObj.pic.style[param]  = (Number(picObj.pic.style[param].slice(0,-2))+ picObj.ani[param].unit)


                 if (picObj.pic.style[param].slice(-2) == 'vw'){
                  picObj.pic.style[param]  = (Number(picObj.pic.style[param].slice(0,-2))+ picObj.ani[param].unit) + 'vw'} else {
                    picObj.pic.style[param]  = (Number(picObj.pic.style[param])+ picObj.ani[param].unit)
                  }



              }else {
                clearInterval(animateGo)
                      }

          
         
          }       
      }
      
      let animateGo = setInterval(animate.bind(this),20)
     
  }

    //Assign specialParams object parameter values - then apply parameters to DOM element
  placeSpecial(pic,key,total){

      let steps = 30   
      const max = 29 //max width
      const min = 5 //min width
      let compWidth
      let compHeight

      //Get width and height of component
      if (pic) {compWidth = pic.parentElement.clientWidth
     compHeight = pic.parentElement.clientHeight
      }

      //Calculate dimensions and location of each pic//

      if (pic != null){
          //pic.style.opacity = 1
          pic.style.position = 'absolute'
          //pic.style.border = 'solid red 6px'

        //Calulate placement paramaters
        
        let width = (((max  - min)/5)*key + min) 
       
        let left = Math.pow(key/total,2)*compWidth
        
        let top = Math.pow(key/total,6)*compHeight

        let opacity =  (key +1)/total 
       

      //Assign parameters to dom element
          
        pic.style.top = top + 'vw'
        pic.style.width = width +'vw'
        pic.style.left = left + 'vw'
        pic.style.zIndex = key
        pic.style.opacity = opacity

        //console.log('MRR   ',Math.round(100 / (key+1)));
     
      //Assign parameters to specialParams object

        let prev = {}
      
        // define previous ani
          if (this.specialParams.length>0) {
            prev = this.specialParams.slice(-1)[0].ani
            //console.log('prev  ', prev)
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

      //console.log('place params   ',this.specialParams);
   
  }


 
  render(){
    //Load arrPics with img nodes each referenced to placeSpecial which loads specialParams array then applies params to DOM element
      let arrPics = []

      for(let i=0;i<=5;i++){
        arrPics.push(<img style = {{zIndex:-11}}  key = {i}src = {require('../public/img/specials/special-' + i  + '.jpg')}ref = {(ref)=>this.placeSpecial(ref, i, 5)}/>),this
      }
   

  return(
        <div style = {component}>
          
          {arrPics}
    
        </div>
  )
  }


}

const testBox = {
  position : 'absolute',
  top : '-150%',
  width : '140%',
  height : '350%',
  border : 'solid teal',
  background : 'yellow',
  
}

const component = {
  
  position : 'relative',
  //border : 'solid red', 
   width : '100%',
   height : '100%'
  }

const imgBox = {
  
  border : 'dotted teal',
  width : '100%',
  height : '200px'
} 