import React, { Component } from 'react';

class AddTodo extends Component {
	state = {
		name : ''
	};

	handleChange = (e) => {
		this.setState({
			name : e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.name.length !== 0) {
			this.props.addTodo(this.state.name);
			this.setState({
				name : ''
			});
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.name}
						placeholder="your todo here"
						onChange={this.handleChange}
					/>
					<button>Sbmit</button>
				</form>
			</div>
		);
	}
}

export default AddTodo;
