import { createStore, combineReducers } from 'redux';
import { mazeReducer, abstractReducer } from '../reducers/reducers.js';

const rootReducer = combineReducers({
  maze: mazeReducer,
  abstract: abstractReducer
});

const store = createStore(rootReducer);

export default store;
