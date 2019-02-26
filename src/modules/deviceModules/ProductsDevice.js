  
  //IMPORT
    import React, { Component } from 'react'
    import ShopperDevice from './ShopperDevice'
    import PropTypes from 'prop-types'
    import ShoppingCart from './ShoppingCartDevice'
    import ShowCartBtn from '../ShowCartBtn'
  import ProdItemDevice from './ProdItemDevice'

export default class ProductsDevice extends Component {

    static propTypes = {
    initialValue: PropTypes.string
  };

  static defaultProps = {
    initialValue: ''
    };

  state = {
      // prodNames : ['flower','shovel', 'wBarrow', 'sprinkler', 'shears', 'rake', 'claw', 'fence', 'boot', 'hose', 'grass', 'pump', 'waterer', 'mower', 'lilShovel'],

      firstClick : false,

      products : {
          flower:[{subCat:'red',price:10.50},{subCat:'white',price:14.00},{subCat:'blue',price:7.25},{subCat:'black',price:25.00}],
          shovel:[{subCat:'red',price:11.50},{subCat:'white',price:12.00},{subCat:'blue',price:21.25},{subCat:'black',price:19.00}],
          wBarrow:[{subCat:'red',price:10.50},{subCat:'white',price:14.00},{subCat:'blue',price:7.25},{subCat:'black',price:25.00}],
          sprinkler:[{subCat:'red',price:11.50},{subCat:'white',price:12.00},{subCat:'blue',price:21.25},{subCat:'black',price:19.00}],
          shears:[{subCat:'red',price:10.50},{subCat:'white',price:14.00},{subCat:'blue',price:7.25},{subCat:'black',price:25.00}],
          rake:[{subCat:'red',price:11.50},{subCat:'white',price:12.00},{subCat:'blue',price:21.25},{subCat:'black',price:19.00}],
          claw:[{subCat:'red',price:10.50},{subCat:'white',price:14.00},{subCat:'blue',price:7.25},{subCat:'black',price:25.00}],
          fence:[{subCat:'red',price:11.50},{subCat:'white',price:12.00},{subCat:'blue',price:21.25},{subCat:'black',price:19.00}],
          boot:[{subCat:'red',price:10.50},{subCat:'white',price:14.00},{subCat:'blue',price:7.25},{subCat:'black',price:25.00}],
          hose:[{subCat:'red',price:11.50},{subCat:'white',price:12.00},{subCat:'blue',price:21.25},{subCat:'black',price:19.00}],
          grass:[{subCat:'red',price:11.50},{subCat:'white',price:12.00},{subCat:'blue',price:21.25},{subCat:'black',price:19.00}],
          pump:[{subCat:'red',price:10.50},{subCat:'white',price:14.00},{subCat:'blue',price:7.25},{subCat:'black',price:25.00}],
          waterer:[{subCat:'red',price:11.50},{subCat:'white',price:12.00},{subCat:'blue',price:21.25},{subCat:'black',price:19.00}],
          mower:[{subCat:'red',price:10.50},{subCat:'white',price:14.00},{subCat:'blue',price:7.25},{subCat:'black',price:25.00}],
          lilShovel:[{subCat:'red',price:11.50},{subCat:'white',price:12.00},{subCat:'blue',price:21.25},{subCat:'black',price:19.00}],
      },

      shoppingCart:{
        shears2:
        {price:2,
        quantity:1},
        shears1:
        {price:2,
        quantity:1}
      },

      buttonOver : false,

      cartOpacity : false,

      tileClicked : false,

      clickedProd:'flower',

      itemClicked: false,

      clickedProdCat : [1,2,3,4],

      subCat : 'flower',

      tint: ''


  };

//METHODS
  editQuantity = (e, item, val)=>{

    let cart = this.state.shoppingCart;

    cart[item][val] = Number(e.target.value);
    cart[item].cost = cart[item].quantity * cart[item].price;

    this.setState({shoppingCart : cart})

    //this.setState({shoppingCart:{[item] : {[val]:e.target.value}}})

  };
  
  capitalize(word){
    return String.fromCharCode(word.charCodeAt(0)-32) + word.slice(1) 
    }

  setShowCart = ()=>{

    this.setState({
        cartOpacity:!this.state.cartOpacity,

    })
  };

  removeCartItem = (e, item) => {

    let cart = this.state.shoppingCart;

    delete cart[item];

    this.setState({shoppingCart : cart})
  }

  tileClick = (name)=>{
      this.setState({
          //tileClicked:!this.state.tileClicked,
          clickedProd:name,
          firstClick : true,
          //itemClicked : false
      })
  }

  itemClick = (subCat, name, tint)=>{
      this.setState({
          itemClicked :!this.state.itemClicked,
          subCat:subCat,
          clickedItem : name,
          tint : tint
      })

  }

