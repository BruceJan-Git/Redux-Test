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
    this.props.toggleItem(id)
  }

  toggleAll = () => {
    this.setState ({
      isAll: !this.state.isAll
    },() => {
      this.props.toggleAll(this.state.isAll)
    })
  }

  handleDouble = (id,e) => {
    // console.log(this)
    // console.log('id'+id)
    // console.log('event'+e)
    // console.log(e.target.parentNode.nextSibling)
    this.props.showEditInput(id)
    let input = e.target.parentNode.nextSibling
    setTimeout(() => {
      input&&input.focus()
    },0)
  }

  handleEditTask = (id,e) => {
    console.log('id'+ id)
    console.log('e'+ e)
    console.log(this)
    this.props.EditTask(id,e.target.value)
  }

  render() {
    let { todos } = this.props
    let { isAll } = this.state
    let todoTags = todos.map(item => (
      <li key={item.id} className={[item.done ? 'completed' : '', item.isEdit ? 'editing' : ''].join(' ')}>
        <div className="view" onDoubleClick={this.handleDouble.bind(this,item.id)}>
          {/* 状态框√ checked属性在全选的时候是动态的添加 */}
          <input className="toggle" type="checkbox" onChange={this.handleChack.bind(this,item.id)} checked={item.done} />
          {/* 输入内容 */}
          <label>{item.Etitle}</label>
          {/* 删除按钮X */}
          <button className="destroy" onClick={this.handleDelete.bind(this,item.id)}></button>
        </div>
        {/* 编辑状态的输入框 */}
        <input className="edit" onBlur={this.handleDouble.bind(this,item.id)} onChange={this.handleEditTask.bind(this,item.id)} value={item.Etitle}/>
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