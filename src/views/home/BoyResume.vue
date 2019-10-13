<template>
  <div>
    <van-nav-bar title="他" left-text="返回" left-arrow fixed @click-left="onClickLeft" />

    <div class="head">
      <img src="../../assets/img/resume-boy.jpg" alt="头像" />
    </div>

    <van-divider dashed>~~刘春峰~~</van-divider>

    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">我的信息</div>
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">基本信息</h4>
          <p class="weui-media-box__desc">男|未婚|1992年1月生| 户口：黑龙江-齐齐哈尔| 现居住于:北京-海淀区</p>
          <p class="weui-media-box__desc">2年工作经验</p>
          <p class="weui-media-box__desc">E-mail：lcf33123@foxmail.com</p>
        </div>
        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">求职意向</h4>
          <p class="weui-media-box__desc">
            <strong>工作性质：</strong>
            <span>全职</span>
          </p>
          <p class="weui-media-box__desc">
            <strong>期望职业：</strong>
            <span>WEB前端开发</span>
          </p>
          <p class="weui-media-box__desc">
            <strong>期望行业：</strong>
            <span>互联网/电子商务</span>
          </p>
          <p class="weui-media-box__desc">
            <strong>工作地区：</strong>
            <span>北京</span>
          </p>
          <p class="weui-media-box__desc">
            <strong>目前状况：</strong>
            <span>我目前在职，正考虑换个新环境（如有合适的工作机会，到岗时间一个月左右）</span>
          </p>
        </div>

        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">专业技能</h4>
          <p class="weui-media-box__desc">熟练使用Bootstrap、CSS、HTML5、jQuery</p>
          <p class="weui-media-box__desc">熟练使用vue,vuex,weui,vue-router开发app</p>
          <p class="weui-media-box__desc">熟练使用Git、SVN版本管理工具进行项目的同步开发</p>
          <p class="weui-media-box__desc">熟练使用gulp，webpack进行前端基础设施建设</p>
          <p class="weui-media-box__desc">熟练使用ES6新特性进行开发</p>
        </div>

        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">自我评价</h4>
          <p class="weui-media-box__desc desc-override">学习能力强，喜欢钻研各种技术。</p>
          <p class="weui-media-box__desc desc-override">GitHub：https://github.com/llccing</p>
        </div>

        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">工作经历</h4>
          <van-divider dashed>2016/03 -- 至今</van-divider>

          <p class="weui-media-box__desc">
            <strong>北京博图纵横科技有限责任公司|前端开发工程师</strong>
          </p>
          <p class="weui-media-box__desc">
            <strong>工作描述：</strong>
          </p>
          <p class="weui-media-box__desc desc-override">工作任务：</p>
          <p
            class="weui-media-box__desc desc-override"
          >1. 使用requirejs实行js模块化开发，按需加载，然后使用gulp对资源文件进行压缩打包。</p>
          <p class="weui-media-box__desc desc-override">2. 在开发过程中，应用ES6，解构赋值、箭头函数，块级作用域，模板字符串等特性。</p>
          <p class="weui-media-box__desc desc-override">3. 辅助上级完成培训前的培训需求调查、统计和分析，建立月度和年度培训计划；</p>
          <p class="weui-media-box__desc desc-override">4. 使用Bootstrap进行页面布局，对于特殊需求进行样式覆盖。</p>
          <p class="weui-media-box__desc desc-override">5. 使用jQuery通过ajax与后台交互，拿到返回的JSON后进行DOM操作。</p>
          <p class="weui-media-box__desc desc-override">6. 熟练使用Git。</p>
          <p class="weui-media-box__desc">
            <strong>总结：</strong>
          </p>
          <p class="weui-media-box__desc desc-override">将工作中遇到的问题进行总结，避免下次再次遇到时，当成一个新的问题。</p>
          <p
            class="weui-media-box__desc desc-override"
          >开发过程中，对于团队贡献了自己的力量，写了一份前端开发规范，同时比较现有的各种构建工具（grunt、gulp，webpack）后，将gulp应用到项目中。</p>
          <van-divider dashed>2015/07 -- 2016/01</van-divider>

          <p class="weui-media-box__desc">
            <strong>大庆市大云科技有限公司|前端开发工程师</strong>
          </p>
          <p class="weui-media-box__desc">行业类别： 互联网/电子商务|职位月薪：2001-4000元/月</p>
          <p class="weui-media-box__desc">
            <strong>工作描述：</strong>
          </p>
          <p class="weui-media-box__desc desc-override">根据项目经理的提出的页面所需功能，进行详细开发，工作中用到了以下技术：</p>
          <p class="weui-media-box__desc desc-override">1.Bootstrap进行页面的布局。</p>
          <p class="weui-media-box__desc desc-override">2.jQuery通过ajax与后台交互，将取得数据操作DOM进行渲染。</p>
          <p class="weui-media-box__desc desc-override">3.SVN的使用</p>
        </div>

        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">项目经验</h4>
          <van-divider dashed>2016/12 -- 2017/05</van-divider>
          <p class="weui-media-box__desc">
            <strong>宜昌住房保障大数据平台</strong>
          </p>
          <p class="weui-media-box__desc">
            <strong>责任描述：</strong>
          </p>
          <p class="weui-media-box__desc desc-override">
            涉及技术，bootstrap-table，bootstrap-datetimepicker，应用plUpload进行文件上传操作。
            同时真对现有项目中，没有进行代码的压缩打包的问题，将gulp应用到现有的项目中，
            应用browser-sync、gulp-uglify等插件，提高了前端开发效率。
          </p>
          <p class="weui-media-box__desc">
            <strong>项目简介：</strong>
          </p>
          <p class="weui-media-box__desc desc-override">该项目是针对保障房的登记管理，设置相应的规则来筛选出符合规则的人员信息。</p>

          <van-divider dashed>2016/08 -- 2016/12</van-divider>
          <p class="weui-media-box__desc">
            <strong>宜都自然资源监测管理系统</strong>
          </p>
          <p class="weui-media-box__desc">
            <strong>责任描述：</strong>
          </p>
          <p
            class="weui-media-box__desc desc-override"
          >根据UI的设计稿进行页面的布局，通过AJAX与后台交互，取得JSON格式的数据进行页面渲染。项目使用了Echarts图表，遇到的需求是需要监听饼图的点击事件来动态刷新柱形图，通过仔细阅读Echarts官方api，解决了这个需求，使项目如期交付。由于经常操作图表，所以将多次使用的方法进行封装，使得代码能够重用，并且提高了开发效率。</p>
          <p class="weui-media-box__desc">
            <strong>项目简介：</strong>
          </p>
          <p class="weui-media-box__desc desc-override">
            该项目主要是对地区资源的统计汇总，方便上级部门进行决策分析。
            项目中大量使用了图表Echarts，使数据直观展示。
          </p>

          <van-divider dashed>2016/03 -- 2016/07</van-divider>
          <p class="weui-media-box__desc">
            <strong>宜昌司法法务网格</strong>
          </p>
          <p class="weui-media-box__desc">
            <strong>责任描述：</strong>
          </p>
          <p
            class="weui-media-box__desc desc-override"
          >负责项目的前端页面开发，根据UI的设计稿进行页面布局，通过AJAX与后台进行数据交互，完成页面的渲染。项目中首次使用requirejs，由于没有人实际用过，我通过查找requirejs的api和github上的demo，将requirejs加入到项目中，使得项目开发工作能够正常进行下去。</p>
          <p class="weui-media-box__desc">
            <strong>项目简介：</strong>
          </p>
          <p
            class="weui-media-box__desc desc-override"
          >项目中使用jQuery库进行DOM操作，统计报表功能中使用echarts图表，并且考虑到图表的公用性，我将其封装为util函数，减少代码冗余。</p>

          <van-divider dashed>2015/07 -- 2016/01</van-divider>
          <p class="weui-media-box__desc">
            <strong>黑龙江省住院医师规范化培训专题网</strong>
          </p>
          <p class="weui-media-box__desc">
            <strong>责任描述：</strong>
          </p>
          <p
            class="weui-media-box__desc desc-override"
          >实习阶段，使用jQuery的api，通过ajax与后台交互，取得json后进行DOM渲染。使用bootstrap的组件库，进行页面布局，来完成开发任务。</p>
          <p class="weui-media-box__desc">
            <strong>项目简介：</strong>
          </p>
          <p class="weui-media-box__desc desc-override">项目主要是从学生报名之后开始，涉及到考试管理，成绩管理，招生录取，科室培训等。</p>
        </div>

        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">教育经历</h4>
          <p class="weui-media-box__desc">2012/09 -- 2016年6月</p>
          <p class="weui-media-box__desc">
            <strong>黑龙江八一农垦大学|计算机科学与技术|本科|统招</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      experience: [
        "2014年加入去哪儿网，开始了没有白天黑夜的客服生活",
        "2015年转为培训老师，带出了一批又一批的学生们",
        "2016年，开始了出差培训的生活，全国各地跑",
        "2016年11月，遇上了他，我的男朋友，从此开始了相亲相爱的生活"
      ],
      msg: "your love",
      header: "我的资料",
      list: [
        {
          title: "自我评价",
          desc: `本人对待工作认真负责，注重团队协作，能够活跃团队气氛，适应能力强。1年内，从客服成长为多技能培训讲师，目前是酒店项目负责人。
        多次出差，参与各个外包公司的新人招聘，宣讲，培训等环节。
        具有优秀的学习能力，管理能力，创新能力，沟通能力。喜欢做有挑战性的工作，能承受工作压力。`
        }
      ],
      type: "2",
      footer: {
        url: "http://www.baidu.com",
        title: "baidu"
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.head {
  text-align: center;
  img {
    width: 5rem;
    height: 5rem;
    border: 1px solid #ccc;
    border-radius: 50% 50%;
  }
}

.desc-override {
  text-indent: 2em;
  -webkit-line-clamp: 5;
  span {
    color: #3a79bb;
  }
}
</style>
