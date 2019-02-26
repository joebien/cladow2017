import React, { Component } from 'react'
//import toolSvg from './tool1.svg'
//import toolS from '../public/img/tool1.svg'
  
  
export default class IconScrollDevice extends Component {

    interval = null
    time = 0
    unit = 1
    state = {
        carNodes:[],
        scroll:true,

    }
  componentDidMount(){

    this.carMod = Object.assign({},car,this.props.carMod)

    
    this.fillCarNodesArr()


    }
  componentWillUnmount(){

    clearInterval(this.move)

    }

  fillCarNodesArr = () => {

    var startCarNodes = [ ]
    var count = 1

    function fillCarNodes (thiss) {
    var imgC 
    if (startCarNodes.length > 23) return
      
        imgC = (count % 4) + 1
      
        startCarNodes.unshift(
          <div key = {count++} style = {thiss.carMod}>
          <img alt = {'tool'}style = {img} src = {'https://joebien.github.io/public/img/tool'+imgC+'.svg'}/>
          </div>
        )

    fillCarNodes(thiss)
   }


    fillCarNodes(this)
 
    this.setState({carNodes:startCarNodes})
    }




  moveMeOnce = ()=> {
      this.moveme.style.right = Number(this.moveme.style.right.slice(0,-2)) - 2 +'px'
  }

  move

  moveMe = () => {
    this.move = setInterval(this.moveMeOnce, 60)
  }

  handleNewCar() {

    this.addNewCar()

    }

  addNewCar() {
    var imgN = (this.state.carNodes.length % 4) + 1
    var cab5 =  <div style = {this.carMod} key = {this.state.carNodes.length + 1} >

    <img alt = {'tool'} src = {'https://joebien.github.io/public/img/tool' + imgN + '.svg'}/>
      
                </div>

    var newNodes = this.state.carNodes
    newNodes.unshift(cab5)
    this.setState({carNodes:newNodes})
    }


  render(){ 
        return(

          <div style = {scrollContainer}>
            <div style = {{ height:'100%', position:'absolute', display: 'flex', alignItems:'flex-end',              right:'0px'}}  ref = {(ref)=>this.moveme = ref} id = {true}>
                {this.state.carNodes}
             </div>
          </div>  
        )
  }
}



 ///////

const car = {
  //border : 'solid',
marginRight : '0%',
display:'flex', 
//width:'26vh',


}

const scrollContainer = {
//border:'solid 1px red',
  clipPath: 'inset(0px 0% 0px 0%)',
  
  width: '98%',
  height:'92%',
  position:'relative'
 
  
}

const img = { 
width:'100%',
  
  //border:'solid 1px teal',
  display : 'inline-block'
}





//



