import store from '../js/store/index.js';
import { addArticle, updateWallSize, updateMazeWidth, updateMazeHeight } from '../js/actions/actions.js';

window.store = store;
window.addArticle = addArticle;
window.updateWallSize = updateWallSize;
window.updateMazeWidth = updateMazeWidth;
