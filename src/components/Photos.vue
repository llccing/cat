<template>
  <div class="photos">
          <div v-for="item in img" :key="item.date">
              <img slot="header" :src="item.url">
              <div slot="content" class="card-padding">
                  <p class="p1">{{item.date}}</p>
                  <p class="p2">{{item.desc}}</p>
              </div>
          </div>
	</div>
</template>


<script>
  // import { Card } from 'vux'
  export default {
    components: {
      // Card
    },
    data () {
      var imgUrl = [
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_1837.JPG',
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_1919.JPG',
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_1977.JPG',
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_2074.JPG',
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_2121.JPG',
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_2152.JPG',
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_2257.JPG',
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_2286.JPG',
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_2289.JPG',
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_2290.JPG',
        'http://7xst43.com1.z0.glb.clouddn.com/IMG_2299.JPG'
      ]

      return {
        img: [{
          url: imgUrl[0],
          date: '拍摄与 2017年7月1日',
          desc: `丫头去泰国了，给我买了件帅气的衬衫，虽然有点大，嘿嘿，特别喜欢，谢谢宝贝。`
        }, {
          url: imgUrl[1],
          date: '拍摄与 2017年7月2日',
          desc: `我们去朝阳大悦城吃嗨辣，真的辣，那个鱼身上都是辣椒，丫头不吃鱼皮、不吃辣，虽然是4种味道的锅底，但是还是抵挡不住辣味。`
        }, {
          url: imgUrl[2],
          date: '拍摄与 2017年7月3日',
          desc: `从朝阳大悦城回来的路上，经过了一个满是星星的地方，拍张照片留个念。`
        }, {
          url: imgUrl[3],
          date: '拍摄与 2017年7月10日',
          desc: `和丫头去兴城，美丽的小城市，好想和你一直这里，慢慢变老`
        }, {
          url: imgUrl[4],
          date: '拍摄与 2017年7月11日',
          desc: `兴城的古镇，据说摸摸身后的大狮子就会有好运气，我没摸它，因为我觉得遇见你已经是我最好的运气了。`
        }, {
          url: imgUrl[5],
          date: '拍摄与 2017年7月12日',
          desc: `你说你喜欢海，那我就陪你在海边，牵着你的手在海滩漫步，感觉棒棒哒！`
        }, {
          url: imgUrl[6],
          date: '拍摄与 2017年7月13日',
          desc: `和丫头一起画鞋，那只睡觉的懒阿狸，是我画的，但是不是我的风格，那是你的风格，我问你，床和我你选哪个。`
        }, {
          url: imgUrl[7],
          date: '拍摄与 2017年7月14日',
          desc: `和丫头去古北水镇，重点是我睡沙发，哼。我忍了，谁让我喜欢你呢。被爱的总是有恃无恐！`
        }, {
          url: imgUrl[8],
          date: '拍摄与 2017年7月15日',
          desc: `给丫头买的冰激凌，你不能吃凉的，只能吃几口，剩下的都让我吃了，嘿嘿`
        }, {
          url: imgUrl[9],
          date: '拍摄与 2017年7月16日',
          desc: `古北水镇，住在复式楼房里，真想一直和你在这悠闲的生活下去。我希望我们以后的日子是这样的。`
        }, {
          url: imgUrl[10],
          date: '拍摄与 2017年7月17日',
          desc: `你是不是想亲我，嘿嘿，宝贝丫头，我想你。`
        }]
      }
    }
  }

</script>

<style scoped>
	img{
		width:100%;
		display:block;
	}
	.p1{
		color:#999;
		font-size:12px;
	}
	.p2{
		font-size:14px;line-height:1.2;
	}
</style>
