<template>
    <div>
        <header>
            <Header title="我的收益"/>
            <div class="kiss">
                <p class="kiss_font">累计收益
                    <span>(ATMU)</span>
                </p>
            </div>
            <p class="kiss_wend">1466. 00000000</p>
            <div class="made">
                <p class="made_off">昨日收益
                    <span >(ATMU)</span>
                </p>
            </div>
            <p class="cont">+19. 85201200</p>
        </header>
        <div class="shirt">
            <p class="shirt_text">2019年8月</p>
            <span class="shirt_cont">+19548. 25855542</span>
        </div>
        <div class="app">
            <p class="app_store">2019-08-03</p>
            <span class="app_done">+19. 85201200</span>
        </div>
        <div class="app">
                <p class="app_store">2019-08-03</p>
                <span class="app_done">+19. 85201200</span>
            </div>
            <div class="app" >
                <p class="app_store">2019-08-03</p>
                <span class="app_done">+19. 85201200</span>
            </div>
            <div class="app" >
                <p class="app_store">2019-08-03</p>
                <span class="app_done">+19. 85201200</span>
            </div>
            <div class="shirt">
                <p class="shirt_text">2019年7月</p>
                <span class="shirt_cont">+19548. 25855542</span>
            </div>
            <div class="app">
                <p class="app_store">2019-07-03</p>
                <span class="app_done">+19. 85201200</span>
            </div>
            <div class="app">
                <p class="app_store">2019-07-03</p>
                <span class="app_done">+19. 85201200</span>
            </div>
            <div class="app">
                <p class="app_store">2019-07-03</p>
                <span class="app_done">+19. 85201200</span>
            </div>
    </div>
</template>
<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  }
}
</script>
<style lang="scss" scoped>
   body{
  background: #F7F9FF;
}
header{
    width: 100%;
    height: 6.67rem;
    background-image: url('../assets/picture.png');
    background-size:100% 6.67rem;
}
.box{
    width: 100%;
    height:0.47rem ;
    padding-top: 0.76rem;
}
.box_img{
    float: left;
    margin-left: 0.35rem;
}
.box_text{
    line-height: 0.47rem;
    font-weight: bold;
    color: #fff;
    font-size:0.43rem ;
    text-align: center;
}
.kiss{
    width: 100%;
    height:0.33rem ;
    margin-top: 0.84rem;
}
.kiss_font{
    float: left;
    font-size:0.35rem ;
    margin-left: 0.56rem;
    font-weight:normal ;
    color:rgba(255,255,255,0.6);
    line-height: 0.33rem;
}
.kiss_wend{
     margin-top: 0.65rem;
     margin-left: 0.63rem;
     font-size: 0.93rem;
     font-weight: normal;
     color: #fff;
}
.made{
    width: 100%;
    height:0.33rem ;
    margin-top: 0.96rem;
}
.made_off{
    float: left;
    font-size:0.35rem ;
    margin-left: 0.56rem;
    font-weight:normal ;
    color:rgba(255,255,255,0.6);
    line-height: 0.33rem;
}
.cont{
     margin-top: 0.55rem;
     margin-left: 0.73rem;
     font-size: 0.67rem;
     font-weight: normal;
     color: #fff;
}
.shirt{
   width: 100%;
   height: 1.25rem;
}
.shirt_text{
    float: left;
    line-height:1.25rem ;
    margin-left: 0.51rem;
    font-size:0.48rem ;
    color: #33384C;
}
.shirt_cont{
    float: right;
    line-height: 1.25rem;
    margin-right:0.45rem ;
    font-size:0.48rem;
    color: #FC536B;
}
.app {
    width: 100%;
    height: 1.25rem;
    background: #fff;
    margin-bottom: 0.02rem;
}
.app_store{
    float: left;
    line-height:1.25rem ;
    margin-left: 0.53rem;
    font-size:0.4rem ;
    color: #656566;
}
.app_done{
    float: right;
    line-height: 1.25rem;
    margin-right:0.49rem ;
    font-size:0.4rem;
    color: #33384C;
}
</style>
