<template>
  <div class="photos">
    <van-nav-bar title="我们一起" left-text="返回" left-arrow fixed @click-left="onClickLeft" />

    <Timeline class="timeline" :color="['coral']" :data="img" />
  </div>
</template>


<script>
import Timeline from "@/components/Timeline/index";

export default {
  components: {
    Timeline
  },
  data() {
    return {
      img: [
        {
          date: "于 2017年7月1日",
          desc: `丫头去泰国了，给我买了件帅气的衬衫，虽然有点大，嘿嘿，特别喜欢，谢谢宝贝。`
        },
        {
          date: "于 2017年7月2日",
          desc: `我们去朝阳大悦城吃嗨辣，真的辣，那个鱼身上都是辣椒，丫头不吃鱼皮、不吃辣，虽然是4种味道的锅底，但是还是抵挡不住辣味。`
        },
        {
          date: "于 2017年7月3日",
          desc: `从朝阳大悦城回来的路上，经过了一个满是星星的地方，拍张照片留个念。`
        },
        {
          date: "于 2017年7月10日",
          desc: `和丫头去兴城，美丽的小城市，好想和你一直这里，慢慢变老`
        },
        {
          date: "于 2017年7月11日",
          desc: `兴城的古镇，据说摸摸身后的大狮子就会有好运气，我没摸它，因为我觉得遇见你已经是我最好的运气了。`
        },
        {
          date: "于 2017年7月12日",
          desc: `你说你喜欢海，那我就陪你在海边，牵着你的手在海滩漫步，感觉棒棒哒！`
        },
        {
          date: "于 2017年7月13日",
          desc: `和丫头一起画鞋，那只睡觉的懒阿狸，是我画的，但是不是我的风格，那是你的风格，我问你，床和我你选哪个。`
        },
        {
          date: "于 2017年7月14日",
          desc: `和丫头去古北水镇，重点是我睡沙发，哼。我忍了，谁让我喜欢你呢。被爱的总是有恃无恐！`
        },
        {
          date: "于 2017年7月15日",
          desc: `给丫头买的冰激凌，你不能吃凉的，只能吃几口，剩下的都让我吃了，嘿嘿`
        },
        {
          date: "于 2017年7月16日",
          desc: `古北水镇，住在复式楼房里，真想一直和你在这悠闲的生活下去。我希望我们以后的日子是这样的。`
        },
        {
          date: "于 2017年7月17日",
          desc: `你是不是想亲我，嘿嘿，宝贝丫头，我想你。`
        }
      ]
    };
  },

  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.timeline {
  margin-top: 10px;
}
</style>
