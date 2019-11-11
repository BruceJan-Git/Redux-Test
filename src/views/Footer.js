import React from 'react'
class Footer extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      currentType: 'all'
    }
  }
  
  handleFilter = (e) => {
    // console.log(e.target.dataset)
    let id = e.target.dataset.id
    if (!id) {
      return
    }
    this.setState ({
      currentType: id
    })
    this.props.handleFilter(id)
  }

  handleClear = () => {
    this.props.clearAll()
  }
  
  render() {
    let { num } = this.props
    let { currentType } = this.state
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{num}</strong> item left</span>
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
        <button className="clear-completed" onClick={this.handleClear}>Clear completed</button>
      </footer>
    )
  }
}

export default Footer