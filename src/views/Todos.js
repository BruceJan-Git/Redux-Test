import React from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
// todos css
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [{
        id: 1,
        Etitle: 'key code',
        done: false,
        isEdit: false
      }, {
        id: 2,
        Etitle: 'sing song',
        done: true,
        isEdit: false
      }]
    }
  }
  // 添加etitle/task任务
  addTask = (Etitle) => {
    let ids = this.state.todos.map(item => {
      return item.id
    })
    let maxId = Math.max.apply(null, ids) + 1
    let todo = {
      id: maxId,
      Etitle: Etitle,
      done: false
    }
    this.setState ({
      todos: [...this.state.todos, todo]
    })
  }
  // 删除deleteTask任务
  deleteTask = (id) => {
    let todos = [...this.state.todos]
    let index = todos.findIndex(item => {
      return item.id === id
    })
    todos.splice(index,1)
    this.setState ({
      todos: todos
    })
  }
  render() {
    let { todos } = this.state
    return (
      <div>
        <section className="todoapp">
          <Header addTask={this.addTask} />
          <List 
          todos={todos}
          deleteTask={this.deleteTask}/>
          <Footer />
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
          <p>Created by <a href="http://todomvc.com">you</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    )
  }
}


export default TodoApp