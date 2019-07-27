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

      /**
       * @param { Number } stepx 表示竖线的间隔
       * @param { Number } stepy 表示横线的间隔
       */
      (function drawGrid(color, stepx, stepy) {
        context.strokeStyle = color;
        context.lineWidth = 0.5;

        // 画竖线
        for (let i = stepx + 0.5; i < dom.width; i += stepx) {
          context.beginPath();
          context.moveTo(i, 0);
          context.lineTo(i, dom.height);
          context.stroke();
        }

        // 画横线 
        for (let i = stepy + 0.5; i < dom.height; i += stepx) {
          context.beginPath();
          context.moveTo(0, i);
          context.lineTo(dom.width, i);
          context.stroke();
        }
      })('lightgray', 10, 10)
    }
  },
  mounted() {
    this.draw();
  }
};
</script>
