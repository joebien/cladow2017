import React, { Component } from 'react'
import Prod from './ProdDevice'



export default class CarouselDevice extends Component {

    state={
        clicked:false
    }
    images = []
    prodArray = []
    styles = []
    colors = ['red', 'white', 'blue','black','teal','yellow']


    importAll = (r)=>{
        return r.keys().map(r);
    }

componentDidMount(){
    this.shiftStyles()
}

    loadStyles =()=> {
        if (this.styles.length > 0) return

        for (let i = 0; i < 6; i++) {
            this.styles.push(
                {
                    opacity : Number((i * .166).toFixed(1))+ .2,
                    position : 'absolute',
                    top : i * 11,
                    left:i*15,
                    width : i*17 + '%',
                    zIndex : i,
                    fontSize : '200%',
                    info : false,

                    transition : 'width .5s .2s, top .5s .2s, left .5s .2s, opacity .5s 0s',

                }
            )
        }

        this.styles[5].info = true

    }

    shiftStyles = ()=>{
        this.setState({clicked:!this.state.clicked})
        this.styles.push(this.styles.shift())

    }

    loadProdArray = ()=>{
        for (let i=0;i<6;i++){
            this.prodArray.push(<Prod color = {this.colors[i]} style = {this.styles[i]}/>)
        }
    }

    imgPath =(n)=>{
       return '../../img/specials/special-1.jpg'
    }

    // getInfo = (n)=> {
    //     this.specText['i' + n]
    // }

render(){
    const images = this.importAll(require.context('../../img/specials', false, /\.(png|jpe?g|svg)$/));

    this.loadStyles()
    this.loadProdArray()

    return(
        <div  style = {component} onClick={this.shiftStyles}>

            <Prod  item = {0} image = {images[0]} style = {this.styles[0]}/>
            <Prod  item = {1} image = {images[1]} style = {this.styles[1]}/>
            <Prod  item = {2} image = {images[2]} style = {this.styles[2]}/>
            <Prod  item = {3} image = {images[3]} style = {this.styles[3]}/>
            <Prod  item = {4} image = {images[4]} style = {this.styles[4]}/>
            <Prod  item = {5} image = {images[5]} style = {this.styles[5]}/>

        </div>
    )

}

}

const component ={

    height: '25%',
    //border : 'solid teal'
}