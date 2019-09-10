<template>
    <div>
     <header>
        <img src="../assets/nextcopy.png" alt="" class="fox">
        <p class="list_fox">我的社群</p>
    </header>
    <div class="app">
        <div class="high">
        </div>
         <p class="box">冬去春来</p>
         <img src="../assets/super.png" alt="" class="star">
         <span class="old">13389642649</span>
         <p class="young">团队人数<em class="art">13</em>人</p>
    </div>
    <div class="app">
            <div class="high">
            </div>
             <p class="box">冬去春来</p>
             <img src="../assets/pic-vip2.png" alt="" class="star">
             <span class="old">13389642649</span>
             <p class="young">团队人数<em class="art">13</em>人</p>
        </div>
        <div class="app">
                <div class="high">
                </div>
                 <p class="box">冬去春来</p>
                 <img src="../assets/pic-vip3.png" alt="" class="star">
                 <span class="old">13389642649</span>
                 <p class="young">团队人数<em class="art">13</em>人</p>
            </div>
            <div class="app">
                    <div class="high">
                    </div>
                     <p class="box">冬去春来</p>
                     <img src="../assets/pic-vip4.png" alt="" class="star">
                     <span class="old">13389642649</span>
                     <p class="young">团队人数<em class="art">13</em>人</p>
                </div>
                <div class="app">
                        <div class="high">
                        </div>
                         <p class="box ">冬去春来</p>
                         <span class="old">13389642649</span>
                         <p class="young">团队人数<em class="art">13</em>人</p>
                    </div>
                    <footer>
                        <p class="footer_text">社群总计<span class="hake">200</span>人</p>
                    </footer>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
    body{
    background: #F7F9FF;
}
header{
    width: 100%;
    height: 1.67rem;
    background: #fff;
    position: relative;
}

.fox{
    position: absolute;
    top: 0.82rem;
    left:0.4rem;
    width: 0.25rem;
    height:0.47rem ;
}
.list_fox{
    text-align: center;
    color: #232222;
    font-size:0.43rem ;
    font-weight: bold;
    padding-top: 0.75rem;
}
.app{
    width:9.47rem ;
    height: 2.83rem;
    background:#fff ;
    border-radius:0.07rem;
    margin: 0.27rem auto;
    position: relative;
}
.high{
    float: left;
    width: 2.4rem;
    height: 2.16rem;
    background: red;
    margin-top: 0.32rem;
    margin-left: 0.33rem;
}
.box{
  font-size: 0.43rem;
  color: #262626;
  font-weight: bold;
  float: right;
  margin-top: 0.25rem;
  margin-right:4.61rem ;
}
.star{
   position: absolute;
   top:0.36rem;
   right: 3.61rem;
   width: 0.81rem;
   height:0.33rem;
}
.old{
   float: left;
   font-size: 0.4rem;
   font-weight:normal ;
   color: #262626;
   margin-left: 0.4rem;
   margin-top: 0.19rem
}
.young{
    font-size: 0.35rem;
    color: #262626;
    right: 0.37rem;
    bottom: 0.15rem;
    position: absolute;
}
.art{
    color: #407FFF;
}
footer{
    width: 100%;
    height: 0.56rem;
    background: #fff;
}
.hake{
    color: #407FFF;
}
.footer_text{
    line-height: 0.56rem;
    text-align: center;
    font-size: 0.32rem;
    color:#33384C;
}
</style>
