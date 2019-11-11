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
      currentType: 'all',
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
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  // 删除deleteTask任务
  deleteTask = (id) => {
    let todos = [...this.state.todos]
    let index = todos.findIndex(item => {
      return item.id === id
    })
    todos.splice(index, 1)
    this.setState({
      todos: todos
    })
  }
  // 控制是否完成或未完成任务
  toggleItem = (id) => {
    let todos = [...this.state.todos]
    todos.some(item => {
      if (item.id === id) {
        item.done = !item.done
        return true
      }
      return false
    })
    this.setState({
      todos: todos
    })
  }
  // 控制所有列表的选中与否
  toggleAll = (isAll) => {
    let todos = [...this.state.todos]
    todos.map(item => {
      item.done = isAll
      return false
    })
    this.setState({
      todos: todos
    })
  }
  // 双击编辑或取消编辑
  showEditInput = (id) => {
    let todos = [...this.state.todos]
    todos.some(item => {
      if (item.id === id) {
        item.isEdit = !item.isEdit
        return true
      }
      return false
    })
    this.setState({
      todos: todos
    })
  }
  // 双击编辑时进行的操作
  EditTask = (id, value) => {
    console.log(id, value)
    let todos = [...this.state.todos]
    todos.some(item => {
      if (item.id === id) {
        item.Etitle = value
        return true
      }
      return false
    })
    this.setState({
      todos: todos
    })
  }
  // 计算未完成任务->done为false
  handleCount = () => {
    let num = 0
    this.state.todos.forEach(item => {
      if (!item.done) {
        num += 1
      }
    })
    return num
  }
  // 清除已完成任务
  clearAll = () => {
    let todos = this.state.todos.filter(item => {
      return !item.done
    })
    this.setState({
      todos: todos
    })
  }
  // footer底部类型切换
  handleFilter = (currentType) => {
    this.setState({
      currentType: currentType
    })
  }
  // footer功能切换筛选
  filterList = (currentType) => {
    let { todos } = this.state
    return todos.filter(item => {
      if (currentType === 'all') {
        return true
      } else if (currentType === 'active' && !item.done) {
        // 未完成
        return true
      } else if (currentType === 'completed' && item.done) {
        return true
      } else {
        return false
      }
    })
  }
  render() {
    let { todos, currentType } = this.state
    todos = this.filterList(currentType)
    return (
      <div>
        <section className="todoapp">
          <Header addTask={this.addTask} />
          <List
            todos={todos}
            deleteTask={this.deleteTask}
            toggleItem={this.toggleItem}
            toggleAll={this.toggleAll}
            showEditInput={this.showEditInput}
            EditTask={this.EditTask} />
          <Footer num={this.handleCount()} handleFilter={this.handleFilter} clearAll={this.clearAll} />
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