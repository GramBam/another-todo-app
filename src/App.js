import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var todos = [
  {
    todoTitle: 'My First Todo',
    todoResponsible: 'Graham',
    todoDescription: 'My first todo description',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My Second Todo',
    todoResponsible: 'Graham',
    todoDescription: 'My second todo description',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'My Third Todo',
    todoResponsible: 'Graham',
    todoDescription: 'My third todo description',
    todoPriority: 'high'
  }
]

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos
    }
  }
  render() {
    return (
      <div className="container">
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle}</h4>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
