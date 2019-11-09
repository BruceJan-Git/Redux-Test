import React from 'react'

class List extends React.Component {
  render () {
    return (
      <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Taste JavaScript</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" />
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Buy a unicorn</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" />
        </li>
      </ul>
    </section>
    )
  }
}

export default List