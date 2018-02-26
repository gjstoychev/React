export const SET_FILTER = 'SET_FILTER'

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})

const setFilterHandler = (state, {filter}) => {
  const newState = {
    ...state,
    filter
  }

  return newState
}

const ACTION_HANDLERS = {
  [SET_FILTER]: setFilterHandler
}

const startingFruits = {
  'id1': {id: 'id1', name: 'Apple', value: 11},
  'id2': {id: 'id2', name: 'Banana', value: 12},
  'id3': {id: 'id3', name: 'Carrot', value: 13},
  'id4': {id: 'id4', name: 'Pinapple',value: 14},
  'id5': {id: 'id5', name: 'Kiwi',value: 15},
}

const initialState = {
  items: startingFruits,
  filter: ''
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}