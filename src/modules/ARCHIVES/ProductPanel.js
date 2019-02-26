/**
 * Created by joebien on 8/4/17.
 */
import React, { Component } from 'react'
// import ProductInfoDevice from './ProductInfo'
// import NavArrows from './NavArrows'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';


export default class ProductPanel extends Component {


    state = {

    }

    handleClick(select){ // Hide opening Graphic & load values of selected aniIcon to state.productInfo synced to prodItem

        this.setState({
            showFill : false,
            showProdInfo : 1
        })  //Turn off opening graphic

        if (select){
            this.setState(

                {productInfo:{
                    toolName:select,
                    info:this.props.products[select]}}
            )}

        else {this.setState({productInfo:{info:''}})}
    }


    render(){

        return(
            <div style = {component}>
                <div>{this.props.name}</div>
                <div><img alt = {this.props.name}
                          // src = {'https://joebien.github.io/img/singleIcons/' + this.props.name + '.svg'}/>
                </div>
            </div>
        )
    }
}


//Styles

const component = {

    //border:'solid red',
    display:'flex',
    flexDirection:'column',
    position:'relative',
    alignItems:'center',
    justifyContent : 'flex-start',
    height:'100%',
    width:'27%',
}

const divit ={
    fontSize :'600%',
    border:'solid red 1px',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around'
}

const icon = {

    border : 'solid teal'
}






// const info = {
//   overflow : 'hidden',
//     height : '85%',
//     width : '100%',
//     top : '-38%',
//     zIndex : '33',
//     border : 'dotted red 3px',
//     position :'absolute',
//     display:'flex',
//     flexDirection : 'row',
//     justifyItems: 'space-around',
//     //marginBottom : '.5%'
//     // alignContent:'center',
//   }

const aniIcon = {
    height :'100%',
    width:'39vw',
    display :'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    //border:'solid green 1px',
    marginRight:'.2%',
    marginLeft:'.2%',

    position:'relative',
    background : '',

    transition: 'all .4s cubic-bezier(.58,-0.01,.12,1.47)',
}



const img = {
    //cursor:'pointer',
    width:'100%',
    //border:'solid .5px'
}