  addToCart = (subCat,name) =>{

        let cart = this.state.shoppingCart

        cart[subCat.subCat +' '+ name] = {
            price : subCat.price,
            quantity : 1
        }

        this.setState({shoppingCart : cart})
    }

render(){
      const cartHide = {width:'0'}
      const cartToggle = this.state.cartOpacity ? cart : {...cart,...cartHide}

      const tints =['#FF0000','#FFFFFF','#006fff','#000000']

      const prodArray = this.state.products[this.state.clickedProd].map((subCat,i)=>
        <ProdItemDevice tint = {tints[i]} addToCart = {this.addToCart} subCat = {subCat} name = {this.state.clickedProd} itemClick = {this.itemClick}/>)


      let itemSelected =
        <div>


            <ProdItemDevice tint = {this.state.tint} itemClick = {this.itemClick} addToCart = {this.addToCart}  subCat = {this.state.subCat} name = {this.state.clickedItem} />

            <div style ={text} onClick = {this.itemClick}>{<br/>}Text text text text Text text text text{<br/>}
                Text text text text Text text text text{<br/>}
                {<br/>}
                Text text text text Text text text text{<br/>}
                Text text text text Text text text text{<br/>}
                Text text text text Text text text text{<br/>}
                {<br/>}
            </div>

        </div>

      const prodSelected = this.state.itemClicked ? itemSelected : prodArray.map((item,i)=><div key = {i}>{item}</div>)

      const mainWindow = this.state.firstClick ? prodSelected :

        <p style = {text}>Wir führen ein sehr breites Sortiment in den verschiedenen
          Bereichen.
          Als "Ihr Versorger vor Ort" bemühen wir uns ständig unser
          Sortiment  zu erweitern und genau das im Geschäft zu
          haben was Sie benötigen.

          Sollte dies einmal nicht der Fall sein, haben wir die
          Möglichkeit durch die Untersützung vieler
          hervorragender Firmen Sonderbestellungen
          schnell und unkompliziert abzuwickeln.
          {<br/>}
      </p>

    return(

        <div name = 'component' style = {Object.assign({},component)}>

            <h2 style={head }>Unser Sortiment</h2>

           {/*SHOWCARTBUTTON*/}
            <div style ={button}>
                <ShowCartBtn click = {this.setShowCart}/>
            </div>

            <div title = 'mainwindow' style = {main}>
              {this.props.test}
                {mainWindow}
            </div>

          {/*SHOPPINGCART*/}
            <div style = {cartToggle}>
              <ShoppingCart
                editQuantity = {this.editQuantity}
                remove = {this.removeCartItem}
                shoppingCart = {this.state.shoppingCart}
                opacity = {this.state.cartOpacity}
                setShowCart = {this.setShowCart}
              />
            </div>

          {/*SHOPPERDEVICE*/}
            <div title = 'shopperBox' style = {shopperBox}>

              <ShopperDevice
                ref = {instance => {this.Shopper = instance}}
                setShowCart = {this.setShowCart}
                addToCart = {this.addToCart}
                products = {this.state.products}
                tileClick = {this.tileClick}
              />

            </div>

          <div style = {{...text,...smalltext}} >Swipe to Browse Products</div>

        </div>
)
  }
}




    function borderCall(){

      return {
       // border : 'dotted '+ color +' 1px'
      }
    }

    function BaseStyle(){
      let args = [].slice.call(arguments[0]);

      args.forEach((pairs)=>this[Object.keys(pairs)[0]] = pairs[Object.keys(pairs)[0]])
      }

    function style(){
      let baseStyle = new BaseStyle(arguments);
      return Object.assign({},baseStyle,borderCall())
    }


  const main = {
      height : '270px',
      marginTop : '2%',
        //border : 'solid teal 3px',
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center'
  }



  const smalltext = {
    fontSize: '3.2vmin',
    padding: 0,
    marginTop : -7
  }

  const text = {
      //height : '60%',
      width : '90%',
      border : 'solid 1px',
      margin:'0',
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'center',
      padding:'2% 2%',
      fontSize: '5.2vmin',
      color : '#443509',fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight : 200,
      background : 'rgba(255,255,255,.3)'
  }

  const cart = {
      //padding : '2%',
      //border : 'solid red',

      position :'absolute',
      display : 'block',
      zIndex : 3,
      width : '54%',
      top : '1%',
      right: '3%',
      transition : '.5s'
  }

  const component = {
      name : 'component',
      borderStyle:'solid solid solid solid',
      borderWidth:'1.5px',
      borderColor :'goldenrod',
      height:'100%',
      width:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent: 'space-between',
      alignItems:'center',
      position : 'relative',
      zIndex : 11
  }

  const shopperBox = {
      zIndex : 1,
      position : 'relative',
      //border : 'solid green 1px',
      height : '22%',
      width : '100%',
      marginBottom : '18%'
  }



  const button = {
      position : 'absolute',
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'flex-end',
      alignItems : 'flex-start',
      right : '3%',
      top : '1%',
      //zIndex : '1',
      //border : 'solid blue .5px',
      width : '40%',
      height : '7%',
      //boxShadow :'-3px 3px 5px DarkGoldenrod',
      //transition : 'box-shadow .5s'
  }

  const head = style(
      {
          margin : '1% 1% -1%'
      }
  )



 

 













