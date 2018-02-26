import React from 'react'
import PropTypes from 'prop-types'

import List from './List'
import Filter from './Filter'

import './App.css'

const App = ({fruits, setFilter}) => {
  return (
    <div className='App'>
      <Filter setFilter={setFilter} />
      <List fruits={fruits} />
    </div>
  )
}

App.propTypes = {
  fruits: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default App