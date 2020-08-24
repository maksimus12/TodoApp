import React, { Component } from 'react';

const Todos = ({ toDoList }) => {
	return <div>{toDoList.map((todo) => <div> {todo.content}</div>)}</div>;
};

export default Todos;
