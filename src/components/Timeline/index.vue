<template>
  <div class="my-timeline">
    <div class="item" v-for="(item, idx) in data" :key="item.date">
      <i class="icon" :class="color"></i>
      <!-- <span>{{item.desc}}</span> -->
      <div class="desc">
        <span>{{item.desc}}</span>
        <p class="date">{{item.date}}</p>
      </div>

      <i v-if="idx!== data.length-1" class="connect" :class="color"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "timeline",
  props: {
    data: Array,
    color: {
      type: Object | Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.my-timeline {
  color: #666;
  @defaultColor: burlywood;

  @blueColor: cornflowerblue;

  @coralColor: coral;

  .item {
    position: relative;

    .icon {
      display: inline-block;
      width: 18px;
      height: 18px;
      border: 1px solid @defaultColor;
      border-radius: 50%;
      vertical-align: top;

      margin-right: 10px;
    }

    .desc {
      display: inline-block;
      width: 90%;
      margin-bottom: 20px;

      .date {
        text-align: right;
        color: #777;
        font-size: 14px;
      }
    }

    .connect {
      display: inline-block;
      width: 1px;
      border-left: 1px dashed @defaultColor;
      left: 9px;

      margin: 5px 0 5px;

      position: absolute;
      top: 20px;
      bottom: 0px;
    }

    .blue {
      border-color: @blueColor !important;
    }
    .coral {
      border-color: @coralColor !important;
    }
  }
}
</style>


