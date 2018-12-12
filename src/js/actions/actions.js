import {
  ADD_ARTICLE,
  UPDATE_WALL_SIZE,
  UPDATE_MAZE_WIDTH,
  UPDATE_MAZE_HEIGHT
} from "../constants/action-types.js";

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

export const updateWallSize = wallSize => ({
  type: UPDATE_WALL_SIZE,
  payload: wallSize
});

export const updateMazeWidth = width => ({
  type: UPDATE_MAZE_WIDTH,
  payload: width
});

export const updateMazeHeight = height => ({
  type: UPDATE_MAZE_HEIGHT,
  payload: height
});
