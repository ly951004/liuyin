<template>
    <div>
        <header>
        <img src="../assets/nextcopy2x.png" alt=""/>
        <p class="app">幸运红包</p>
        <p class="host">第0704期奖池</p>
        <ul class="list">
            <li>6</li><li>9</li><li>6</li><li>4</li><li>9</li><li>5</li><li>0</li><li>0</li> 
        </ul>
        <p class="add_cont">本期还剩<span class="add_text">2天21小时33分29秒</span></p>
    </header>
    <section>
    <div class="app_list">
            <button class="but">试一试手气</button>
            <div class="box">
                    <h2 class="box_hasd" >.最新领取.</h2>
                    <p class="box_text">恭喜进击的巨人领取了21222</p>
                    <p class="box_text">恭喜进击的巨人领取了21222</p>
                    <p class="box_text">恭喜进击的巨人领取了21222</p>
                </div>   
        </div> 
    </section> 
    <footer>
            <p class="box_line">--往期查询--</p>
            <div class="footer_box" style="margin-top: 0.48rem">
                <p class="footer_cont">
                    第0902期
                    <span class="foot_text">
                        2019年-09-05至2019-09-09
                    </span>
                    <div class="footer_box">
                        <p class="footer_cont">
                        第0902期
                        <span class="foot_text">
                        2019年-09-05至2019-09-09
                        </span>
                    <div class="footer_box">
                        <p class="footer_cont">
                        第0902期
                        <span class="foot_text">
                        2019年-09-05至2019-09-09
                        </span>
                    <div class="footer_box">
                    <p class="footer_cont" style="border-bottom: 0.02rem solid#F7F9FFFF ">
                        第0902期
                    <span class="foot_text" >
                        2019年-09-05至2019-09-09
                    </span>
                </p>
            </div>   
          </footer> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    header{
    width: 100%;
    height: 5.56rem;
    background-image: url('../assets/redbgd.png');
    background-size: 100% 4.56rem;
    background-repeat: no-repeat;
    position: relative;
}
header img{
    width: 0.25rem;
    height: 0.47rem;
    position: absolute;
    left:0.4rem ;
    top:0.93rem ;
}
.app{
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
.list >li:first-child{
    margin-left:1.8rem; 
}
.list li{
    width:0.67rem ;
    height:0.8rem;
    font-size:0.8rem;
    color: #fff;
    line-height: 0.8rem;
    display: inline-block;
    border-radius:0.13rem;
    background:rgba(0,0,0,0.2);
    text-align: center;
    margin-right: 0.13rem;
    margin-top: 0.37rem;
}
.host{
    font-size:0.59rem;
    color:#fff ;
    padding-top: 0.76rem;
    text-align: center;
    letter-spacing: 0.15rem;
}
.add_cont{
    padding-top: 0.48rem;
    text-align: center;
    font-size: 0.4rem;
    color: #828281FF;
}
.add_text{
    color: #F42E2EFF;
    padding-left: 0.27rem;
}
.app_list{
    width: 9.2rem;
    height: 6.35rem;
    background: #F6322FFF;
    margin: 0.37rem auto;
    border-radius: 0.4rem;
    margin-bottom: 0;
    position: relative;
}
.but{
    width: 5.33rem;
    height: 1.08rem;
    border: none;
    outline:none ;
    background:#edd03dFF ;
    font-size: 0.48rem;
    color:#655E05FF;
    display: block;
    border-radius: 0.54rem;
    position: absolute;
    top:0.53rem;
    left: 2.07rem;
   
}
.box{
    width: 5.28rem;
    height:3.07rem ;
    background: #fff;
    border: 0.08rem solid #E42E2BFF;
    border-radius: 0.4rem;
    position: absolute;
    top:2.29rem;
    left:2.01rem ;
}
.box_hasd{
    font-size:0.35rem ;
    color: #F6322FFF;
    text-align: center;
}
.box_text{
    font-size:0.32rem ;
    color: #CE1917FF;
    padding-left:0.4rem ;
    padding-bottom: 0.2rem;
}
.box_line{
    padding-top:0.85rem ;
    text-align: center;
    font-size:0.35rem ;
    color:#6C3811FF;
}
.footer_box{
    width: 6.91rem;
    height: 0.88rem;
    border-top:0.02rem solid #F7F9FFFF;
    margin: 0 auto ;
}
.footer_cont{
    font-size:0.32rem  ;
    color:#630A0AFF ;
    line-height: 0.88rem;
    text-align: center;
}
.foot_text{
     padding-left: 0.2rem;
}
</style>