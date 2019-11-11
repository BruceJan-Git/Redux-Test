import React from 'react'

class List extends React.Component {

  handleDelete = (id) => {
    this.props.deleteTask(id)
  }

  handleChack = (id) => {
    this.props.toggleItem(id)
  }
  render() {
    let { todos } = this.props
    let todoTags = todos.map(item => (
      <li key={item.id} className={[item.done ? 'completed' : '', item.isEdit ? 'editing' : ''].join(' ')}>
        <div className="view">
          {/* 状态框√ */}
          <input className="toggle" type="checkbox" onChange={this.handleChack.bind(this,item.id)} />
          {/* 输入内容 */}
          <label>{item.Etitle}</label>
          {/* 删除按钮X */}
          <button className="destroy" onClick={this.handleDelete.bind(this,item.id)}></button>
        </div>
        <input className="edit" />
      </li>
    ))
    return (
      <section className="main">
        {/* herder总状态控制框 */}
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todoTags}
        </ul>
      </section>
    )
  }
}

export default List