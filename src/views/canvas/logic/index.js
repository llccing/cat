export default class MyCanvas {
  dom = ''
  context = ''
  constructor(selector) {
    this.getContext(selector)
  }

  setDom(selector) {
    this.dom = document.querySelector(selector)
    return this
  }

  getContext(selector) {
    this.setDom(selector)
    this.context = this.dom.getContext('2d')
    return this
  }
}
