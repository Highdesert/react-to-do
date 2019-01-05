import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { description: 'Walk the cat', isCompleted: true },
                { description: 'Throw the dishes away', isCompleted: false },
                { description: 'Buy new dishes', isCompleted: true }
            ], 
            newTodosDescription: ''
        };
    }
    
    deleteTodo() {
      console.log('clicked');
    }

    handleChange(e) {
      this.setState({ newTodoDescription: e.target.value })
    }

    handleSubmit(e) {
      if(!this.state.newTodoDescription) { return }
      e.preventDefault();
      const newTodo = { description: this.state.newTodoDescription, isComplete: false }; 
      this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' }); 
    }

    toggleComplete(index) {
        const todos = this.state.todos.slice();
        const todo = todos[index];
        todo.isCompleted = todo.isCompleted ? false : true;
        this.setState({ todos: todos });
    }

    render() {
        return (
            <div className="App">
      <ul>
          { this.state.todos.map( (todo, index) => 
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index)} deleteTodo={this.deleteTodo} />
          )} 
    
      </ul>
        
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
        

      </div>

        );
    }
}

export default App;