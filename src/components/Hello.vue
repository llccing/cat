<template>
  <div class="wrap">
    <div  v-text="response"></div>
    <h3>this is home page</h3>


    <!-- <x-button type="primary" @click.native="sendMsg">发送内容</x-button> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {
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
