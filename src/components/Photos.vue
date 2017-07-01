<template>
  <div class="photos">
          <card v-for="item in img" :key="item.date">
              <img slot="header" :src="item.url">
              <div slot="content" class="card-padding">
                  <p class="p1">{{item.date}}</p>
                  <p class="p2">{{item.desc}}</p>
              </div>
          </card>
	</div>
</template>


<script>
  import { Card } from 'vux'
  export default {
    components: {
      Card
    },
    data () {
      return {
        img: [{
          url: '../static/img/1.jpg',
          date: '拍摄与 2017年7月1日',
          desc: `我希望，她和我一样，
                  胸中有血，心头有伤。
                  不要什么花好月圆，
                  不要什么笛短箫长。

                  要穷，穷得象茶，
                  苦中一缕清香，
                  要傲，傲得象兰，
                  高挂一脸秋霜。
                  我们一样，就敢在暗夜里，
                  徘徊在白色的坟场，
                  去倾听鸱鸺的惨笑，
                  追逐那飘移的荧光。 `
        }, {
          url: '../static/img/1.jpg',
          date: '拍摄与 2017年7月1日',
          desc: `我希望，她和我一样，
                  胸中有血，心头有伤。
                  不要什么花好月圆，
                  不要什么笛短箫长。

                  要穷，穷得象茶，
                  苦中一缕清香，
                  要傲，傲得象兰，
                  高挂一脸秋霜。
                  我们一样，就敢在暗夜里，
                  徘徊在白色的坟场，
                  去倾听鸱鸺的惨笑，
                  追逐那飘移的荧光。 `
        }, {
          url: '../static/img/1.jpg',
          date: '拍摄与 2017年7月1日',
          desc: `我希望，她和我一样，
                  胸中有血，心头有伤。
                  不要什么花好月圆，
                  不要什么笛短箫长。

                  要穷，穷得象茶，
                  苦中一缕清香，
                  要傲，傲得象兰，
                  高挂一脸秋霜。
                  我们一样，就敢在暗夜里，
                  徘徊在白色的坟场，
                  去倾听鸱鸺的惨笑，
                  追逐那飘移的荧光。 `
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
