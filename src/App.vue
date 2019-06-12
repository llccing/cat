<template>
  <div>
    <!-- <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :title="title">
      <span slot="overwrite-left" @click="showLeft = !showLeft">
        <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </span>
    </x-header> -->
    <transition>
      <router-view class="router-view"></router-view>
    </transition>

    <!-- <tabbar>
      <tabbar-item show-dot :selected="route.path === '/Home'" link="/Home">
        <img slot="icon" src="./assets/img/heart1.png" height="128" width="128">
        <span slot="label">Home</span>
        </tabbar-item>
      <tabbar-item  :selected="route.path === '/Hello'" link="/Hello">
        <img slot="icon" src="./assets/img/heart2.png" height="128" width="128">
        <span slot="label">Life</span>
      </tabbar-item>
      <tabbar-item badge="3"  :selected="route.path === '/Photos'" link="/Photos">
        <img slot="icon" src="./assets/img/hear4.png" height="256" width="256">
        <span slot="label">Photos</span>
      </tabbar-item>
    </tabbar> -->

    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="home-o">我和她</van-tabbar-item>
      <van-tabbar-item to="/photos" icon="search">生活</van-tabbar-item>
      <van-tabbar-item to="/game" icon="friends-o">游戏</van-tabbar-item>
    </van-tabbar>


      <!-- <popup v-model="showLeft" position="left" style="background-color: rgb(53, 73, 94);">
        <div style="width:200px;margin-top: 20px;">
          <Group title="快捷方式">
            <cell title="丫头简历" is-link link="/GirlResume" @click.native="showLeft=false"></cell>
            <cell title="我的简历" is-link link="/BoyResume" @click.native="showLeft=false"></cell>
            <cell title="照片墙" value="love" is-link link="/Photos" @click.native="showLeft=false"></cell>
            <cell title="Game" is-link link="/Game" @click.native="showLeft=false"></cell>
          </Group>
        </div>
      </popup> -->
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      showLeft: false,
      active: 0,
    }
  },
  method: {

  },
  computed: {
    // ...mapState({
    //   route: state => state.route,
    //   path: state => state.route.path
    // }),
    title () {
      return '首页'
    }
  }
}
</script>

<style lang="less">
  body {
    background-color: #fbf9fe;
  }
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    margin:0;
  }
  .router-view{
    padding-top: 22px;
    padding-bottom: 26px;
  }
</style>
