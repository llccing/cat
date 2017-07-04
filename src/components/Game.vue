<template>
  <div class="game">
    <img src="../../static/img/money.png" alt="money" class="moneydiv" v-for="item in posArr" :style="{left:item+'px',top: 0}">

    <!--<div class="moneydiv" v-for="item in posArr" :style="{left:item+'px',top: 0}"></div>-->

    <img ref="beauty" class="beauty" src="../../static/img/beauty.png" alt="money">
    <p>score: <span>{{score}}</span></p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      posArr: [],
      count: 0,
      score: 0
    }
  },
  mounted () {
    setInterval(() => {
      this.getRandomXpos(5).map(item => {
        this.posArr.push(item)
      })
      setTimeout(() => {
        this.getElements()
      }, 0)
    }, 1000)
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
        if (elements[i].style.top === '0px') {
          this.count++
          this.changeHeightPos(elements[i], this.count)
        }
      }
    },

    changeHeightPos (ele, i) {
      let height = 0
      let key = 'interval' + i
      key = setInterval(() => {
        height += 10
        if (parseInt(ele.style.top) < 430) {
//          console.log(ele)
          if (ele.offsetLeft > 50 && ele.offsetLeft < 100 && ele.offsetTop + 100 > 480) {
            console.log(this.$refs.beauty)
            console.log(this.$refs.beauty.offsetLeft)
            console.log(ele.offsetLeft, ele.offsetTop)
            this.score += 10
            if (ele) {
              clearInterval(key)
              ele.parentNode.removeChild(ele)
            }
          } else {
            ele.style.top = height + 'px'
          }
//          ele.style.top = height + 'px'
        } else {
          if (ele) {
            clearInterval(key)
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

  p{
    color: red;
    float: right;
    z-index: 98999;
  }
  span{
    color: yellow;
  }

</style>
