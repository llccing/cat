<template>
  <div>
    <van-nav-bar title="画矩形" left-text="返回" left-arrow fixed @click-left="onClickLeft" />
    <h3>普通矩形</h3>
    <canvas id="canvas"></canvas>

    <h3>表示渐变</h3>
    <canvas id="canvas2"></canvas>

    <h3>圆锥渐变</h3>
    <canvas id="canvas3"></canvas>

    <h3>图案填充</h3>
    <fillWithImage/>
  </div>
</template>
<script>
import MyCanvas from "../logic/index";
import fillWithImage from './components/fillWithImage'
export default {
  data() {
    return {};
  },
  components: {
    fillWithImage
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },

    drawRect() {
      const myCanvasIns = new MyCanvas("#canvas");
      const { context, dom } = myCanvasIns;

      dom.height = 300;
      dom.width = 375;

      context.lineJoin = "round";
      context.lineWidth = 10;

      context.font = "24px Helvetica";
      context.fillText("Click anywhere to erase", 75, 140);

      // 设置描边颜色
      context.strokeStyle = "goldenrod";
      // 设置填充颜色
      context.fillStyle = "rgba(0,0, 255, 0.5)";

      context.strokeRect(75, 100, 100, 100);
      context.fillRect(225, 100, 100, 100);

      context.canvas.onmousedown = function(e) {
        context.clearRect(100, 0, dom.width, dom.height);
      };
    },

    // 创建渐变
    drawRectGradient() {
      const myCanvasIns = new MyCanvas("#canvas2");
      const { context, dom } = myCanvasIns;

      // 设置渐变
      const gradient = context.createLinearGradient(0, 0, dom.width, 0);
      gradient.addColorStop(0, "blue");
      gradient.addColorStop(0.25, "white");
      gradient.addColorStop(0.5, "purple");
      gradient.addColorStop(0.75, "red");
      gradient.addColorStop(1, "yellow");

      // 使用渐变色作为填充色
      context.fillStyle = gradient;

      context.rect(0, 0, dom.width, dom.height);
      context.fill();
    },

    // 绘制圆锥渐变
    createRadialGradient() {
      const myCanvasIns = new MyCanvas("#canvas3");
      const { context, dom } = myCanvasIns;

      // dom.height = 200

      // 设置渐变
      const gradient = context.createRadialGradient(
        dom.width / 2,
        dom.height,
        5,
        dom.width / 2,
        0,
        50
      );

      gradient.addColorStop(0, "blue");
      gradient.addColorStop(0.25, "white");
      gradient.addColorStop(0.5, "purple");
      gradient.addColorStop(0.75, "red");
      gradient.addColorStop(1, "yellow");

      // 使用渐变色作为填充色
      context.fillStyle = gradient;

      context.rect(0, 0, dom.width, dom.height);
      context.fill();
    }
  },
  mounted() {
    this.drawRect();
    this.drawRectGradient();
    this.createRadialGradient();
  }
};
</script>
<style lang="less" scoped>
#canvas {
}
</style>
