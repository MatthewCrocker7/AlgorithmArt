import {
  UPDATE_WALL_SIZE,
  UPDATE_MAZE_WIDTH,
  UPDATE_MAZE_HEIGHT,
  UPDATE_MAZE,
  UPDATE_ABSTRACT
} from '../constants/action-types.js';
import { combineReducers } from 'redux';

const mazeInitState = {
  mazeType: '',
  mazeWallSize: {
    id: 'mazeWallSize',
    value: 10
  },
  mazeWidth: {
    id: 'mazeWidth',
    value: 500
  },
  mazeHeight: {
    id: 'mazeHeight',
    value: 500
  }
};

const abstractInitState = {
  abstractType: '',
  abstractPixelSize: {
    id: 'abstractPixelSize',
    value: 2
  },
  abstractWidth: {
    id: 'abstractWidth',
    value: 400
  },
  abstractHeight: {
    id: 'abstractHeight',
    value: 400
  }
};

export const mazeReducer = (state = mazeInitState, action) => {
  if(action.type == UPDATE_MAZE){
    switch(action.id) {
      case state.mazeWallSize.id:
        return Object.assign({}, state, {
          mazeWallSize: {
            id: state.mazeWallSize.id,
            value: action.payload,
          }});
        break;
      case state.mazeWidth.id:
        return Object.assign({}, state, {
          mazeWidth: {
            id: state.mazeWidth.id,
            value: action.payload,
          }});
        break;
      case state.mazeHeight.id:
        return Object.assign({}, state, {
          mazeHeight: {
            id: state.mazeHeight.id,
            value: action.payload,
          }});
        break;
      default:
        break;
    }
    return Object.assign({}, state);
  }
  return state;
};

export const abstractReducer = (state = abstractInitState, action) => {
  if(action.type == UPDATE_ABSTRACT){
    switch(action.id) {
      case state.abstractPixelSize.id:
        return Object.assign({}, state, {
          abstractPixelSize: {
            id: state.abstractPixelSize.id,
            value: action.payload,
          }});
        break;
      case state.abstractWidth.id:
        return Object.assign({}, state, {
          abstractWidth: {
            id: state.abstractWidth.id,
            value: action.payload,
          }});
        break;
      case state.abstractHeight.id:
        return Object.assign({}, state, {
          abstractHeight: {
            id: state.abstractHeight.id,
            value: action.payload,
          }});
        break;
      default:
        break;
    }
    return Object.assign({}, state);
  }
  return state;
};


//export default rootReducer;
