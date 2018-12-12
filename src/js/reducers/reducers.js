import {
  ADD_ARTICLE,
  UPDATE_WALL_SIZE,
  UPDATE_MAZE_WIDTH,
  UPDATE_MAZE_HEIGHT
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

const testState = {
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

const rootReducer = (state = initialState, action) => {
  if(action.type == ADD_ARTICLE){
    return { ...state, articles: [...state.articles, action.payload] };
  }
  if(action.type == UPDATE_WALL_SIZE){
    return Object.assign({}, state, {
      mazeValues: {
        mazeType: state.mazeValues.mazeType,
        mazeWallSize: action.payload,
        mazeWidth: state.mazeValues.mazeWidth,
        mazeHeight: state.mazeValues.mazeHeight
      }
    });
  }
  if(action.type == UPDATE_MAZE_WIDTH){
    return Object.assign({}, state, {
      mazeValues: {
        mazeType: state.mazeValues.mazeType,
        mazeWallSize: state.mazeValues.mazeWallSize,
        mazeWidth: action.payload,
        mazeHeight: state.mazeValues.mazeHeight
      }
    });
  }
  if(action.type == UPDATE_MAZE_HEIGHT){
    return Object.assign({}, state, {
      mazeValues: {
        mazeType: state.mazeValues.mazeType,
        mazeWallSize: state.mazeValues.mazeWallSize,
        mazeWidth: state.mazeValues.mazeWidth,
        mazeHeight: action.payload
      }
    });
  }
  return state;
};

export default rootReducer;
