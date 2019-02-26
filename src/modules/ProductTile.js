/**
 * Created by joebien on 8/4/17.
 */
import React, { Component } from 'react'
// import ProductInfoDevice from './ProductInfo'
// import NavArrows from './NavArrows'

export default class ProductTile extends Component {

    state = {

    }

    render(){

        return(
            <div onClick = {()=>this.props.tileClick(this.props.name)} style = {component}>
                <div>{this.props.name}</div>
                <div><img style = {img} alt = {this.props.name}
                          // src = {'https://joebien.github.io/img/singleIcons/' + this.props.name+ '.svg'}
                />
                </div>
            </div>
        )
    }
}

//Styles

const component = {

    border:'solid .5px',
    display:'flex',
    flexDirection:'column',
    position:'relative',
    alignItems:'center',
    justifyContent : 'flex-start',
    height:'100%',
    //width:'27%',
    background : 'rgba(255,255,255,.2)'
}

const img = {
    //cursor:'pointer',
    width:'27vw',
    //border:'solid .5px'
}












