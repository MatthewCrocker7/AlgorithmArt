const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('dist'));

app.use( bodyParser.json() );

app.use(express.json());

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));


var num = 0;
var mazeWallSize = 10;
var mazeWidth = 500;
var mazeHeight = 500;

//MAZES
app.post('/api/Mazes/recursiveMaze', function(req, res) {
  if (typeof req.body.mazeWallSize !== 'undefined')
    mazeWallSize = req.body.mazeWallSize[0]
  else {
    mazeWallSize = 10;
  }
  if (typeof req.body.mazeWidth !== 'undefined')
    mazeWidth = req.body.mazeWidth[0]
  else {
    mazeWidth = 500;
  }
  if (typeof req.body.mazeHeight !== 'undefined'){
    mazeHeight = req.body.mazeHeight[0]
  }
  else {
    mazeHeight = 500;
  }

  var rows = Math.floor( mazeHeight / mazeWallSize );
  var cols = Math.floor( mazeWidth / mazeWallSize )

  console.log(mazeWallSize);

  var tempMaze = setInitMazeState(rows, cols);
  var finalMaze = recursiveMaze(rows, cols, 1, 1, tempMaze);
  num++;

  res.send({ wallSize: mazeWallSize, mazeRef: finalMaze, })
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

//ABSTRACT ART
app.post('/api/AbstractArt/First', function(req, res){
var abstractResolution;
var abstractWidth;
var abstractHeight;

var abstractRef;

if (typeof req.body.abstractResolution !== 'undefined')
  abstractResolution = req.body.abstractResolution[0]
else {
  abstractResolution = 2;
  }
if (typeof req.body.abstractWidth !== 'undefined')
  abstractWidth = req.body.abstractWidth[0]
else {
  abstractWidth = 400;
  }
if (typeof req.body.abstractHeight !== 'undefined')
  abstractHeight = req.body.abstractHeight[0]
else {
  abstractHeight = 400;
  }

var rows = Math.floor( abstractHeight / abstractResolution );
var cols = Math.floor( abstractWidth / abstractResolution )

abstractRef = abstractArt(abstractResolution, rows, cols);

  console.log(abstractResolution);
  res.send({ abstractResolution: abstractResolution, abstractRef: abstractRef})
});

function abstractArt(resolution, rows, cols){
  var abstract = [];
  var firstColor = '#' + Math.random().toString(16).slice(2, 8);

  for(var r = 0; r < rows; r++){
    abstract.push([]);

    for(var c = 0; c < cols; c++){
      //var fill = '#' + Math.random().toString(16).slice(2, 8);\
      var fill = shiftColor(firstColor, resolution, (r+c));

      abstract[r].push(fill);
    }
  }

  return abstract;
}

function shiftColor(firstColor, resolution, factor){
  var fill = firstColor;
  var phase = resolution * factor * 5;

  if(factor == 0)
    return fill;

  var red = parseInt(fill.substring(1, 3), 16);
  var green = parseInt(fill.substring(3, 5), 16);
  var blue = parseInt(fill.substring(5, fill.length), 16);

  var redInc = true;
  var greenInc = true;
  var blueInc = true;

while(phase > 0) {
  if(redInc){
    red++;
    phase--;
    if(red >= 255){
      redInc = false;
    }
  }
  else {
    red--;
    phase--;
    if(red <= 0){
      redInc = true;
    }
  }

  if(greenInc){
    green++;
    phase--;
    if(green >= 255){
      greenInc = false;
    }
  }
  else {
    green--;
    phase--;
    if(green <= 0){
      greenInc = true;
    }
  }

  if(blueInc){
    blue++;
    phase--;
    if(blue >= 255){
      blueInc = false;
    }
  }
  else {
    blue--;
    phase--;
    if(blue <= 0){
      blueInc = true;
    }
  }
}

  red = decToHex(red);
  green = decToHex(green);
  blue = decToHex(blue);

  fill = '#' + red + green + blue

  console.log(firstColor);
  console.log(red + ' ' + green + ' ' + blue);

  return fill;
}

function decToHex(dec){
  var hex = dec.toString(16);
  if(hex.length % 2){
    hex = '0' + hex;
  }
  return hex;
}
