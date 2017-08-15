<template>
  <div class="wrap">
    <div  v-text="response">

    </div>
    <a v-if="!!url" href="url">去看看</a>
    <group>
      <x-input title="内容：" v-model="value"></x-input>
    </group>

    <x-button type="primary" @click.native="sendMsg">发送内容</x-button>
  </div>
</template>

<script>
import { XInput, XButton, Group } from 'vux'
import axios from 'axios'

export default {
  components: {
    XInput,
    XButton,
    Group
  },
  data () {
    return {
      value: '',
      response: '',
      url: ''
    }
  },
  methods: {
    sendMsg () {
      // add mothod
      let url = 'http://www.tuling123.com/openapi/api'
      let data = {
        'key': '953238a43a3a4206bdd6a35876a61a84',
        'info': this.value,
        // Ioc:'', 位置[可选]
        'userid': '125305'
      }
      axios.get(url, {
        params: data
      }).then(data => {
        return data.data
      }).then(data => {
        this.response = data.text
        if (data.url) {
          console.log(data.url)
          this.url = data.url
        }
      })
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
