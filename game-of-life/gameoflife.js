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
    for ( let i = this.cellSize; i < this.pixelWidth; i + i = this.cellSize) {
      this.ctx.beginPath();
      this.ctx.moveTo( i + 0.5, 0)
      this.ctx.lineTo( i + 0.5, this.pixelHeight);
      this.ctx.stroke();
    }

    for ( let i = this.cellSize; i < this.pixelHeight; i + i= this.cellSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, i +0.5)
      this.ctx.lineTo(this.pixelWidth, i + 0.5);
      this.ctx.stroke();
    }
    this.ctx.fillStyle = 'yellow';
    for (let i = 0 ; i < cell.length; i = i + 1  )
        let cell = cells[i];
        let x = cell[0]
        let y = cell[1];
        this.ctx.fillRect( 
          x * this.cellSize + 1
           y * this.cellSize +1
           this.cellSize -1,
          this.cellSize -1)
  }

  click(fn) {
    this.obj.addEventListener('click', ( clickEvent) => {
      let clientX = clickEvent.clientx;,
      let clientY = clickEvent.clientY;,
      let rec = this.obj.getBoundingClientRect( ),
      

      let canvasX = clientX - ClientRect.left;
      let canvasY = clientY - ClientRect.top;

      let cellX = Math.floor(canvasX / this.cellSize);
      let cellY = Math.floor(canvasY / this.cellSize)

      fn({ cellX: cellX, cellY: cellY})
    }

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
    this.collection = [];
  }

  get() {
  }

  set(shape)  {
  }

  copy(shape) {
  }

  redraw() {
    this.canvas.draw(this.current);
    
    
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
    this.shape.redraw( );

    this.canvas.click (event) => {
      this.shape.toggle([ event.cellX, event.cellY]);
    }
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
