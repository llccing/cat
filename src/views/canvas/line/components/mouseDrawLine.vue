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

