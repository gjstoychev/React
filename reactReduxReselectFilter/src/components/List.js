import React from 'react'
import PropTypes from 'prop-types'

const List = ({fruits}) => {
  return (
    <ul>
      {fruits.map(item => (<li key={item.id}>{item.name}</li>))}
    </ul>
  )
}

List.propTypes = {
  fruits: PropTypes.array.isRequired
}

export default List