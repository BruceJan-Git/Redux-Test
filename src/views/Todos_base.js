import React from 'react'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      isAll: false,
      currentType: 'all',
      todos: [{
        id: 1,
        task: 'Taste JavaScript',
        done: false,
        isEdit: false
      }, {
        id: 2,
        task: 'Buy a unicorn',
        done: true,
        isEdit: false
      }]
    }
    this.inputFocus = React.createRef()
  }
  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handlekeyup = (e) => {
    if (e.keyCode === 13) {
      let ids = this.state.todos.map(item => {
        return item.id
      })
      // console.log(ids)
      let maxid = Math.max.apply(null, ids) + 1
      let todo = {
        id: maxid,
        task: this.state.title,
        done: false
      }
      this.setState({
        todos: [...this.state.todos, todo],
        title: ''
      })
    }
  }
  handleDelete = (id) => {
    let todos = [...this.state.todos]
    let index = todos.findIndex(item => {
      return item.id === id
    })
    todos.splice(index, 1)
    this.setState({
      todos: todos
    })
  }
  handleChackAll = () => {
    this.setState({
      isAll: !this.state.isAll
    }, () => {
      let todos = [...this.state.todos]
      todos.forEach(item => {
        item.done = this.state.isAll
      })
      this.setState({
        todos: todos
      })
    })
  }
  handleChecked = (id) => {
    let todos = [...this.state.todos]
    todos.map(item => {
      if (item.id === id) {
        return item.done = !item.done
      }
      return false
    })
    this.setState({
      todos: todos
    })
  }
  handleCount = () => {
    let num = 0
    this.state.todos.forEach(item => {
      if (item.done) {
        num += 1
      }
    })
    return num
  }
  handleEditTask = (id, e) => {
    let todos = [...this.state.todos]
    todos.map(item => {
      if (item.id === id) {
        item.task = e.target.value
      }
      return false
    })
    this.setState({
      todos: todos
    })
  }
  handleDoubleClick = (id, e) => {
    let input = e.target.parentNode.nextSibling
    setTimeout(() => {
      input && input.focus()
    }, 0);
    let todos = [...this.state.todos]
    todos.some(item => {
      if (item.id === id) {
        return item.isEdit = !item.isEdit
      }
      return false
    })
    this.setState({
      todos: todos
    })
  }
  handleFilter = (e) => {
    let id = e.target.dataset.id
    if (!id) {
      return false
    }
    this.setState({
      currentType: e.target.dataset.id
    })
  }
  handleFilterDate = () => {
    let { todos, currentType } = this.state
    return todos.filter(item => {
      if (currentType === 'all') {
        return true
      } else if (currentType === 'active' && !item.done) {
        return true
      } else if (currentType === 'completed' && item.done) {
        return true
      } else {
        return false
      }
    })
  }
  handleClearDone = () => {
    let todos = this.state.todos.filter(item => {
      return !item.done
    })
    this.setState({
      todos: todos
    })
  }
  render() {
    let { todos, title, isAll, currentType } = this.state
    todos = this.handleFilterDate()
    let todotags = todos.map(item => (
      <li className={[item.done ? 'completed' : '', item.isEdit ? 'editing' : ''].join(' ')} key={item.id}>
        <div className="view" onDoubleClick={this.handleDoubleClick.bind(this, item.id)}>
          <input className="toggle" type="checkbox" checked={item.done} onChange={this.handleChecked.bind(this, item.id)} />
          <label>{item.task}</label>
          <button className="destroy" onClick={this.handleDelete.bind(this, item.id)}></button>
        </div>
        <input className="edit" onChange={this.handleEditTask.bind(this, item.id)} value={item.task} onBlur={this.handleDoubleClick.bind(this, item.id)} />
      </li>
    ))
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            {/* <input onChange={this.handleChange} value={title} onKeyUp={this.handlekeyup} className="new-todo" placeholder="What needs to be done?" autoFocus /> */}
            <input onChange={this.handleChange} value={title} onKeyUp={this.handlekeyup} className="new-todo" placeholder="What needs to be done?" ref={this.inputFocus} />
          </header>
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" defaultChecked={isAll} />
            <label htmlFor="toggle-all" onClick={this.handleChackAll}>Mark all as complete</label>
            <ul className="todo-list">
              {todotags}
            </ul>
          </section>
          <footer className="footer">
            <span className="todo-count"><strong>{this.handleCount()}</strong> item left</span>
            <ul className="filters" onClick={this.handleFilter}>
              <li>
                <a data-id='all' className={currentType === 'all' ? 'selected' : ''} href="#/">All</a>
              </li>
              <li>
                <a data-id='active' className={currentType === 'active' ? 'selected' : ''} href="#/active">Active</a>
              </li>
              <li>
                <a data-id='completed' className={currentType === 'completed' ? 'selected' : ''} href="#/completed">Completed</a>
              </li>
            </ul>
            <button className="clear-completed" onClick={this.handleClearDone}>Clear completed</button>
          </footer>
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
  componentDidMount() {
    this.inputFocus.current.focus()
  }
}

export default TodoApp