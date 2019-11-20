class GameOfLife {
  constructor() {
  }

  next(shape) {
  }
}

class Canvas {
  constructor(container) {
    let canvasElement = document.createElement('canvas');
    this.obj = canvasElement;
    this.pixelWidth = 803;
    this.pixelHeight = 506;
    canvasElement.width = this.pixelWidth
    canvasElement.height= this.pixelHeight
    container.appendChild(canvasElement);
    this.ctx = canvasElement.getContext('2d');
    this.setGridSize(11);
  }

  draw(cells) {
    this.ctx.linewidth = 1;
    ctx.strokestyle = "#999";
    for ( let i = this.cellSize; i < this.pixelWidth; i += this.cellSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x,y);
      this.ctx.lineTo();
      this.ctx.stroke();
    }

    for ( let i = this.cellSize; i < this.pixelHeight; i += this.cellSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x,y);
      this.ctx.lineTo();
      this.ctx.stroke();
    }
  }

  click(fn) {
  }

  getDimension() {
  }

  getGridSize() {
  }

  setGridSize(size) {
  }
}

class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    this.current = [];
    this.collection = {};
  }

  get() {
  }

  set(shape)  {
  }

  copy(shape) {
  }

  redraw() {
  }

  center() {
  }

  offset(dx, dy) {
  }

  toggle(cell) {
  }
}

class Controls {
  constructor(canvas, shape, gameOfLife) {
    this.canvas = canvas;
    this.shape = shape;
    this.gameOfLife = gameOfLife;
    this.started = false;
    this.timer = null;
    this.generation = 0;
  }

  init(shapes) {
  }

  setGeneation(gen) {
  }

  animate() {
  }

  next() {
  }
}

let canvasElement = document.getElementById('canvas-div');
let canvas = new Canvas(canvasElement);
let shape = new Shape(canvas);
let gameOfLife = new GameOfLife();
let controls = new Controls(canvas, shape, gameOfLife);
