<template>
  <div class="list">
    <div class="head">
      <img src="../assets/img/resume-girl.jpg" alt="头像">
    </div>

    <divider>~~我是美玲~~</divider>

    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">我的信息</div>
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">基本信息</h4>
          <p class="weui-media-box__desc">女|1993年1月生| 户口：黑龙江-齐齐哈尔| 现居住于:北京-海淀区</p>
          <p class="weui-media-box__desc">3年工作经验</p>
          <p class="weui-media-box__desc">137****2235</p>
          <p class="weui-media-box__desc">E-mail：252939****@qq.com</p>

        </div>
        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">求职意向</h4>
          <p class="weui-media-box__desc"><strong>工作性质：</strong><span>全职</span></p>
          <p class="weui-media-box__desc"><strong>期望职业：</strong><span>培训师/讲师、培训/招生/课程顾问、培训助理/助教、</span></p>
          <p class="weui-media-box__desc"><strong>期望行业：</strong><span>娱乐/体育/休闲、教育/培训/院校、互联网/电子商务</span></p>
          <p class="weui-media-box__desc"><strong>工作地区：</strong><span>北京</span></p>
          <p class="weui-media-box__desc"><strong>期望月薪：</strong><span>8001-10000元/月</span></p>
          <p class="weui-media-box__desc"><strong>目前状况：</strong><span>我目前在职，正考虑换个新环境（如有合适的工作机会，到岗时间一个月左右）</span></p>
        </div>

        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">自我评价</h4>
          <p class="weui-media-box__desc desc-override">本人对待工作认真负责，注重团队协作，能够活跃团队气氛，适应能力强。</p>
          <p class="weui-media-box__desc desc-override">1年内，从客服成长为多技能培训讲师，目前是酒店项目负责人。</p>
          <p class="weui-media-box__desc desc-override">多次出差，参与各个外包公司的新人招聘，宣讲，培训等环节。</p>
          <p class="weui-media-box__desc desc-override">具有优秀的学习能力，管理能力，创新能力，沟通能力。喜欢做有挑战性的工作，能承受工作压力。</p>
        </div>

        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">工作经历</h4>
          <p class="weui-media-box__desc desc-override">2014/05 -- 至今</p>
          <p class="weui-media-box__desc desc-override"><strong>北京趣拿软件科技有限公司|培训师/讲师</strong></p>
          <p class="weui-media-box__desc desc-override">行业类别： 互联网/电子商务|职位月薪：6001-8000元/月</p>
          <p class="weui-media-box__desc desc-override"><strong>工作描述：</strong></p>
          <p class="weui-media-box__desc desc-override">工作内容：</p>
          <p class="weui-media-box__desc desc-override">1. 负责新员工的基础业务培训和考评；</p>
          <p class="weui-media-box__desc desc-override">2. 负责在岗员工新业务的培训和综合素质的提升；</p>
          <p class="weui-media-box__desc desc-override">3. 辅助上级完成培训前的培训需求调查、统计和分析，建立月度和年度培训计划；</p>
          <p class="weui-media-box__desc desc-override">4. 负责培训后的调查、分析和评估，从培训结果中发现问题并提出改进建议；</p>
          <p class="weui-media-box__desc desc-override">5. 负责新课程的需求评估、课程开发和培训实施；</p>
          <p class="weui-media-box__desc desc-override">6. 负责新课程的需求评估、课程开发和培训实施；</p>
          <p class="weui-media-box__desc desc-override">7. 负责部门内外相关培训工作，包括但不限于培训课程的实施、培训活动的组织、培训质量的监测、会场布置、参训人员的协调等；</p>
          <p class="weui-media-box__desc desc-override">8.  负责对接外包商，参与业务培训、招聘等环节；</p>
          <p class="weui-media-box__desc desc-override">9.  负责微信公众号的策划与编辑。</p>
        </div>

        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">教育经历</h4>
          <p class="weui-media-box__desc">2010/09 -- 2014/07</p>
          <p class="weui-media-box__desc"><strong>齐齐哈尔建设职工大学|工商管理|本科|非统招</strong></p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Group, Cell, Grid, GridItem, Divider, Panel, Card } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Grid,
    GridItem,
    Divider,
    Panel,
    Card
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
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .head{
    text-align: center;
    img{
      width: 5rem;
      height: 5rem;
      border: 1px solid #ccc;
      border-radius: 50% 50%;
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
