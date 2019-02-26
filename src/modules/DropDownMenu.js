/**
 * Created by joebien on 7/17/17.
 */

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class DropDownMenu extends Component {

    state ={
        down : false
    }

    handleClick = (node)=>{
        this.setState({down:!this.state.down})
    }


    render() {

        let ulTogl = this.state.down ? ul : Object.assign({},ul,{marginTop : '-60%', opacity : 0})

        let liTogl = this.state.down ? li : Object.assign({},li,{height : '0px', opacity:0, visibility : 'hidden'})

        const routes = ['Home','About','Products','Specials','Contact']

        const links = routes.map((route,key)=>


                <Route key = {key} render={({history}) => (
                    <li  style = {liTogl}
                        onClick={() => {
                            history.push('/' + route)
                            this.props.addModiStyle(route)
                        }}
                    >
                        {route}

                    </li>
                )} />
        )

        return (
            <div onClick = {this.handleClick} style = {dropMenu}>
                <div style = {listTitle}>&#9776;</div>

                <ul style = {ulTogl} >
                    {links}
                </ul>

            </div>
        )
    }
}

////STYLES

const dropMenu = {
    //border : 'solid red 1px',
    // display : 'flex',
    // flexDirection : 'column',
    height : '100%'
}

const listTitle = {
    //border : 'dotted purple 3px',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-end',
    marginRight : '12%'
}

const ul = {
    padding : 0,
    listStyleType: 'none',
    marginTop : '5%',
    //border : 'solid green 1px',
    background : 'linear-gradient(to right, #EFE093, #EFE093 78%, rgba(255,255,255,0) 80%',
    //background :'gold',
    transition : ' .5s'

}

const li = {
    //border : 'solid red 2px',
    margin : '2% -2% 2% 0%',
    padding : '0 9px',
    height : '16px',
    transition : '1s',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-end',
    background : 'lightyellow'
}
