<template>
  <div>
    <van-nav-bar title="what is canvas" left-text="返回" left-arrow fixed @click-left="onClickLeft" />
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  },
  mounted() {
    const dom = document.querySelector("#canvas");
    const context = dom.getContext("2d");
    context.font = "38pt Arial";
    context.fillStyle = "cornflowerblue";
    context.strokeStyle = "blue";
    context.fillText("Hello Canvas", dom.width / 2 - 150, dom.height / 2 + 15);
    context.strokeText(
      "Hello Canvas",
      dom.width / 2 - 150,
      dom.height / 2 + 15
    );
  }
};
</script>
