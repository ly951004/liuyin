<template>
    <div>
          <header>
           <img src="../assets/next6.png" alt="" class="img_add">
           <p class="app">
               社区总资产 (ATOMU)
           </p>
           <span class="app_cont">49,228.20</span>
           <div class="add">
               <p class="add_out"> 社区人数 (人)</p>
               <span class="add_art">9000</span>
           </div>
           <div class="add_host">
               <p class="add_out">累计投入(ATOUM)</p>
               <span class="add_art">931.22</span>
           </div>
        </header>
        <section>
            <div class="head">
                <img src="../assets/logo-left.png" alt="" class="img_app">
                <p class="road">我的社群</p>
                <img src="../assets/logo-right.png" alt="" class="img_list">
                <p class="date">社群收益</p>
            </div>
            <div class="get">
                  <p class="david_ore">社群成员</p>
                  <img src="../assets/super.png" alt="" class="david_host">
                  <p class="david_rext">会员即将到期，请立即续费！<a href="" class="obj">></a></p>
                  <div class="date_hred"></div>
                  <div class="date_hred">
                        <div class="okin"></div>
                        <p class="worf">贡献</p>
                        <span class="worl_cont">1500</span>
                  </div>
                  <div class="date_hred">
                        <div class="okin" style="background: #FE9D05"></div>
                            <p class="worf">奖励</p>
                            <span class="worl_cont">+4200.00000000</span>
                  </div>
                  <div class="date_hred">
                            <div class="okin" style="background: #2279FE"></div>
                            <p class="worf">可用</p>
                            <span class="worl_cont">500.00000000</span>
                            <button class="assdle">提币</button>
                            <button class="assdle_out">兑换</button>
                  </div>
            </div>
        </section>
        <footer>
            <div class="bug">
                    <img src="../assets/img4.png" alt="" class="mage">
            </div>
           <img src="../assets/bgd2x.png" alt="" class="sky">
        </footer>
        <div class="cover"></div>
        <div class="root">
            <div class="make">
                 <h1 class="make_wolf">尊贵的会员即将到期</h1>
            </div>
             <p class="add_up">您的奖励已领取完成，会员已失效!</p>
             <p class="add_up" style="margin-top: 0"> 今日有<span class="clear">12563556522</span>ATOUM未领取到，恢复身份即可继续获取社群奖励.</p>
             <p class="add_up">否则2天后即将永久失效.</p>
             <img src="../assets/pic-vip.png" alt="" class="tesk">
             <button class="dark">立即续费</button>
            </div>
            <img src="../assets/pic_wrong.png" alt="" class="wrong">
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
 body{
    background: #F4F6FF;
}
header{
 width: 100%;
 height: 5.33rem;
 background-image: url('../assets/assdie2x.png');
 background-size: 100% 5.33rem;
 position: relative;
}
.img_add{
    position: absolute;
    left: 0.41rem;
    top:1.01rem;
}
.app{
    padding-top: 2.15rem;
    padding-left:0.51rem;
    color:#fff ;
    font-size: 0.37rem;
}
.app_cont{
    display: block;
    padding-top: 0.13rem;
    padding-left:0.53rem;
    color:#fff ;
    font-size: 0.8rem;
}
.add{
    width: 2.04rem;
    height: 0.97rem;
    float: left;
    padding-left: 0.68rem;
    padding-top: 0.41rem;
    font-size:0.32rem ;
    color: #B7CAFF;
}
.add_art{
    display: block;
    font-size: 0.32rem;
    color: #fff;
}
.add_host{
    width: 2.77rem;
    height: 0.97rem;
    float: right;
    padding-right: 0.55rem;
    padding-top: 0.41rem;
}
.head{
    width: 100%;
    height: 1.27rem;
    background: #fff;
    position: relative;
}
.img_app{
    position: absolute;
    top:0.37rem;
    left:0.95rem;
}
.road{
    font-size: 0.43rem;
    color: #252525;
    line-height: 1.27rem;
    padding-left: 1.68rem;
    float: left;
}
.img_list{
    position: absolute;
    top:0.37rem;
    right: 3.65rem;
}
.date{
    font-size: 0.43rem;
    color: #252525;
    line-height: 1.27rem;
    padding-right: 1.68rem;
    float:right;
}
.get{
    width: 100%;
    height: 5.26rem;
    background: #fff;
    margin-top: 0.27rem;
    overflow: hidden;
}
.bug{
    width: 100%;
    height: 2.8rem;
    background: #fff;
    margin-top: 0.27rem;
    position: relative;
}
.mage{
    position: absolute;
    top:0.4rem;
    left:0.51rem;
}
header{
    width: 100%;
    height: 5.53rem;
}
.sky{
    width:100% ;
    height:2.75rem ;
}
.david_ore{
    float: left;
    font-size: 0.4rem;
    color:#101010 ;
    line-height: 1.29rem;;
    padding-left: 0.68rem;
}
.david_host{
    float: left;
    padding-top:0.52rem ;
    padding-left: 0.05rem;
    width: 0.81rem;
    height: 0.33rem;
}
.david_rext{
    float: right;
    line-height: 1.29rem;
    margin-right:0.45rem ;
    font-size: 0.32rem;
    color:#FD314D ;
}
.obj{
    color:#FD314D ;
}

