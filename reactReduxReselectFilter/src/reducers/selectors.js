import { createSelector } from 'reselect'

export const itemsSelector = state => state.fruits.items

export const filterSelector = state => state.fruits.filter

export const filteredFruitsSelector = createSelector(
  [itemsSelector, filterSelector],
  (fruits, filter) => {
    if (filter) {
      const filteredFruits = Object.values(fruits).filter(e => e.name.toLowerCase().indexOf(filter.toLowerCase()) > -1)

      return filteredFruits
    }
    const arrayOfFruits = Object.keys(fruits).map(id => fruits[id])

    return arrayOfFruits
  }
)