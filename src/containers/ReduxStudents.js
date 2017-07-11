import React, {Component} from 'react'

import { bindActionCreators } from 'redux'


import {connect} from 'react-redux'

import SelectStudent from '../actions/SelectStudent'

class ReduxStudents extends Component{
	render(){
		// console.log(this.props.students)
		var studentsArray = [];
		this.props.students.map((student,index)=>{
			studentsArray.push(
				<li key={index}>
					{student}
				</li>)
		})
		return(
			<div>
				<h1>This is ReduxStudents</h1>
				{studentsArray}
			</div>
			
		)
	}

}

function mapStateToProps(state){
	return{
		students: state.students
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		selectStudent: SelectStudent
	}, dispatch)
}

// connect takes 2 arguments WHICH RETURN A FUNCTION that takes 1 argument 
// - connect takes state mapping function (so its available in component props)
// - connect takes action mapping function (ditto)
// - the return function of the connect function takes a component

export default connect(mapStateToProps,mapDispatchToProps)(ReduxStudents);