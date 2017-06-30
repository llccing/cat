<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
      <cell title="Vux" value="Cool" is-link>
        to list
      </cell>
    </group>

    <tabbar>
      <tabbar-item link="/List">
        <img slot="icon" src="../assets/img/heart1.png" height="128" width="128">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot link="Hello">
        <img slot="icon" src="../assets/img/heart2.png" height="128" width="128">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/img/hear4.png" height="256" width="256">
        <span slot="label">Explore</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Group, Cell, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
