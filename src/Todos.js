import React from 'react';
import TodoRender from './TodoRender';

export const Todos = ({ vewTodo, deleteTodo }) => {
	return (
		<div>
			{vewTodo.map((todos) => (
				<TodoRender name={todos.name} id={todos.id} key={todos.id} deleteTodo={deleteTodo} />
			))}
		</div>
	);
};

export default Todos;
