  
  //IMPORT
    import React, { Component } from 'react'
    import Shopper from './Shopper'
    import ShoppingCart from './ShoppingCart'
    import ShowCartBtn from './ShowCartBtn'

    const greek = <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      At multis malis affectus. Ita multa dicunt, quae vix
      intellegam. Ea possunt paria non esse.
      Idemne potest esse dies saepius, qui semel fuit?
            </p>;

export default class Products extends Component {

  state = {
      prodNames : ['flower','shovel', 'wBarrow', 'sprinkler', 'shears', 'rake', 'claw', 'fence', 'boot', 'hose', 'grass', 'pump', 'waterer', 'mower', 'lilShovel'],
      products:'',
      shoppingCart:{},
      buttonOver : false,
      cartShow : false,
    }

  componentWillMount(){ 
  //Setstate:products as object of product names paired with html product description
    const products = {};

      this.state.prodNames.forEach( function(name){
      products[name] = <span><h3
          style = {{margin:'1.5%'}}>{this.capitalize(name)}</h3>{greek}</span>
    },this)

      this.setState({
          products:products
      })
    }

//METHODS//////

  //addToCart method passed down 3 levels to proditem to return productInfo.toolName-item[0] and no. No used for price-item[1]
  addToCart = (item,e) =>{

    let cart = this.state.shoppingCart

    cart[item[0]] = {
      price : item[1],
      cost : item[1],
      quantity : 1
    }

    this.setState({shoppingCart : cart})
  }

  //editQuantity method passed to shoppingCart component to return changes in uqantity field of shopping cart then update cost
  editQuantity = (e, item, val)=>{

    let cart = this.state.shoppingCart;

    cart[item][val] = Number(e.target.value);
    cart[item].cost = cart[item].quantity * cart[item].price;

    this.setState({shoppingCart : cart})

  };
  
  capitalize = (word)=> String.fromCharCode(word.charCodeAt(0)-32) + word.slice(1)

  //Toggle opacity of shoppingCart component
  setShowCart = ()=>{
    this.setState({cartShow:!this.state.cartShow,})
  }
  //RemoveCartItem passed to shoppingcart component to return click on X in shoppingcart
  removeCartItem = (e, item) => {

    let cart = this.state.shoppingCart;
    delete cart[item];
    this.setState({shoppingCart : cart})
  }

  //Invoke <Shopper/>.mouseover on mouseOver either Hit div. Stop on mouseLeave
  hover =(mouse,dir)=>{
    this.shopper.leadInHorizonSlide(false)
    if (mouse === 'enter') this.shopper.handleMouseOver(dir)
    if (mouse === 'leave') this.shopper.handleMouseOver(false)
  }


  //Import tool svgs

  importAll = (r)=>{
    return r.keys().map(r);
  }

  createSvgObj = ()=>{
    const svgImport = this.importAll(require.context('../img/tools/singleIcons', false, /\.(png|jpe?g|svg)$/));
    const obj={}
    svgImport.forEach((img)=>{
              const prop = /media\/(.*)\..*\./.exec(img)
              obj[prop[1]] = img
            }
    )
    console.log('obj ',obj)
    return obj
  }

  toolSvgs = this.createSvgObj()


  render(){
    //Move shopping cart out from right when visible

    const cartRight = this.state.cartShow ? 45 : -400

      return(

        <div className = 'lato' name = 'component' style = {component}>
          {/*HEADER*/}
            <div style = {header}>

              <div style = {text}>
                  <h2 style={head}>Our Product Selections</h2>
                    <p>We carry a wide assortment of gardening products fro evry need.

                      As your on-site provider, we are always striving to expand our selection to have exactly what you need for any job. Always up to date with the latest and most practical tools for professional quality gardening projects.
                    </p>
                      <div style={boldCenter}>Please browse our selection. If there's anything not seen here
                      please contact us for special orders.
                      </div>

              </div>

              <div style ={button}>
                    <ShowCartBtn
                      setShowCart = {this.setShowCart}
                      toolSvgs = {this.toolSvgs}
                    />
              </div>

            </div>

            <div
                style={leftHit}
                onMouseEnter={()=>this.hover('enter','right')}
                onMouseLeave={()=>this.hover('leave')}
            />

            <div title = 'shopperBox' style = {shopperBox}>
              <div
                style = {leftOverHit}
                onMouseEnter={()=>this.hover('enter','right')}
                onMouseLeave={()=>this.hover('leave')}
              />
                <Shopper
                  ref = {instance => {this.shopper = instance}}
                  setShowCart = {this.setShowCart}
                  addToCart = {this.addToCart}
                  products = {this.state.products}
                  toolSvgs = {this.toolSvgs}
                />

              <div
                style = {rightOverHit}
                onMouseEnter={()=>this.hover('enter','left')}
                onMouseLeave={()=>this.hover('leave')}
              />

            </div>

              <div
                style={rightHit}
                onMouseEnter={()=>this.hover('enter','left')}
                onMouseLeave={()=>this.hover('leave')}
                />

          {/*SHOPPINGCART*/}
          <div style = {{...cart,...{right : cartRight}}}>
            <ShoppingCart
                    editQuantity = {this.editQuantity}
                    remove = {this.removeCartItem}
                    setShowCart = {this.setShowCart}
                    shoppingCart = {this.state.shoppingCart}
                    opacity = {this.state.cartShow}
                    toolSvgs = {this.toolSvgs}
            />
          </div>

        </div>
      )
  }
}

//STYLES

  const boldCenter = {
    fontWeight : 300,
    textAlign : 'center',
  }

  const leftOverHit = {
    width : '5%',
    height : '100%',
    position: 'absolute',
    zIndex : 7,
  }

  const rightOverHit = {
    ...leftOverHit, ...{right : 0, top : 0}
  }

  const leftHit = {
   width: '20%',
   height: '100%',
   position:'absolute',
   zIndex : 1,
   left :0,
  }

  const rightHit = {
    ...leftHit, ...{left:null, right:0,}
  }

  const shopperBox = {
    zIndex : 2,
    position : 'relative',
    border : 'solid goldenrod 0px',
    height : '60%',
    width : '100%'
  }

  const head = {
    margin : '1% 1% 0'
  }

  const component = {
    name : 'component',
    borderStyle:'none solid solid solid',
    borderWidth:'.5px',
    borderColor :'goldenrod',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems:'center',
    position : 'relative',
    zIndex : 3
  }

  const button = {
    position : 'absolute',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-end',
    right : '.3%',
    top:'.6%',
    width : '18%',
    height : '12%',
  }

  const header = {
    display : 'flex',
    justifyContent : 'center'
  }

  const cart = {
    position :'absolute',
    display : 'block',
    zIndex : 3,
    width : '24%',
    top : '-35%',
    right: '32',
    transition : '1s'
  }

  const text = {
    //border : 'solid',
    margin:'0',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:'0% 1% 1%',
    fontSize: '2.5vmin',
    color : '#443509',
    width : '90%',
    lineHeight : '140%',
    //fontSize : '1.5vw'
  }











