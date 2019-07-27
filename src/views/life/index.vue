<template>
  <div>
    <van-cell-group title="canvas">
      <van-cell title="what is canvas" value="hello world" is-link :to="{name: 'canvas01'}" />
      <van-cell title="图形绘制" value="画矩形" is-link :to="{name: 'canvas02'}" />
      <van-cell title="路径、描边、填充" is-link :to="{name: 'path_stroke_fill'}" />
      <van-cell title="线段" is-link :to="{name: 'line'}" />
      <van-cell title="表" is-link :to="{name: 'clock'}" />
    </van-cell-group>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
</style>
