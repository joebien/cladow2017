import React, { Component } from 'react'



export default class Arrows extends Component {



    render(){

        let flipp = this.props.flip === 'left' ? 'scale(-1,1) translate(20, 7)' : 'scale(1,1) translate(0, 7)'

    	const rArrow =   <svg version="1.1" id="Layer_1"  x="0px" y="0px" width="48.234px" height="48.208px" viewBox="0 0 22 22" transform = {flipp} >
			<g opacity="0.2">
				<path fill="none" stroke="#15FF38" d="M1.645,1.001l8.923,8.468c0.079,0.075,0.079,0.196,0,0.271l-8.923,8.468"/>
			</g>
			<g opacity="0.4">
				<path fill="none" stroke="#15FF38"  d="M4.512,1.001l8.922,8.468c0.08,0.075,0.08,0.196,0,0.271l-8.922,8.468"/>
			</g>
			<g opacity="0.6">
				<path fill="none" stroke="#15FF38"  d="M7.044,1.001l8.923,8.468c0.08,0.075,0.08,0.196,0,0.271l-8.923,8.468"/>
			</g>
			<g opacity="0.8">
				<path fill="none" stroke="#15FF38"  d="M9.896,1.001l8.923,8.468c0.08,0.075,0.08,0.196,0,0.271l-8.923,8.469"/>
			</g>
		</svg>

        return(
<div>
			{rArrow}
</div>
        )
    }





}