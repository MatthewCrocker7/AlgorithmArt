const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));


var num = 0;

app.get('/api/randomizeMaze', function(req, res) {
  var tempMaze = setInitMazeState(50, 50);
  var finalMaze = recursiveMaze(50, 50, 1, 1, tempMaze);
  num++;

  res.send({ someNum: num, mazeRef: finalMaze, })
});

function recursiveMaze(rows, cols, r, c, maze){
  var choices = [];

  if(r-2 >= 1 && maze[r-2][c] == 1){
    choices.push('Up');
  }
  if(r+2 <= rows-2 && maze[r+2][c] == 1){
    choices.push('Down');
  }
  if(c-2 >= 1 && maze[r][c-2] == 1){
    choices.push('Left');
  }
  if(c+2 <= cols-2 && maze[r][c+2] == 1){
    choices.push('Right');
  }
//  console.log(choices);

  var choice = choices[Math.floor(Math.random() * choices.length)];

  switch(choice){
    case 'Up':
      maze[r-2][c] = 0;
      maze[r-1][c] = 0;
      maze = recursiveMaze(rows, cols, r-2, c, maze);
      break;
    case 'Down':
      maze[r+2][c] = 0;
      maze[r+1][c] = 0;
      maze = recursiveMaze(rows, cols, r+2, c, maze);
      break;
    case 'Left':
      maze[r][c-2] = 0;
      maze[r][c-1] = 0;
      maze = recursiveMaze(rows, cols, r, c-2, maze);
      break;
    case 'Right':
      maze[r][c+2] = 0;
      maze[r][c+1] = 0;
      maze = recursiveMaze(rows, cols, r, c+2, maze);
      break;
    default:
      return maze;
  }

  if(choices.length > 1){
    return recursiveMaze(rows, cols, r, c, maze);
  }


  return maze;
}

function setInitMazeState(rows, cols){
  var temp = [];

  for(var x = 0; x < rows; x++){
    temp[x] = new Array(cols);
    for(var y = 0; y < cols; y++){
  //    if(Math.random() < 0.5){
  //      temp[x][y] = 0;
  //    }else{
        temp[x][y] = 1;
    //  }
    }
  }

  return temp;
}