.date_hred{
    width: 9.49rem;
    height: 1.29rem;
    border-bottom: 0.02rem solid #F4F6FF;
    margin-left: 0.51rem;
}
.okin{
    float: left;
    width: 0.12rem;
    height: 0.12rem;
    border-radius: 0.06rem;
    background: #FF5858;
    margin-top:0.63rem ;
    margin-left: 0.56rem;
}
.worf{
    float: left;
    font-size: 0.43rem;
    line-height:1.29rem;
    color: #575758;
    padding-left: 0.25rem;
}
.worl_cont{
    float: left;
    font-size:0.48rem ;
    line-height: 1.29rem;
    color: #2E2F30;
    padding-left: 0.69rem;
}
.assdle{
    width:1.17rem ;
    height: 0.56rem;
    border-radius: 0.3rem;
    border:0.02rem solid #186DFE;
    background: #fff;
    color: #186DFE;
    font-size: 0.23rem;
    float: left;
    margin-top: 0.37rem;
    margin-left: 0.71rem;
    outline: none;
}
.assdle_out{
    width:1.2rem ;
    height: 0.59rem;
    border-radius: 0.3rem;
    border: none;
    background: #186DFE;
    font-size: 0.23rem;
    color: #fff;
    float: right;
    margin-top: 0.37rem;
    margin-right: 0.47rem;
    outline: none;
}
.cover{
    position: fixed;
    background: #000;
    opacity: 0.6;
    width: 100%;
    height: 100%;
    z-index: 1;
    top:0;
    left: 0;
}
.root{
    position: fixed;
    top: 3.85rem;
    left: 2.04rem;
    z-index: 2;
    width: 6rem;
    height: 7.73rem;
    background-image: url('../assets/bgd-pic2x.png');
    background-size: 100%;
}
.make{
    width: 100%;
    height: 0.52rem;
    margin-top:0.36rem
}
.make_wolf{
    font-size:0.53rem ;
     color: #FFF;
     text-align: center;
}
.root_make{
    width:4.59rem ;
    height:  1.56rem;
    margin: 0.24rem auto;
}
.dark{
    width: 3.73rem;
    height:1.07rem ;
    background: #186DFE;
    border-radius:0.54rem;
    color: #fff;
    font-size: 0.48rem;
    border: none;
    outline: none;
    display: block;
    margin:0  auto 0.48rem auto;
}
.add_up{
    font-size: 0.27rem;
    color: #fff;
    margin-top: 0.37rem;
    margin-left: 0.88rem;
}
.tesk{
   margin-top: 0.6rem;
   margin-left: 2.11rem;
    width:1.67rem;
    height: 1.53rem;
}
.clear{
    color: #FF5858;
}
.wrong{
    position: fixed;
    bottom: 1.49rem;
    left:4.85rem;
    z-index: 2;
    width:0.55rem ;
    height: 0.55rem;
}
</style>
