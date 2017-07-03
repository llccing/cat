<template>
  <div class="game">
    <!--<img class="money" src="../../static/img/money.png" alt="money">-->

    <div class="moneydiv" v-for="item in posArr" :style="{left:item+'px',top: 0}"></div>

    <img class="beauty" src="../../static/img/beauty.png" alt="money">

  </div>
</template>

<script>
export default {
  data () {
    return {
      posArr: []
    }
  },
  mounted () {
    this.posArr = this.getRandomXpos(5)
    setTimeout(() => {
      this.getElements()
    }, 2000)
  },
  methods: {
    execute (count) {
      this.getElements()
    },
    getRandomXpos (count) {
      let posArr = []
      for (let i = 0; i < count; i++) {
        posArr.push(parseInt(Math.random() * 300 + 5))
      }
      return posArr
    },
    getElements () {
      var elements = document.getElementsByClassName('moneydiv')
      for (let i = 0; i < elements.length; i++) {
        this.changeHeightPos(elements[i])
      }
    },

    changeHeightPos (ele) {
      let height = 0
      setInterval(() => {
        height += 10
        if (parseInt(ele.style.top) < 430) {
          ele.style.top = height + 'px'
        } else {
          if (ele) {
            ele.parentNode.removeChild(ele)
          }
        }
      }, 200)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .game{
    margin: 50px auto;
    width: 330px;
    height: 500px;
    background: #000;
    box-sizing: border-box;
    padding: 0;
    position: relative;
  }
  img.money{
    width: 50px;
    height: 50px;

  }

  .moneydiv{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 0px;
    left:0;
  }
  .beauty{
    position: absolute;
    bottom: -30px;
    width: 100px;
    height: 150px;
  }

</style>
