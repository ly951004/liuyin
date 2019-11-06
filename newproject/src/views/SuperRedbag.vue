<template>
    <div>
        <header>
      <img src="../assets/nextcopy2x.png" alt="">
      <p class="app_wendy">第0902期红包</p>
  </header>
  <section>
        <div class="mast">
            <div class="mast_left">
                <p class="mast_text">9520</p>
                <p class="mast_cont">本期余额 </p>
                <p class="mast_host">(ATOMU)</p>
            </div>
            <div class="mast_center">
                    <p class="mast_text">9520</p>
                    <p class="mast_cont">领取合计 </p>
                    <p class="mast_host">(ATOMU)</p>
            </div>
            <div class="mast_right">
                    <p class="mast_text">9520</p>
                    <p class="mast_cont"> 奖池滚存</p>
                    <p class="mast_host">(ATOMU)</p>
            </div>
        </div>
        <div class="bug">
            <p class="bug_text">红包记录</p>
        </div>
  </section>
 <footer>
     <div class="last">
         <div class="font">
             <p class="font_list">2569.30</p>
             <span class="font_shirt">138****2536</span>
             <span class="font_add">2018-01-02 <span class="font_gone">12:32</span></span>
         </div>
         <div class="font">
                <p class="font_list">2569.30</p>
                <span class="font_shirt">138****2536</span>
                <span class="font_add">2018-01-02 <span class="font_gone">12:32</span></span>
        </div>
        <div class="font">
                <p class="font_list">2569.30</p>
                <span class="font_shirt">138****2536</span>
                <span class="font_add">2018-01-02 <span class="font_gone">12:32</span></span>
        </div>
        <div class="font">
                <p class="font_list">2569.30</p>
                <span class="font_shirt">138****2536</span>
                <span class="font_add">2018-01-02 <span class="font_gone">12:32</span></span>
        </div>
        <div class="font">
                <p class="font_list">2569.30</p>
                <span class="font_shirt">138****2536</span>
                <span class="font_add">2018-01-02 <span class="font_gone">12:32</span></span>
        </div>
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
    background: #F2F7FF;
}
header{
    width: 100%;
    height: 5.56rem;
    background-image: url('../assets/redBag.png');
    background-size: 100% 5.56rem;
    position: relative;
    vertical-align: bottom;
}
header img{
    width: 0.25rem;
    height: 0.47rem;
    position: absolute;
    left:0.4rem ;
    top:0.93rem ;
}
.app_wendy{
    padding-top: 0.93rem;
    text-align: center;
    font-size:  0.48rem;
    color:#fff;
}
.mast{
    width: 100%;
    height: 1.95rem;
    background: #fff;
}
.mast_left{
    width: 1.6rem;
    height: 1.95rem;
    margin-left: 1rem;
    float: left;
}
.mast_center{
    width: 1.6rem;
    height: 1.95rem;
    float: left;
    margin-left: 1.5rem;
}
.mast_right{
    width: 1.6rem;
    height: 1.95rem;
    float: right;
    margin-right: 1.12rem;
}
.mast_text{
    font-size: 0.4rem;
    color: #000;
    text-align: center;
}
.bug{
    width: 100%;
    height: 1.03rem;
}
.bug_text{
    font-size: 0.43rem;
    color: #565656;
    line-height: 1.03rem;
    padding-left: 0.88rem;
}
.last{
    width: 100%;
    height: 9.25rem;
    background: #fff;
}
.mast_host{
    font-size:0.21rem;
    color:#000 ;
    opacity: 0.54;
    text-align: center;
}
.mast_cont{
    font-size:0.29rem ;
    color:#000 ;
    opacity: 0.54;
    padding-top: 0.27rem;
    text-align: center;
}
.last{
    width: 100%;
    height:9.25rem ;
}
.font{
    width: 9.2rem;
    height:1.91rem ;
    border-bottom: 0.02rem solid #F2F7FFFF;
    margin: 0 auto;
}
.font_list{
    font-size:0.53rem;
    color: #121922;
    line-height:1.91rem ;
    padding-left: 0.67rem;
    float: left;
}
.font_shirt{
    font-size:0.37rem;
    color: #7C838DFF;
    float: right;
    padding-top: 0.4rem;
    padding-right:1.25rem;
}
.font_add{
    font-size:0.37rem;
    color: #7C838DFF;
    float: right;
    padding-bottom: 0.36rem;
    padding-right:0.08rem;
}
.font_gone{
    padding-left: 0.27rem;
}
</style>
