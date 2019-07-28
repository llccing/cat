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
      dom.height = 400;

      const margin = 10;

      const leftTopX = margin;
      const leftTopY = margin;
      const leftBottomX = margin;
      const leftBottomY = dom.height - margin;
      const rightBottomX = dom.width - margin;
      const rightBottomY = leftBottomY;

      // 大柱长度
      const bigPoint = 6;
      // 小柱长度
      const smallPoint = 3;

      context.beginPath();
      context.moveTo(leftTopX, leftTopY);
      context.lineTo(leftBottomX, leftBottomY);
      context.lineTo(rightBottomX, rightBottomY);
      context.stroke();

      function drawAxisX(step, bigPoint, smallPoint) {
        for (
          let i = leftBottomX + step, k = 1;
          i < rightBottomX;
          i += step, k++
        ) {
          context.beginPath();
          if (k >= 5 && k % 5 === 0) {
            // 长柱
            context.moveTo(i, leftBottomY - bigPoint);
            context.lineTo(i, leftBottomY);
          } else {
            // 短柱
            context.moveTo(i, leftBottomY - smallPoint);
            context.lineTo(i, leftBottomY);
          }
          context.stroke();
        }
      }

      function drawAxisY(step, bigPoint, smallPoint) {
        for (
          let i = leftBottomX + step, k = 1;
          i < rightBottomX;
          i += step, k++
        ) {
          context.beginPath();
          if (k >= 5 && k % 5 === 0) {
            // 长柱
            context.moveTo(leftTopX, i);
            context.lineTo(leftTopX + bigPoint, i);
          } else {
            // 短柱
            context.moveTo(leftTopX, i);
            context.lineTo(leftTopX + smallPoint, i);
          }
          context.stroke();
        }
      }

      drawAxisX(4, bigPoint, smallPoint);
      drawAxisY(4, bigPoint, smallPoint);
    }
  },
  mounted() {
    this.draw();
  }
};
</script>
<style scoped>
canvas {
  border: 1px dashed burlywood;
}
</style>

