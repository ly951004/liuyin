<template>
    <div>
        <header>
       <img src="../assets/nextcopy2x.png" alt="" class="body_img">
       <p class="header_text">龙湖奖励榜</p>
   </header>
   <section>
       <div class="box">
        <p class="host">第0704期奖池</p>
        <ul class="list ">
            <li>6</li><li>9</li><li>6</li><li>4</li><li>9</li><li>5</li><li>0</li><li>0</li>
        </ul>
        <p class="add_cont">本期还剩<span class="add_text">2天21小时33分29秒</span></p>
        <img src="../assets/history2.png" alt="" class="history_img">
        <div class="add">
            <p class="add_text">恭喜第一名进击的巨人<span class="add_cont">领取了21222</span></p>
            <p  class="add_text">恭喜第一名进击的巨人<span  class="add_cont">领取了21222</span></p>
            <p  class="add_text">恭喜第一名进击的巨人<span  class="add_cont">领取了21222</span></p>
        </div>
       </div>
    </section>
  <footer>
      <div class="footer_bgd">
                <img src="../assets/ellipse2x.png" alt="" class="app_img">
             <div class=" trapezoid">
                 <img src="../assets/trapezoid.png" alt="" class="trapezoid_img">
             </div>
             <div class="flash">
             <div class="fight">
                 <p class="fight_text">第0902期<span class="fight_cont">2019-09-05至2019-9-9</span></p>
             </div>
             <div class="fight">
                <p class="fight_text">第0902期<span class="fight_cont">2019-09-05至2019-9-9</span></p>
            </div>
            <div class="fight">
                <p class="fight_text">第0902期<span class="fight_cont">2019-09-05至2019-9-9</span></p>
            </div>
            <div class="fight">
                <p class="fight_text">第0902期<span class="fight_cont">2019-09-05至2019-9-9</span></p>
            </div>
            <div class="shadow">
                    <img src="../assets/shadow.png" alt="" class="shadow_img">
                </div>
            </div>
            <p class="hot">--往期查询--</p>
      </div>
  </footer>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
   body{
    width: 100%;
    min-height: 100vh;
    background-image: url('../assets/winners\ list\ bgd.png');
    background-size:100% ;
    position: relative;
}
.body_img{
    width:0.25rem;
    height: 0.47rem;
    position: absolute;
    top: 0.91rem;
    left: 0.4rem;
}
.header_text{
    padding-top: 0.92rem;
    text-align:center;
    font-size:0.48rem ;
    color:#fff ;
}
.box{
    width: 8.16rem;
    height: 10.25rem;
    margin: 0.28rem auto ;
    background-image: url('../assets/box2x.png');
    background-size: 100%;
    position: relative;
}
.host{
    font-size:0.59rem;
    color:#066FE4FF;
    padding-top: 1.33rem;
    text-align: center;
    letter-spacing: 0.15rem;
    font-weight: bold;
}
.list >li:first-child{
    margin-left:0.92rem;
}
.list li{
    width:0.67rem ;
    height:0.8rem;
    font-size:0.8rem;
    color: #fff;
    line-height: 0.8rem;
    display: inline-block;
    border-radius:0.13rem;
    background:#3E8AFDFF;
    text-align: center;
    margin-right: 0.13rem;
    margin-top: 0.56rem;
}
.add_cont{
    padding-top: 0.46rem;
    text-align: center;
    font-size: 0.4rem;
    color: #828281FF;
}
.add_text{
    color: #0964E1FF;
    padding-left: 0.27rem;
}
.history_img{
    width:2.32rem ;
    height: 0.72rem;
    position: absolute;
    top:5.57rem;
    left:2.85rem ;
}
.add{
    width: 5.92rem;
    height: 2.53rem;
    border-radius:0.13rem ;
    border:0.02rem solid #FCEB07FF ;
    margin:1.3rem auto;
    background:#E4EBFCFF;
}
.add_text{
    font-size: 0.29rem;
    color: #282828FF;
    text-align: center;
}
.add_cont{
    color: #FF4B28FF;
    font-size: 0.29rem;
}
.add_text{
    padding-bottom: 0.1rem;
}
.add >.add_text:first-of-type{
    padding-top: 0.63rem;
}
.footer_bgd{
    width: 100%;
    height:7.01rem;
    background-image: url('../assets/bigbox2x.png');
    background-size: 100% 7.01rem;
    margin-top: -1.6rem;
    position: absolute;
    bottom: 0;
    left: 0;
}
.app_img{
    width: 5.55rem;
    height: 1.13rem;
    vertical-align: bottom;
    position: absolute;
    top:1.11rem;
    left: 2.35rem;
}
.trapezoid{
    width: 8.36rem;
    height: 0.89rem;
    margin:  1.52rem auto;
    margin-bottom: 0;
}
.trapezoid_img{
    width: 8.36rem;
    height: 0.89rem;
}
.fight{
    width:6.91rem ;
    height:0.87rem ;
    border-bottom:0.02rem solid #F7F9FFFF;
    margin:0 auto ;
    margin-bottom: 0;
}
.fight_text{
    font-size: 0.32rem;
    color:#966C13FF;
    line-height: 0.87rem;
    text-align: center;
}
.fight_cont{
    padding-left:0.4rem;
}
.flash{
    width:8.36rem ;
    height:3.95rem;
    background:#fff;
    margin: 0.16rem auto;
    border-bottom: 0;
    position: relative;
}
.hot{
    font-size: 0.35rem ;
    color: #874911FF;
    position: absolute;
    top:1.32rem;
    left:3.96rem;
}
.shadow_img{
    width:8.36rem;
    height: 0.63rem;
}
.shadow{
    width: 8.36rem;
    height: 0.63rem;
    position: absolute;;
    left:0 ;
    bottom:0.27rem;
}
</style>
