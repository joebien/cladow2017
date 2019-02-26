  import React, { Component } from 'react'
  import ProductInfo from './ProductPanel'
  import NavArrows from './NavArrows'


export default class Shopper extends Component {

      wait = false

      holdBlink = false
      rightO = 1
      leftO = 1

    state = {
        cartBtnHover : false,
        rArrZindx : 1,
        lArrZindx : 1,
        leftO:0,
        rightO:0,
        navArrows:true,
        productInfo:'',
        go:true,
        showFill : true,
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
  leadInHorizonSlide = () =>{

    this.rate = 2

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
  horizonSlide(direction, d){

    if(this.rightEnd === null||this.leftEnd === null) return

    if (direction === 'left'
            && this.rightEnd.getBoundingClientRect().right > this.component.clientWidth
          ){
          this.iconGroup.style.left = Number(this.iconGroup.style.left.slice(0,-1)) - d + '%'
        }

    if (direction === 'right'
            && this.leftEnd.getBoundingClientRect().left < this.component.clientWidth * .07
          ){
          this.iconGroup.style.left = Number(this.iconGroup.style.left.slice(0,-1)) + d + '%'
        }
      }

  // highlight aniIcon on hover
  hoverB(btn){
    if (btn) {

      btn.addEventListener('mouseenter',()=>{
        Object.assign(btn.style,aniIconHover)
      })

      btn.addEventListener('mouseleave',()=>{
        Object.assign(btn.style,aniIcon)
      })
    }
  }

  btnHover = ()=> {console.log('btnhover fired')
    this.setState({cartBtnHover: !this.state.cartBtnHover})
  }


  // Hide opening bottom Graphic(fill) & load info for selected aniIcon to ProductInfo
  handleClick(select){

    this.setState({
      showFill : false,
      showProdInfo : 1
    })

    this.setState(
              {productInfo:{
                            toolName:select,
                            info:this.props.products[select]}}
    )
  }


  render(){

        let nextKey = 0

        const icons = []

        // load icons array with names of product Three times
        for (let name in this.props.products){
          icons.push(name)
        }
        for (let name in this.props.products){
          icons.push(name)
        }
        for (let name in this.props.products){
          icons.push(name)
        }

        //Make iconRow an array of aniIcon divs each with img, hover and click
        const iconRow = icons.map(function(name){
          nextKey++

            const imgSrc = 'https://joebien.github.io/img/singleIcons/' + name + '.svg'

              const aniIconStyle = this.state.cartBtnHover ? aniIconHover : aniIcon

              return  <div style = {aniIconStyle} key = {'' + nextKey}

                        // ref = {(btn)=>{this.hoverB(btn)}}

                           onMouseEnter = {this.btnHover}

                           onMouseLeave = {this.btnHover}

                        onClick = {() => this.handleClick(name)} >

                        <img alt = {'icon'} src = {imgSrc} style = {img}/>

                      </div>
                },this
        )

        //Add marker div at each end of iconRow array to trigger end of scrolling

        iconRow.push(<div style={end} key = {0}  ref = {(ref)=>this.rightEnd = ref}>
                </div>)

        iconRow.unshift(<div style={end} key ={iconRow.length}  ref = {(ref)=>this.leftEnd = ref}>
                </div>)

      return(
              <div style = {component} ref = {(ref)=>this.component = ref}>


                <div  style = {navArrowsBox}>
                  <NavArrows ref = {(ref)=>this.navArrows = ref}
                         leftOpacity = {this.state.leftArrowOpacity}
                         rightOpacity = {this.state.rightArrowOpacity}/>
                </div>


                <div style = {iconRowClip}>
                  <div ref = {(ref)=>this.iconGroup = ref} style = {iconRowBox}>
                    {iconRow}
                  </div>
                </div>


                <div style = {info}>

                  <ProductInfo
                          showFill = {this.state.showFill}
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
    //width : '100%',
    display:'flex',
    flexDirection : 'row',
    //justifyContent: 'space-around',
    //alignContent:'center',
    background:'rgba(255,255,255,.2)',
    //border:'solid red'
    //background : 'pink'
  }

  const iconRowClip = {
    ...iconRowBox,
    ...{//border : 'solid green',
      height : '30%',
      width:'88%',
      left:'6%',
      //clipPath : 'inset:0',
      overflow : 'hidden',
      background : null
    }
  }

  const navArrowsBox = {
   // border : 'dotted blue',
    position : 'absolute',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    height : '30%',
    width : '100%',
    top:'-1%',

  }

  const end = {
  // border:'solid red'
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

  const info = { 
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

  const aniIcon = {
      height :'100%',
      display :'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      //border:'solid green 1px',
      marginRight:'.2%',
      marginLeft:'.2%',
      position:'relative',
      background : '',
      width:'4vw',
      transition: 'all .4s cubic-bezier(.58,-0.01,.12,1.47)',
    }

  const aniIconHover = {
          ...aniIcon,
          ...{background : 'rgba(255, 255, 255, .6)'}
    }

  const img = {
      //cursor:'pointer',
      width:'100%',
      //border:'solid .5px'
    }


   

   

    

  
