import React, { Component } from 'react';
import AddTodo from './addTodo'
import Todos from './Todos'


class App extends Component {

state ={
  toDoList : [
    {id:1, content: "Milk"},
    {id:2, content: "Coffe"}

  ]
}

addTodo=(newTodo)=>{
  newTodo.id = Math.random();
  let newtodoItem = [...this.state.toDoList, newTodo]
  this.setState({
    toDoList: newtodoItem 
  })

}

deleteTodo

  render() {
    return (
      <div>
        <h1>To-do List</h1>


      <Todos toDoList={this.state.toDoList} deleteTodo = {this.deleteTodo}/>
      <AddTodo addTodo = {this.addTodo} />

      </div>
    );
  }
}



export default App;
