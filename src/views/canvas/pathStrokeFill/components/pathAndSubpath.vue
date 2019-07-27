<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
import MyCanvas from "@/views/canvas/logic/index";

export default {
  data() {
    return {};
  },
  methods: {
    draw() {
      const myCanvasIns = new MyCanvas(this.$refs.canvas);
      const { context, dom } = myCanvasIns;

      dom.width = 400;
      dom.height = 200;
      myCanvasIns.drawGrid('lightgray', 10, 10);

      context.lineWidth = 5;
      context.strokeStyle = 'blue';
      
      context.beginPath();
      context.rect(10, 10, 100, 100)
      context.stroke();

      context.beginPath();
      context.rect(50, 50, 100, 100)
      context.stroke();

      context.strokeStyle = 'red'

      context.beginPath();
      context.rect(200, 10, 100, 100)
      context.stroke();

      // 这里没有执行 context.beginPath()，会导致第一个rect再次绘制一次。
      context.rect(250, 50, 100, 100)
      context.stroke()
    }
  },
  mounted() {
    this.draw();
  }
};
</script>
