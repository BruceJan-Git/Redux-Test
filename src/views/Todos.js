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
        Etitle: '写代码',
        done: false,
      }, {
        id: 2,
        Etitle: '去K歌',
        done: true,
      }]
    }
  }

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

  render() {
    let { todos } = this.state
    return (
      <div>
        <section className="todoapp">
          <Header addTask={this.addTask} />
          <List todos={todos} />
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