<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
import MyCanvas from "@/views/canvas/logic/index";

let myCanvasIns, context, dom;

function drawCutouts() {
  context.beginPath();
  addOuterRectanglePath();

  addCirclePath();
  addRectanglePath();
  addTrianglePath();

  context.fill();
}

// rect方法没有逆时针绘制的方式，所以我们自定义方法
function rect(x, y, w, h, direction) {
  // true 时，为逆时针绘制
  if (direction) {
    context.moveTo(x, y);
    context.lineTo(x, y + h);
    context.lineTo(x + w, y + h);
    context.lineTo(x + w, y);
  } else {
    // 顺时针绘制
    context.moveTo(x, y);
    context.lineTo(x + w, y);
    context.lineTo(x + w, y + h);
    context.lineTo(x, y + h);
  }
  context.closePath();
}

// 绘制外层矩形
function addOuterRectanglePath() {
  context.rect(110, 25, 370, 335);
}

// 逆时针绘制 小矩形
function addRectanglePath() {
  rect(310, 55, 70, 35, true);
}

// 逆时针绘制 小圆圈
function addCirclePath() {
  context.arc(300, 300, 40, 0, Math.PI * 2, true);
}

// 画三角形
function addTrianglePath() {
  context.moveTo(400, 200);
  context.lineTo(250, 115);
  context.lineTo(200, 200);
  context.closePath();
}

function strokeCutoutShapes() {
  context.save();

  context.strokeStyle = "rgba(0,0,0,0.7)";
  context.beginPath();
  addOuterRectanglePath();
  context.stroke();

  context.beginPath();

  addCirclePath();
  addRectanglePath();
  addTrianglePath();
  context.stroke();

  context.restore();
}

export default {
  data() {
    return {};
  },
  methods: {
    draw() {
      myCanvasIns = new MyCanvas(this.$refs.canvas);
      context = myCanvasIns.context;

      context.fillStyle = "goldenrod";

      dom = myCanvasIns.dom;
      dom.width = 600;
      dom.height = 400;

      context.clearRect(0, 0, dom.width, dom.height);
      myCanvasIns.drawGrid("lightgray", 10, 10);

      context.save();

      context.shadowColor = "rgba(200, 200, 0, 0.5)";
      context.shadowOffsetX = 12;
      context.shadowOffsetY = 12;
      context.shadowBlur = 15;

      drawCutouts();
      strokeCutoutShapes();
      context.restore();
    }
  },
  mounted() {
    this.draw();
  }
};
</script>
