import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content : null
    }

    newTodo = (e) => {
        this.setSate({
            [e.target.id]: e.tatrget.value
        })  
    }

        onSubmitFun = (e) => {
            e.preventDefault();
            this.props.AddTodo(this.state);
        }




    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmitFun }>
                     <input type="text" id="content" onChange={ this.newTodo }/>
                    <button>Submit</button>
                </form>
              

            </div>
        );
    }
}

export default AddTodo;
