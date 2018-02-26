import {connect} from 'react-redux'

import {setFilter} from '../reducers/fruits'
import {filteredFruitsSelector} from '../reducers/selectors'

import App from '../components/App'

const mapStateToProps = (state) => ({
  fruits: filteredFruitsSelector(state)
})

const mapDispatchToProps = {
  setFilter
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App)