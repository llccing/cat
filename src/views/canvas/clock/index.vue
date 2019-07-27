<template>
  <div>
    <van-nav-bar title="画矩形" left-text="返回" left-arrow fixed @click-left="onClickLeft" />
    <h3>表</h3>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
import MyCanvas from "@/views/canvas/logic/index";
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },

    drawRect() {
      const myCanvasIns = new MyCanvas("#canvas");
      const { context, dom } = myCanvasIns;
      const bodyWidth = document.body.offsetWidth

      dom.height = 500;
      dom.width = bodyWidth;
      myCanvasIns.drawGrid("lightgray", 10, 10);
      

      context.lineWidth = 5;
      context.strokeStyle = 'red'
      
      // 外边框
      context.beginPath();
      context.arc(dom.width/2, dom.height/2, 200, 0, Math.PI*2)
      context.closePath();
      context.stroke();

      // 内圆边框
      context.beginPath();
      context.arc(dom.width/2, dom.height/2, 180, 0, Math.PI*2)
      context.closePath();
      context.stroke();
      
    }
  },
  mounted() {
    this.drawRect();
  }
};
</script>
<style lang="less" scoped>
#canvas {
  transform: translate(-12px, 0)
}
</style>
