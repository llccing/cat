<template>
  <div>
	<card>
     <img slot="header" src="http://placeholder.qiniudn.com/640x300">
      <div slot="content" class="card-padding">
        <p class="p1">Posted on January 21, 2015</p>
        <p class="p2">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>
      </div>
    </card>
	<card>
     <img slot="header" src="http://placeholder.qiniudn.com/640x300">
      <div slot="content" class="card-padding">
        <p class="p1">Posted on January 21, 2015</p>
        <p class="p2">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>
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
        msg: 'time'
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
