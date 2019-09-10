<template>
    <div>
        <img src="../assets/nextcopy_black.png" alt="" class="img_air">
            <p class="box_weight">加入社群VIP推广</p>
        <div class="hart">
        <p class="hart_text">可用余额 <span class="hart_box">(TSDT)</span>
        </p>
            <em class="hart_good">1800</em>
        </div>
        <div class="hert">
            <p class="hart_text">投入<span class="hart_box">(ATOMU)</span>
            </p>
            <input placeholder="最低500起" class="deft"/>
        </div>
        <p class="wendy">需要1325.52TSDT</p>
        <button class="but">
            立即加入
        </button>
        <div>
            <p class="pic">{{pictureText}}</p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      pictureText: '宣传图尺寸'
    }
  },
  porps: {
  },
  computed: {
  },
  component: {
  },
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
  },
  updated () {
  },
  destroyed () {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
body{
    background: #F7F9FF;
    position: relative;
}
.img_air{
    position: absolute;
    left:0.45rem ;
    top:0.83rem;
}
.box_weight{
    padding-top: 0.85rem;
    text-align: center;
    font-size: 0.48rem;
    font-weight: bold;
    color: #2C2C2C;
}
.hart{
    width: 100%;
    height: 1.33rem;
    background: #fff;
    margin-top: 0.43rem;
}
.hert{
    width: 100%;
    height: 1.33rem;
    background: #fff;
    margin-top: 0.29rem;
}
.hart_text{
    float: left;
    line-height: 1.33rem;
    padding-left: 0.52rem;
    font-weight: bold;
    font-size:0.43rem ;
    color: #1C1C1C;
}
.hart_box{
    font-size: 0.35rem;
    color: #292929;
}
.hart_good{
    float: right;
    line-height: 1.33rem;
    padding-right: 0.73rem;
    font-weight: bold;
    font-size:0.48rem ;
    color: #407FFF;
}
.deft{
    float: left;
    line-height: 1.33rem;
    outline: none;
    border: none;
    font-size: 0.4rem;
    color: #C4C4C6;
    padding-left: 0.56rem;
}
.wendy{
    float: right;
    margin-top: 0.2rem;
    margin-right:0.36rem ;
    font-size:0.36rem;
    color: #6B6969;
}
.but{
    width: 9.33rem;
    height:1.33rem;
    background: #407FFF;
    border-radius: 0.1rem;
    margin:0.78rem 0.33rem 0.67rem 0.33rem;
    font-size: 0.4rem;
    color: #fff;
    border: none;
    padding: 0;
}
.pic{
    width: 9.33rem;
    height: 9.33rem;
    margin: 0 auto;
    font-size: 0.35rem;
    line-height: 9.33rem;
    text-align: center;
    color: #6B6969;
    background: #eee;
}
</style>
