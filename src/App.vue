<template>
  <div>
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :title="title">
      <span slot="overwrite-left" @click="showLeft = !showLeft">
        <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </span>
    </x-header>

    <transition>
      <router-view class="router-view"></router-view>
    </transition>

    <tabbar>
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
    </tabbar>


      <popup v-model="showLeft" position="left" style="background-color: rgb(53, 73, 94);">
        <div style="width:200px;margin-top: 20px;">
          <Group title="快捷方式">
            <cell title="丫头简历" is-link link="/GirlResume" @click.native="showLeft=false"></cell>
            <cell title="我的简历" is-link link="/BoyResume" @click.native="showLeft=false"></cell>
            <cell title="照片墙" value="love" is-link link="/Photos" @click.native="showLeft=false"></cell>
          </Group>
        </div>
      </popup>
  </div>

</template>

<script>
import { XHeader, ViewBox, Tabbar, TabbarItem, Popup, Group, Cell } from 'vux'
import { mapState } from 'vuex'

export default {
  components: {
    XHeader,
    ViewBox,
    Tabbar,
    TabbarItem,
    Popup,
    Group,
    Cell
  },
  data () {
    return {
      showLeft: false
    }
  },
  method: {

  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path
    }),
    title () {
      return '首页'
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';

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
