import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Etitle:''
    }
  }
  
  handleAddTask = (e) => {
    this.setState ({
      Etitle: e.target.value
    })

  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.addTask(this.state.Etitle)
      this.setState ({
        Etitle: ''
      })
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          value={this.state.Etitle}
          onChange={this.handleAddTask}
          onKeyUp={this.handleKeyUp}
          className="new-todo"
          placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default Header