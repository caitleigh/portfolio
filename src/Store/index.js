import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import toggleViewReducer from '../Reducers/toggleView';

const reducers = combineReducers({
    toggleView: toggleViewReducer
})

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();