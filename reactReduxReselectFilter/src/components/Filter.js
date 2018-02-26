import React from 'react'
import PropTypes from 'prop-types'

class Filter extends React.Component {
  static propTypes = {
    setFilter: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange ({target}) {
    const {setFilter} = this.props
    
    setFilter(target.value)
  }

  render() {
    return (
      <input type='text' placeholder='Filter' onChange={this.handleFilterChange} />
    )
  }
}

export default Filter
