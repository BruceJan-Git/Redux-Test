import React from 'react'

class List extends React.Component {

  render() {
    let { todos } = this.props
    let todoTags = todos.map(item => (
      <li key={item.id} className={[item.done ? 'completed' : '', item.isEdit ? 'editing' : ''].join(' ')}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{item.Etitle}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" />
      </li>
    ))
    return (
      <section className="main">
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