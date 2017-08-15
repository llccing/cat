<template>
  <div class="wrap">
    
    <group>
      <x-input title="内容：" v-model="value"></x-input>
    </group>

    <x-button type="primary" @click.native="sendMsg">发送内容</x-button>
  </div>
</template>

<script>
import { XInput, XButton, Group } from 'vux'
// 引入 ajax。

export default {
  components: {
    XInput,
    XButton,
    Group
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    sendMsg () {
      // add mothod
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap{
    background-color: #f7f7f7;
  }
</style>
