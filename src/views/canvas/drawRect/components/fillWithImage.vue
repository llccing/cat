<template>
  <div>
    <div class="radios">
      <van-radio-group v-model="radio" @change="radioChange">
        <van-radio name="repeat">repeat</van-radio>
        <van-radio name="repeat-x">repeatX</van-radio>
        <van-radio name="repeat-y">repeatY</van-radio>
        <van-radio name="no-repeat">noRepeat</van-radio>
      </van-radio-group>
    </div>
    <canvas id="canvas4"></canvas>
  </div>
</template>
<script>
import MyCanvas from "@/views/canvas/logic/index";

export default {
  data() {
    return {
      radio: "repeat",
      imageCanvasIns: "",
      image: ""
    };
  },
  methods: {
    radioChange(name) {
      this.fillCanvasWithPattern(name);
    },
    fillCanvasWithPattern(repeatString) {
      console.log(repeatString);
      const { context, dom } = this.imageCanvasIns;

      var pattern = context.createPattern(this.image, repeatString);
      context.clearRect(0, 0, dom.width, dom.height);
      context.fillStyle = pattern;
      context.fillRect(0, 0, dom.width, dom.height);
    }
  },
  mounted() {
    const myCanvasIns = new MyCanvas("#canvas4");
    this.imageCanvasIns = myCanvasIns;
    const { context, dom } = myCanvasIns;
    dom.height = 300
    this.image = new Image();
    this.image.src = require("@/assets/img/heart.png");

    this.image.onload = () => {
      this.fillCanvasWithPattern("repeat");
    };
  }
};
</script>
