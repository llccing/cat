<template>
  <div>
    <van-nav-bar title="what is canvas" left-text="返回" left-arrow fixed @click-left="onClickLeft" />
    <canvas id="canvas"></canvas>
    <p>默认情况下，浏览器创建的canvas元素是300px宽，150px高，可以通过指定width、height属性调整大小。</p>
  </div>
</template>
<script>
import MyCanvas from './logic/index'
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  },
  mounted() {
    const myCanvasIns = new MyCanvas('#canvas')
    const context = myCanvasIns.context;

    // 通过代码指定canvas宽、高
    // myCanvasIns.dom.width = 600
    // myCanvasIns.dom.height = 300

    context.font = "38pt Arial";
    context.fillStyle = "cornflowerblue";
    context.strokeStyle = "blue";
    context.fillText("Hello Canvas", myCanvasIns.dom.width / 2 - 150, myCanvasIns.dom.height / 2 + 15);
    context.strokeText(
      "Hello Canvas",
      myCanvasIns.dom.width / 2 - 150,
      myCanvasIns.dom.height / 2 + 15
    );
  }
};
</script>
<style lang="less" scoped>
#canvas{
  // 如果是这样修改，只改变了元素本身的大小。
  // width: 600px;
  // height: 300px;
}
</style>
