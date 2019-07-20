<template>
  <div ref="game" class="game">
    <img ref="fundResources" src="../../../public/img/fund-sources.png" alt="fund-resources" class="fund-resources" style="left: 100px;">
    <img src="../../../public/img/money.png" alt="money" class="moneydiv" v-for="item in posArr" :style="{left:item+'px',top: 63}">

    <!--<div class="moneydiv" v-for="item in posArr" :style="{left:item+'px',top: 0}"></div>-->

    <img ref="beauty" class="beauty" src="../../../public/img/beauty.png" alt="money">
    <p>score: <span>{{score}}</span></p>

  </div>
</template>

<script>
import { clearInterval } from 'timers';
export default {
  data () {
    return {
      posArr: [],
      count: 0,
      score: 0,
      flag: true,
      fund: true,
      timer1: null,
      timer2: null,
      timer3: null,
    }
  },
  mounted () {
//     this.timer1 = setInterval(() => {
// //      this.getRandomXpos(5).map(item => {
// //        this.posArr.push(item)
// //      })
//       this.moveFoundResources()
      
//       this.timer2 = setTimeout(() => {
//         this.getElements()
//       }, 0)
//     }, 300)

//      this.timer3 =  setInterval(() => {
//       this.moveBeauty()
//     }, 200)
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
    moveFoundResources () {
      let step = 25
      let x = this.$refs.fundResources.offsetLeft
      if (this.fund) {
        if (x + 100 > 320) {
          this.fund = false
          x -= step
        } else {
          x += step
        }
      } else {
        if (x < -20) {
          this.fund = true
          x += step
        } else {
          x -= step
        }
      }
      let y = x + 50
      x += 'px'
      this.$refs.fundResources.style.left = x
      this.posArr.push(y)
    },
    moveBeauty () {
      let step = 10
      let x = this.$refs.beauty.offsetLeft
      if (this.flag) {
        if (x + 90 > 320) {
          this.flag = false
          x -= step
        } else {
          x += step
        }
      } else {
        if (x < 0) {
          this.flag = true
          x += step
        } else {
          x -= step
        }
      }
      x += 'px'
      this.$refs.beauty.style.left = x
    },
    getElements () {
      var elements = document.getElementsByClassName('moneydiv')
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].offsetTop === 63) {
          this.count++
          // this.changeHeightPos(elements[i], this.count)
        }
      }
    },
    changeHeightPos (ele, i) {
      let height = 63
      let key = 'interval' + i
      key = setInterval(() => {
        height += 15
        if (ele.offsetTop < 500) {
//          console.log(ele)
          let start = this.$refs.beauty.offsetLeft
          let end = start + this.$refs.beauty.width
          if (ele.offsetLeft >= start && ele.offsetLeft <= end && ele.offsetTop + 100 > 480) {
//            console.log(this.$refs.beauty)
//            console.log(this.$refs.beauty.offsetLeft)
//            console.log(ele.offsetLeft, ele.offsetTop)
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
  },
  beforeDestroy(){
    clearInterval(this.timer1)
    clearInterval(this.timer2)
    clearInterval(this.timer3)
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
    top: 63px;
    left:0;
  }
  .beauty{
    position: absolute;
    bottom: -30px;
    width: 100px;
    height: 150px;
  }
  .fund-resources{
    width: 130px;
    height: 130px;
    position: absolute;
    top: -33px;
    /*left: 100px;*/
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
