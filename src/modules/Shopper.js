  import React, { Component } from 'react'
  import ProductPanel from './ProductPanel'
  import NavArrows from './NavArrows'
  import AniIcon from './AniIcon'


export default class Shopper extends Component {

      wait = false
      holdBlink = false
      rightO = 1
      leftO = 1

    state = {
        iconRowLeft:'1%',
        rArrZindx : 1,
        lArrZindx : 1,
        leftO:0,
        rightO:0,
        navArrows:true,
        productInfo:'',
        go:true,
        showBottomScroll : true,
        showProdInfo : 0,
        border: null,
        left : .6,
        right : .6
    }

 //METHODS
     /////////
  componentDidMount(){
    this.leadInHorizonSlide()
  }

  //Move iconRow left for 3 seconds on componentMount
  leadInHorizonSlide = (go) =>{

    if(go === false) {this.rate = 0}else {this.rate = 2}

    //Slow down every .16 seconds after 1.7 seconds
    const setRate = ()=>{
      const rateInt = setInterval(()=>this.rate-=1,160)
    }

    setTimeout(()=>setRate(),1700)

    //move left until rate is 0
    const slide = ()=>{

      if (this.rate < 1) return
        setTimeout( (rate)=>{
          this.horizonSlide('left',this.rate)
          slide()
        } ,50)

      }

    slide()

}

  //Move iconRow left or right per dir value or stop movement if dir === false
  handleMouseOver = (dir)=>{

    const speed = 2
    //Stop if dir === false
    if(dir === false) {

      this.setState({left:.6,right:.6})
      this.setArrows(true,true)

      clearInterval(this.hSlide)
      return
    }

    this.hSlide = setInterval(()=>{

      if(this.rightEnd === null||this.leftEnd === null) return

              //Hide right arrow if iconRow moved to extreme left
              if(this.rightEnd.getBoundingClientRect().right < this.component.clientWidth)this.setArrows(true,false)

              //Hide left arrow if iconRow moved to extreme right
              if(this.leftEnd.getBoundingClientRect().left > this.component.clientWidth * .07)this.setArrows(false,true)

              //Show both arrows if betweenextremes
              if(this.rightEnd.getBoundingClientRect().right > this.component.clientWidth && this.leftEnd.getBoundingClientRect().left < this.component.clientWidth * .07)this.setArrows(true,true)

              //Move left and  highlight right arrow
              if ( dir === 'left' ) {
                    this.horizonSlide('left', speed)
                    this.setState({
                      left :.6,
                      right : 1
                    })
              //Move right and highlight left arrow
                }else if ( dir === 'right') {
                    this.horizonSlide('right',speed)
                this.setState({
                  left :1,
                  right : .6
                })

                }

              },50
            )
    }

  //Set Opacity of arrows
  setArrows=(left,right)=>{ //hide arrow at each end if iconRow has moved al the way to that end

    let leftPower = left ? this.state.left : 0
    let rightPower = right ? this.state.right : 0

    this.setState({leftArrowOpacity : leftPower, rightArrowOpacity : rightPower})

  }

  //Move iconGroup one unit if it hasn't reached the extreme left or right

  iconRowAni = {left:'1%'}

  horizonSlide(direction, d){

    if(this.rightEnd === null||this.leftEnd === null) return

    if (direction === 'left'
            && this.rightEnd.getBoundingClientRect().right > this.component.clientWidth
    ){
      let newLeft = Number(this.state.iconRowLeft.slice(0,-1))  - d + '%'
      this.setState({iconRowLeft : newLeft})
     }

    if (direction === 'right'
            && this.leftEnd.getBoundingClientRect().left < this.component.clientWidth * .07
    ){
      let newLeft = Number(this.state.iconRowLeft.slice(0,-1))  + d + '%'
      this.setState({iconRowLeft : newLeft})
     }
  }

