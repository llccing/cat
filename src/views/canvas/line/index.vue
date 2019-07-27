<template>
  <div>
    <van-nav-bar title="线段" left-text="返回" left-arrow fixed @click-left="onClickLeft" />
    <h3>两条线段</h3>
    <canvas ref="canvas"></canvas>

    <h4>grid</h4>
    <grid/>
  </div>
</template>
<script>
import MyCanvas from "@/views/canvas/logic/index";
import grid from './components/grid'

export default {
  data() {
    return {};
  },
  components: {
    grid
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },

    draw() {
      const myCanvasIns = new MyCanvas(this.$refs.canvas);
      const { context, dom } = myCanvasIns;
      dom.height = 200;
      dom.width = 600;

      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(50, 10);
      context.lineTo(450, 10);
      context.stroke();

      context.beginPath();
      context.moveTo(50.5, 50.5);
      context.lineTo(450.5, 50.5);
      context.stroke();

    }
  },
  mounted() {
    this.draw();
  }
};
</script>
<style lang="less" scoped>
#canvas {
  transform: translate(-12px, 0);
}
</style>
