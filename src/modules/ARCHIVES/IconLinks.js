

  import React, { Component } from 'react'
  import NavLink from './NavLink'
  import Radium, { Style } from 'radium'
  import ProductInfo from '../ProductPanel'

  var out = true
  var infoBox = false
  var greek = <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At multis malis affectus. Ita multa dicunt, quae vix intellegam. Ea possunt paria non esse. Idemne potest esse dies saepius, qui semel fuit?
  </p>



  export default class IconLinks extends Component {


    constructor(props) {
      super(props);
      
      this.state = {

        productInfo:'',
        go:true,
        showFill : true,
        border: null

      }

      //this.aniIconWidth = 4 vw

      this.handleClick = this.handleClick.bind(this)
      this.MouseMove = this.MouseMove.bind(this)
      this.watchMouse
      this.timeWatchMouse
      this.wait = false
      

    }
//METHODS//
      componentDidMount(){
        //this.setState({productInfo:{info:'this.props.defaultText'}})
     
        this.mounted = true
      
      }

      componentWillUnmount(){
        this.mounted = false
        this.setState({go:false})
        this.hSlide && clearInterval
        this.hSlide = false
        clearInterval(this.hSlide)
        this.hSlide && this.setState({
        loading: false
        });
      }

 


      MouseMove(event){
       
        let testPos = event.clientX 
        let cWidth = this.refs.component.clientWidth
        this.mPos = event.clientX 
       
        if(this.refs.component != undefined){
    
            if (!this.wait){

              this.wait = true
            
              let hSLide = setInterval(()=>{
               
                if ( this.mPos > cWidth  ) this.horizonSlide('left',2)
                if ( this.mPos < 100 ) this.horizonSlide('right',2)
                },50
              ) 
            }
        }
      }

      horizonSlide(direction, d){

        if (direction === 'left' 
          && this.refs.rightEnd.getBoundingClientRect().right > this.refs.component.clientWidth + this.refs.component.clientWidth / 20
          ) 
          {
          this.refs.iconGroup.style.left = Number(this.refs.iconGroup.style.left.slice(0,-1)) - d + '%'
        }

        if (direction === 'right' && this.refs.leftEnd.getBoundingClientRect().left < this.refs.component.clientWidth / 18) {
          
          this.refs.iconGroup.style.left = Number(this.refs.iconGroup.style.left.slice(0,-1)) + d + '%'
        }
      }   


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


      handleClick(select){

        this.state.showFill = false  //Turn off opening graphic
      
        if (select && this.state.go){
          this.setState(
         
           {productInfo:{toolName:select, info:this.props.products[select], border:'solid teal 1px'}}

            )}
         else {this.setState({productInfo:{info:''}})}
      }

    render(){
      var nextKey = 0

        var icons = [] 


        for (let name in this.props.products){
          icons.push(name)
        }

        for (let name in this.props.products){
          icons.push(name)
        }

        var iconRow = icons.map(function(name){
        nextKey++ 
        
        var imgSrc = '../img/singleIcons/boot.svg'
        

      return  <div style = {aniIcon} key = {'' + nextKey} 
                
                  ref = {(btn)=>{this.hoverB(btn)}}
                
                  onClick = {() => this.handleClick(name)} >

                <img src = {imgSrc} style = {img}/>
              
              </div>
      },this)

      iconRow.push(<div key = {0}  ref = 'rightEnd'></div>)
      iconRow.unshift(<div key ={iconRow.length}  ref = 'leftEnd'></div>)
               

      return(

          <div  style = {component} ref = 'component'>
          
            <div ref = 'iconGroup' style = {iconGroup}> {iconRow} </div>

            <div style = {info}>

              <ProductInfo 
                showFill = {this.state.showFill}
                setToggle = {this.props.setToggle} addToCart = {this.props.addToCart} 
                productInfo = {this.state.productInfo}
              />

            </div>

          </div>
      )
    }
}

//Styles

 const component = {
    clipPath: 'inset(0% 1%)',
    border:'dotted teal',
    display:'flex',
    flexDirection:'column',
    position:'relative',
    alignItems:'center',
    justifyContent : 'flex-end',
    height:'98%',
    width:'100%',
    //margin : '1%'
  }

  const aniIcon = {
    //border:'solid green',
    marginRight:'.2%',
    marginLeft:'.2%',
    position:'relative',
    background : '',
    width:'4vw',
    transition: 'all .4s cubic-bezier(.58,-0.01,.12,1.47)',

  }

  const aniIconHover = {

    background : 'rgba(255, 255, 255, .6)'
    
    //height: '80%',
    //width:'19%',
   
    //transition: 'all .4s cubic-bezier(.58,-0.01,.12,1.47)',


  }

  const iconGroup = {
   //border: 'dotted orange',
    position : 'absolute',
    left : '1%',
    top : '1%',
    //height : '30%',
    //width : '100%',
    display:'flex',
    flexDirection : 'row',
    //justifyContent: 'space-around',
    //alignContent:'center',
    background:'rgba(255,255,255,0)',
  }


  const hitBox = {
    border : 'dotted green 1px',
    display : 'flex',
    flexDirection : 'row',
    //width : '100%',
    //height : '100%'
  }



  const img = {
    //cursor:'pointer',
    //width:'80%',
    border:'solid .5px'
  }





  const info = { 
    height : '65%',
    width : '100%',
    //border : 'solid red 1px',
    position :'relative',
    display:'flex',
    flexDirection : 'row',
    justifyItems: 'space-around',
    //marginBottom : '.5%'
    // alignContent:'center',
   
  }

  const spacer1 = {border:'solid blue',
  width:'3%',
  position:'absolute'

  }

  const arrowBox ={
  position:'absolute',
  left:'10%',
  opacity:'0',
  display:'flex',
  justifyContent:'flex-start',
  width:'97%',
  height:'100%',

   ':hover': {
      opacity:'1',
      justifyContent:'flex-end',
      transitionTimingFunction: 'cubic-bezier(.58,-0.01,.12,1.47)',
     
    }
  }


  const arrow ={

  width:'6%',
  height:'5%'

  }


  const infoEnd = {
    opacity:'0',
    paddingRight:'5%',
    display:'flex',
    justifyContent:'flex-start',
    width:'80%',
    height:'100%',
    zIndex:'100',
    position:'absolute',
    left:'-20%',
    top:'0%',
    fontSize:'0%',
    transition: 'opacity.4s',

    ':hover': {
        fontSize:'60%',
      opacity:'1',
        transitionTimingFunction: 'cubic-bezier(.58,-0.01,.12,1.47)',
      }
  }


  const textBox = {
    borderStyle:' solid solid solid none ',
    borderWidth:'1px',
    background:'white',
    padding:'1%',
    overflow: 'auto',
    opacity:'inherit',
    fontSize:'inherit',
    display:'flex',
    justifyContent:'center',
    textAlign: 'center',
    width:'80%',
    height:'99.5%',
    zIndex:'100',
    position:'absolute',
    left:'23%',
    top:'-1.5%'
  }


  const textBoxLast = {
    borderStyle:' solid none solid solid  ',
    borderWidth:'1px',
    background:'white',
    padding:'1%',
    overflow: 'auto',
    opacity:'inherit',
    fontSize:'inherit',
    display:'flex',
    justifyContent:'center',
    textAlign: 'center',
    width:'80%',
    height:'99.5%',
    zIndex:'100',
    position:'absolute',
    left:'-100%',
    top:'-1.5%'
  }









