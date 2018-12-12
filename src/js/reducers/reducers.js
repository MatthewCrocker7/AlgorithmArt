import {
  ADD_ARTICLE,
  UPDATE_WALL_SIZE,
  UPDATE_MAZE_WIDTH,
  UPDATE_MAZE_HEIGHT,
  UPDATE_MAZE
} from '../constants/action-types.js';

const initialState = {
  articles: [],
  mazeValues: {
    mazeType: '',
    mazeWallSize: 10,
    mazeWidth: 500,
    mazeHeight: 500
  },
};

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

const rootReducer = (state = mazeInitState, action) => {
  if(action.type == ADD_ARTICLE){
    return { ...state, articles: [...state.articles, action.payload] };
  }
  if(action.type == UPDATE_WALL_SIZE){
    return Object.assign({}, state, {
      mazeWallSize: {
        id: state.mazeWallSize.id,
        value: action.payload,
      }
    });
  }
  if(action.type == UPDATE_MAZE_WIDTH){
    return Object.assign({}, state, {
      mazeWidth: {
        id: state.mazeWidth.id,
        value: action.payload,
      }
    });
  }
  if(action.type == UPDATE_MAZE_HEIGHT){
    return Object.assign({}, state, {
      mazeHeight: {
        id: state.mazeHeight.id,
        value: action.payload,
      }
    });
  }
  if(action.type == UPDATE_MAZE){
    return Object.assign({}, state);
  }
  return state;
};

export default rootReducer;
