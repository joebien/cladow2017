import React, { Component } from 'react'
//import toolSvg from './tool1.svg'
//import toolS from '../public/img/tool1.svg'
  
  
export default class IconScroll extends Component {

    timer = null
    scrollOn = null
    d = 4
    state = {
        carNodes:[],
        scroll:true,

    }
  componentDidMount(){

    this.carMod = Object.assign({},car,this.props.carMod)
    
    this.fillCarNodesArr(this.groupedtools)

    if(this.props.goScroll) this.animateScroll(60,10000)
    }
  componentWillUnmount(){
    this.setState({scroll:false})
    clearInterval(this.slow)
    clearInterval(this.scrollOn)
    clearTimeout(this.timer)

    this.d = 3
    }

  importAll = (r)=>{
    return r.keys().map(r);
  }

  groupedtools = this.importAll(require.context('../img/tools/groupedtools', false, /\.(png|jpe?g|svg)$/))

  // createSvgObj = ()=>{
  //   const svgImport = this.importAll(require.context('../img/tools/groupedtools', false, /\.(png|jpe?g|svg)$/))
  //   console.log('svgimport ',svgImport)
  //   const obj={}
  //   svgImport.forEach((img)=>{
  //             console.log('img ',img)
  //             const prop = /media\/(.*)\..*\./.exec(img)
  //             console.log('prop ',prop[1])
  //             obj[prop[1]] = img
  //           }
  //   )
  //   console.log('obj ',obj)
  //   return obj
  // }
  //
  // toolSvgs = this.createSvgObj()


  fillCarNodesArr = (groupedtools) => {

    const startCarNodes = [ ]
    let count = 0

    function fillCarNodes (thiss) {
    let imgC
    if (startCarNodes.length > 12) return
      
    imgC = (count % 3) + 1
    startCarNodes.unshift(

      <div key = {count++} style = {thiss.carMod}>
      <img alt = {'tool'}style = {img}

           src = {groupedtools[imgC]}
           // src = {'https://joebien.github.io/public/img/tool'+imgC+'.svg'}
      />
      </div>
    )

    fillCarNodes(thiss)
   }

    fillCarNodes(this)
 
    this.setState({carNodes:startCarNodes})
    }
  
  
  scroll = (d)=>{
 //*************************************************  
    var moveme = this.refs.moveme
    
        if (moveme) { moveme.style.right = Number(moveme.style.right.slice(0,-2)) - d + 'px'    

        if (4 > moveme.offsetLeft > 0) this.handleNewCar() }
   
  }

  slowScroll(clear){

    this.slow = setInterval(()=>{
      this.d--
      if(this.d < 1) {this.setState({scroll : true})
      
      clearInterval(this.scrollOn)
      
      clearInterval(this.slow)
      
      this.d = 4 }
    },90)
  }

  mouseMove = () => {

   
   this.animateScroll(60,500)
  }
  
  animateScroll(frate, timeOut){
     
    if(this.state.scroll){
      this.setState({scroll : false})
      this.scrollOn = setInterval(()=>this.scroll(this.d),frate)
      }

      clearTimeout(this.timer)

      this.timer = setTimeout(()=>{
        this.slowScroll()
      },timeOut)
    }

  handleNewCar() {

    this.addNewCar()

    }

  addNewCar() {
    // var imgN = (this.state.carNodes.length % 4) + 1
   let cab5 =  <div style = {this.carMod} key = {this.state.carNodes.length + 1} >

    <img alt = {'tool'}
         // src = {'https://joebien.github.io/public/img/tool' + imgN + '.svg'}
    />
      
                </div>

    let newNodes = this.state.carNodes
    newNodes.unshift(cab5)
    this.setState({carNodes:newNodes})
    }


  render(){ 
        return(

          <div style = {scrollContainer}>
            <div style = {{ height:'100%', position:'absolute', display: 'flex', alignItems:'flex-end',              right:'0px'}}  ref = 'moveme' id = {true}>
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
//width:'26vh',


}

const scrollContainer = {
//border:'solid 1px red',
  clipPath: 'inset(0px 0% 0px 0%)',
  
  width: '98%',
  height:'100%', 
  position:'relative'
 
  
}

const img = { 
width:'100%',
  
  //border:'solid 1px teal',
  display : 'inline-block'
}





//



