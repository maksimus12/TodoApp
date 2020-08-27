import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component {
	state = {
		toDoList : []
	};

	addTodo = (name) => {
		const newState = [ ...this.state.toDoList, { id: Math.random(), name } ];
		this.setState({
			toDoList : newState
		});
		console.log(this.state.toDoList);
	};

	deleteTodo = (id) => {
		const filtredList = this.state.toDoList.filter((todo) => todo.id !== id);
		this.setState({
			toDoList : filtredList
		});
	};

	render() {
		return (
			<div>
				<h1>To do app</h1>

				<Todos vewTodo={this.state.toDoList} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
