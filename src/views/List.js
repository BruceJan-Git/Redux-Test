import React from 'react'

class List extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      isAll: false
    }
  }

  handleDelete = (id) => {
    this.props.deleteTask(id)
  }

  handleChack = (id) => {
    console.log(id)
    this.props.toggleItem(id)
  }

  toggleAll = () => {
    this.setState ({
      isAll: !this.state.isAll
    },() => {
      this.props.toggleAll(this.state.isAll)
    })
  }
  render() {
    let { todos } = this.props
    let { isAll } = this.state
    let todoTags = todos.map(item => (
      <li key={item.id} className={[item.done ? 'completed' : '', item.isEdit ? 'editing' : ''].join(' ')}>
        <div className="view">
          {/* 状态框√ checked属性在全选的时候是动态的添加 */}
          <input className="toggle" type="checkbox" onChange={this.handleChack.bind(this,item.id)} checked={item.done} />
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
        <input id="toggle-all" className="toggle-all" type="checkbox" defaultChecked={isAll}/>
        <label htmlFor="toggle-all" onClick={this.toggleAll}>Mark all as complete</label>
        <ul className="todo-list">
          {todoTags}
        </ul>
      </section>
    )
  }
}

export default List