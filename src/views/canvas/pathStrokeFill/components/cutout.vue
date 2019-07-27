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

      dom.width = 600;
      dom.height = 400;
      
      myCanvasIns.drawGrid('lightgray', 10, 10);

      context.fillStyle = 'rgba(100, 140, 230, 0.5)';
      context.strokeStyle = context.fillStyle;

      function drawTwoArcs(){
        context.beginPath();
        context.arc(300, 190, 150, 0, Math.PI*2, false); // Outer: CCW
        // context.beginPath();
        context.arc(300, 190, 100, 0, Math.PI*2, true); // InnerL: CW
        
        context.fill();
        context.shadowColor = undefined;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.stroke();
      }

      context.clearRect(0, 0, dom.width, dom.height);
      context.save();

      context.shadowColor = 'rgba(0, 0, 0, 0.8)';
      context.shadowOffsetX = 12;
      context.shadowOffsetY = 12;
      context.shadowBlur = 15;

      drawTwoArcs();
      context.restore();
    }
  },
  mounted() {
    this.draw();
  }
};
</script>
