<template>
  <div class="list">
    <Swiper :list="baseList" :interval="interval" auto="auto"></Swiper>
    <divider>~~~~</divider>

    <div class="head">
      <img src="../assets/img/resume-girl.jpg" alt="头像">
      <div class="middle">
        <img class="middle" src="../assets/img/heart.png" alt="头像">
      </div>
      <img src="../assets/img/resume-boy.jpg" alt="头像">
    </div>
  </div>
</template>

<script>
import { Group, Cell, Grid, GridItem, Divider, Panel, Card, Swiper } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'http://7xst43.com1.z0.glb.clouddn.com/IMG_2289.JPG',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'http://7xst43.com1.z0.glb.clouddn.com/IMG_2290.JPG',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'http://7xst43.com1.z0.glb.clouddn.com/IMG_2074.JPG',
  title: '送你一次旅行'
}]

export default {
  components: {
    Group,
    Cell,
    Grid,
    GridItem,
    Divider,
    Panel,
    Card,
    Swiper
  },
  data () {
    return {
      experience: [
        '2014年加入去哪儿网，开始了没有白天黑夜的客服生活',
        '2015年转为培训老师，带出了一批又一批的学生们',
        '2016年，开始了出差培训的生活，全国各地跑',
        '2016年11月，遇上了他，我的男朋友，从此开始了相亲相爱的生活'
      ],
      msg: 'your love',
      header: '我的资料',
      list: [{
        title: '自我评价',
        desc: `本人对待工作认真负责，注重团队协作，能够活跃团队气氛，适应能力强。1年内，从客服成长为多技能培训讲师，目前是酒店项目负责人。
        多次出差，参与各个外包公司的新人招聘，宣讲，培训等环节。
        具有优秀的学习能力，管理能力，创新能力，沟通能力。喜欢做有挑战性的工作，能承受工作压力。`
      }],
      type: '2',
      footer: {
        url: 'http://www.baidu.com',
        title: 'baidu'
      },
      baseList,
      auto: true,
      interval: 3000
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .head{
    text-align: center;
    > img{
      width: 5rem;
      height: 5rem;
      border: 1px solid #ccc;
      border-radius: 50% 50%;
    }
  }

  .middle{
    img{
      width: 3rem;
      height: 3rem;
      vertical-align: middle;
    }
  }

  .desc-override{
    text-indent: 2em;
    -webkit-line-clamp: 5;
      span{
        color: #3a79bb;
      }
  }
</style>
