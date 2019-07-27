<template>
  <div>
    <van-nav-bar title="画矩形" left-text="返回" left-arrow fixed @click-left="onClickLeft" />
    <h3>路径、描边、填充</h3>
    <canvas ref="canvas"></canvas>

    <h4>路径与子路径</h4>
    <pathAndSubpath/>

    <h4>剪纸效果</h4>
    <cutout/>

    <h4>其他剪纸效果</h4>
    <cutoutRect/>
  </div>
</template>
<script>
import MyCanvas from "@/views/canvas/logic/index";
import pathAndSubpath from './components/pathAndSubpath'
import cutout from './components/cutout'
import cutoutRect from './components/cutoutRect'
export default {
  data() {
    return {};
  },
  components: {
    pathAndSubpath,
    cutout,
    cutoutRect,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },

    draw() {
      const myCanvasIns =  new MyCanvas(this.$refs.canvas);
      const { context, dom } = myCanvasIns;

      dom.height = 700;
      dom.width = 1000;

      myCanvasIns.drawGrid("lightgray", 10, 10);

      // 设置一些默认属性
      context.font = '48px Hevetica';
      context.strokeStyle = 'blue';
      context.fillStyle = 'red';
      context.lineWidth = '2';

      // 文字
      context.strokeText('Stroke', 60, 110);
      context.fillText('Fill', 440, 110);

      context.strokeText('Stroke & Fill', 650, 110);
      context.fillText('Stroke & Fill', 650, 110);


      // 画矩形
      context.lineWidth = '5';
      context.beginPath();
      // rect(x, y, width, height)
      context.rect(80, 150, 150, 100);
      context.stroke();

      context.beginPath();
      context.rect(400, 150, 150, 100);
      context.fill();

      context.beginPath();
      context.rect(750, 150, 150, 100);
      context.stroke();
      context.fill();


      // 画打开的形状
      context.beginPath();
      // arc(x, y, r(半径), 起始角，结束角)
      // x,y 表示圆心坐标
      // http://www.w3school.com.cn/tags/canvas_arc.asp
      context.arc(150, 370, 60, 0, Math.PI*3/2);
      context.stroke();

      context.beginPath();
      context.arc(475, 370, 60, 0, Math.PI*1.5);
      context.fill();

      context.beginPath();
      context.arc(820, 370, 60, 0, Math.PI*1.5);
      context.stroke();
      context.fill();

      // 打开的形状
      context.beginPath();
      context.arc(150, 550, 60, 0, Math.PI*1.5);
      context.closePath();
      context.stroke();
      
      context.beginPath();
      context.arc(475, 550, 60, 0, Math.PI*1.5);
      context.closePath();
      context.fill();

      context.beginPath();
      context.arc(820, 550, 60, 0, Math.PI*1.5);
      context.closePath();
      context.stroke();
      context.fill()
    }
  },
  mounted() {
    this.draw();
  }
};
</script>
<style lang="less" scoped>
#canvas {
  transform: translate(-12px, 0)
}
</style>
