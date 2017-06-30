<template>
  <div>
    <x-header  :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = false">Home</x-header>
    <router-view></router-view>
    <tabbar>
      <tabbar-item link="List">
        <img slot="icon" src="../assets/img/heart1.png" height="128" width="128">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot link="Hello">
        <img slot="icon" src="../assets/img/heart2.png" height="128" width="128">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="Photos">
        <img slot="icon" src="../assets/img/hear4.png" height="256" width="256">
        <span slot="label">Explore</span>
      </tabbar-item>
    </tabbar>
	</div>
</template>


<script>
  import { Card, XHeader, Tabbar, TabbarItem } from 'vux'
  export default {
    components: {
      Card,
      XHeader,
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        msg: 'time'
      }
    }
  }
</script>

<style scoped>
	
</style>
