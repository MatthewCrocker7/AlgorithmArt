import {
  UPDATE_WALL_SIZE,
  UPDATE_MAZE_WIDTH,
  UPDATE_MAZE_HEIGHT,
  UPDATE_MAZE,
  UPDATE_ABSTRACT
} from "../constants/action-types.js";

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

export const updateMaze = (id, update) => ({
  type: UPDATE_MAZE,
  id: id,
  payload: update
});

export const updateAbstract = (id, update) => ({
  type: UPDATE_ABSTRACT,
  id: id,
  payload: update
});
