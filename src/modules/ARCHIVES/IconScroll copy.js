import ReactTimeout from 'react-timeout'
import React, { Component } from 'react'
import NavLink from './NavLink'
import Radium, { Style } from 'radium'
import {Motion, spring} from 'react-motion';
//import toolSvg from './tool1.svg'
//import toolS from '../public/img/tool1.svg'

  
  var cab5 
  var scrollGo
  
  
export default class IconScroll extends Component {



 constructor(props) {
    super(props);
    //this.scroll = this.scroll.bind(this);
    // this.handleMove = this.handleMove.bind(this);
    // this.handleNewCar = this.handleNewCar.bind(this)
    // this.addNewCar = this.addNewCar.bind(this)
  //this.handlemouseMove = this.handlemouseMove.bind(this)
  this.mouseMove = this.mouseMove.bind(this)
    this.timer
    this.scrollOn
    this.d = 4

    this.state = { 
      carNodes:[],
      scroll:true,
      
  
     
       }
 
 
  }

  componentDidMount(){

  
    
  //this.monitorMM()
      var startCarNodes = [ ]
      var count = 1
      var imgC 


    fillCarNodes()
    
    function fillCarNodes () {
      if (startCarNodes.length > 12) return
      
      imgC = (count % 4) + 1 
      
      startCarNodes.unshift(
      <div key = {count++} style = {car}>
     <img style = {img} src = {'https://joebien.github.io/public/img/tool'+imgC+'.svg'}/>
   {/*    <img src={require('../public/img/tool' + imgC + '.jpg')}/>*/}
      </div>)

      fillCarNodes()
    }

    this.setState({carNodes:startCarNodes})
    //this.testInterval()
    //scrollMove = setInterval(this.scroll,60)

  }

  
  
  scroll(d){
 //*************************************************  
    var moveme = this.refs.moveme
    
        moveme.style.right = Number(moveme.style.right.slice(0,-2)) - d + 'px'    

        if (4 > moveme.offsetLeft > 0) this.handleNewCar()
   
  }

  slowScroll(){

    let slow = setInterval(()=>{
      this.d--
      if(this.d < 1) {this.state.scroll = true
      clearInterval(this.scrollOn)
      clearInterval(slow)
      this.d = 4 }
    },90)
  }

  mouseMove() {

    if(this.state.scroll){
      this.state.scroll = false
      this.scrollOn = setInterval(()=>this.scroll(this.d),60)
    }

    clearTimeout(this.timer)

    this.timer = setTimeout(()=>{
      this.slowScroll()
      
      
    },500)

    //   let longTime = setTimeout(()=>{
    //   clearInterval(this.scrollOn)
      
    //   this.state.scroll = true
    // },15000)

}
  



  handleNewCar() {

     this.addNewCar()

  }

  addNewCar() {

    var imgN = (this.state.carNodes.length % 4) + 1
    var cab5 = <div key = {this.state.carNodes.length + 1} style = {car}>
       <img src = {'https://joebien.github.io/public/img/tool' + imgN + '.svg'}/>
        {/*<img src={require('../public/img/tool' + imgN + '.jpg')}/>*/}
              </div>
    var newNodes = this.state.carNodes
    newNodes.unshift(cab5)
    this.setState({carNodes:newNodes})

  }


  render(){
     

      
        return(

        
          <div style = {scrollContainer}>
            <div style = {{ marginTop : '0px',height:'100%', position:'absolute', display: 'inline-flex', alignItems:'flex-end', right:'0px'}}  ref = 'moveme' id = {true}>
              {this.state.carNodes} 
            </div>
            
          </div>  
         
           
     
        )
  }


}

/////////////////////END ICONSCROLL COMPONENT//////////////////////////////////

 ///////




const car = {
  //border : 'solid',
marginRight : '0%',
display:'flex', 
width:'24vh',
height:'100%'
}

const scrollContainer = {
// border:'solid 1px red',
  clipPath: 'inset(0px 0% 0px 0%)',
  
  width: '95%', 
  height:'12%', 
  position:'relative'
 
  
}

const img = {
  //border:'solid 1px teal',
  display : 'inline-block'
}





//



