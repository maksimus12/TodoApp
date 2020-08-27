import React from 'react';

const TodoRender = ({ name, deleteTodo, id }) => {
	return (
		<div>
			<ul>
				<li>
					<h3 onClick={() => deleteTodo(id)}>{name}</h3>
				</li>
			</ul>
		</div>
	);
};

export default TodoRender;
