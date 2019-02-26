/////PARENT COMPONENT

import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

	state = {}

	getValue = (childValue)=>{
		this.setState({childValue:childValue})
	}

	render(){
		return(
			<Child getValue = this.getValue/>
			{this.state.childValue}
			)
	}
}


//////CHILD COMPONENT

import React, { Component } from 'react'

export default class Child extends Component {

	state = {childValue:'testPositive22'}

	componentWillMount(){
		this.props.getValue(this.state.childValue)
	}

	render(){
		return(<div>child</div>)
	}

}