  // Hide opening bottom Graphic(fill) & Load state.product.info from selected aniIcon to ProductPanel
  handleClick =(select)=>{

    this.setState({
      showBottomScroll : false,
      showProdInfo : 1,
      productInfo:{
        toolName:select,
        info:this.props.products[select],
        img:this.props.toolSvgs[select]
      }
    })

  }

  //ToolSvg
  // importAll = (r)=>{
  //   return r.keys().map(r);
  // }
  //
  // createSvgObj = ()=>{
  //   const svgImport = this.importAll(require.context('../img/tools/singleIcons', false, /\.(png|jpe?g|svg)$/));
  //   console.log('svgimport ',svgImport)
  //   const obj={}
  //   svgImport.forEach((img)=>{
  //             console.log('img ',img)
  //             const prop = /media\/(.*)\..*\./.exec(img)
  //             console.log('prop ',prop[1])
  //             obj[prop[1]] = img
  //     }
  //   )
  //   return obj
  // }
  //
  // toolSvgs = this.createSvgObj()

  render(){

        const {toolSvgs} = this.props

        const icons = []
    // load icons array with names of products Three times

        for (let name in this.props.products){
          icons.push(name)
        }
        for (let name in this.props.products){
          icons.push(name)
        }
        for (let name in this.props.products){
          icons.push(name)
        }

        let nextKey = 0

    //MAP to iconRow an array of aniIcon passing name lmg and clickMethod
        const iconRow = icons.map(function(name){
          nextKey++

              return  <AniIcon
                        key = {nextKey}
                        name = {name}
                        imgSrc = {toolSvgs[name]}
                        handleClick = {this.handleClick}
                      />
        },this)

    //Add marker div at each end of iconRow array to trigger end of scrolling//
        iconRow.push(<div key = {0}  ref = {(ref)=>this.rightEnd = ref}>
                </div>)
        iconRow.unshift(<div key ={iconRow.length}  ref = {(ref)=>this.leftEnd = ref}>
                </div>)

        const iconRowBoxStyle = {...iconRowBox,...{left:this.state.iconRowLeft}}

      return(
              <div style = {component} ref = {(ref)=>this.component = ref}>
                <div  style = {navArrowsBox}>
                  <NavArrows ref = {(ref)=>this.navArrows = ref}
                         leftOpacity = {this.state.leftArrowOpacity}
                         rightOpacity = {this.state.rightArrowOpacity}/>
                </div>

                <div style = {iconRowClip}>

                  <div style = {iconRowBoxStyle}>
                    {iconRow}
                  </div>

                </div>

                <div style = {panel}>

                  <ProductPanel
                          showBottomScroll = {this.state.showBottomScroll}
                          showElements = {this.state.showProdInfo}
                          productInfo = {this.state.productInfo}

                    {...this.props}
                  />

                </div>

              </div>
      )
  }
}
//Styles

  const iconRowBox = {
    border: 'solid',
    borderColor : 'goldenrod',
    borderWidth : '.5px 0px',
    position : 'absolute',
    zIndex : 0,
    left : '1%',
    top : 0,
    height : '100%',
    display: 'flex',
    flexDirection : 'row',
    background: 'rgba(255,255,255,.2)',
  }

  const iconRowClip = {
    ...iconRowBox,
    ...{//border : 'solid green',
      height : '30%',
      width:'91%',
      left:'4.5%',
      //clipPath : 'inset:0',
      overflow : 'hidden',
      background : null
    }
  }

  const navArrowsBox = {
    position : 'absolute',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    height : '30%',
    width : '99%',
    top:'-1%',

  }

  const component = {
      clipPath: 'inset(0% 1%)',
      //border:'solid pink',
      display:'flex',
      flexDirection:'column',
      position:'relative',
      alignItems:'center',
      justifyContent : 'flex-end',
      height:'100%',
      width:'100%',
    }

  const panel = {
      height : '65%',
      width : '100%',
      //border : 'dotted red 3px',
      position :'relative',
      display:'flex',
      flexDirection : 'row',
      justifyItems: 'space-around',
      //marginBottom : '.5%'
      // alignContent:'center',
    }





   

   

    

  
