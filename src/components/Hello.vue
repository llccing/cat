<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <group>
      <x-input title="内容：" v-model="value"></x-input>
    </group>

    <x-button type="primary">发送内容</x-button>
  </div>
</template>

<script>
import { XInput, XButton } from 'vux'

export default {
  components: {
    XInput,
    XButton
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
