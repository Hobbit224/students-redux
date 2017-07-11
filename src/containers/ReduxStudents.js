import React, {Component} from 'react'

import { bindActionCreators } from 'redux'


import {connect} from 'react-redux'

import SelectStudent from '../actions/SelectStudentAction'

import Timer from '../actions/TimerAction'

class ReduxStudents extends Component{

	componentDidMount() {
		setInterval(()=>{
			this.props.timer
		},1000)
	}

	render(){
		// console.log(this.props.students)
		var studentsArray = [];
		this.props.students.map((student,index)=>{
			studentsArray.push(
				<li
				key={index}
				onClick={()=> {this.props.selectStudent(student)}}
				>
					{student}
				</li>)
		})
		return(
			<div>
				<h1>This is ReduxStudents</h1>
				{studentsArray}
				<hr />
				{this.props.selectedStudent} is selected
				<hr/>
				{this.props.timerAction} is the current time
			</div>
			
		)
	}

}

function mapStateToProps(state){
	return{
		students: state.students,
		selectedStudent: state.selectedStudent,
		timerAction: state.timer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		selectStudent: SelectStudent,
		timer: Timer
	}, dispatch)
}

// connect takes 2 arguments WHICH RETURN A FUNCTION that takes 1 argument 
// - connect takes state mapping function (so its available in component props)
// - connect takes action mapping function (ditto)
// - the return function of the connect function takes a component

export default connect(mapStateToProps,mapDispatchToProps)(ReduxStudents);