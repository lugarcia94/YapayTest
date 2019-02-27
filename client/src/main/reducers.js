import { combineReducers } from 'redux'  
import { apiData, removeItem, adicionaItem } from '../reducers/reducer'

export default combineReducers({   
    retornoDb: apiData,
    removeItem,
    adicionaItem
})

