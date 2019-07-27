export default class MyCanvas {
  dom = ''
  context = ''
  constructor(selector) {
    this.getContext(selector)
  }

  setDom(selector) {
    if(typeof selector === 'string')
      this.dom = document.querySelector(selector)
    else
      this.dom = selector
    return this
  }

  getContext(selector) {
    this.setDom(selector)
    this.context = this.dom.getContext('2d')
    return this
  }

  // 画网格
  drawGrid(color, stepx, stepy) {
    const { context } = this;
    context.strokeStyle = color;
    context.lineWidth = 0.5;
    console.log(stepx)

    for (let i = stepx + 0.5; i < context.canvas.width; i += stepx){
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, context.canvas.height);
      context.stroke();
    }

    for (let i = stepy + 0.5; i < context.canvas.height; i += stepy){
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(context.canvas.width, i);
      context.stroke();
    }
  }
}
