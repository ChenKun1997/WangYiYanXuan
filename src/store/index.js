import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import homeReducer from '../pages/home/Root/reducer';
import cateReducer from '../pages/category/Root/reducer'


const reducer = combineReducers({
    home:homeReducer,
    cate:cateReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
  ));

  export default store;