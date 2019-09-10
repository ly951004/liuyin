<template>
    <div>
         <header>
    <img src="../assets/nextcopy2x.png" alt="" class="header_img">
    <p class="header_cont">第0902期排行榜</p>
    </header>
    <section>
        <div class="mouse">
          <div class="go_left">
              <p class="go_cont">本期余额</p>
              <p class="go_text">(ATOMU)</p>
              <p class="go_title">9520</p>
          </div>
          <div class="go_right">
            <p class="go_cont">领取合计</p>
            <p class="go_text">(ATOMU)</p>
            <p class="go_title">9520</p>
        </div>
        </div>
    </section>
    <footer>
       <div class="like">
           <div class="king">
                <img src="../assets/yellowking@2x.png" alt="" class="like_img">
            <p class="like_app">第1名
                <span class="like_add">138****2536</span>
                <span class="like_title">2569.30</span >
            </p>
            </div>
        <div class="king">
                <img src="../assets/grayking.png" alt="" class="like_img">
            <p class="like_app">第2名
                <span class="like_add">138****2536</span>
                <span class="like_title">2569.30</span >
            </p>
        </div>
        <div class="king"  >
                <img src="../assets/like-img@2x.png" alt="" class="like_img">
             <p class="like_app">第3名
                <span class="like_add">138****2536</span>
                <span class="like_title">2569.30</span >
                </p>
        </div>
        <div class="king"  >
             <p class="like_cont">04
                <span class="like_up">138****2536</span>
                <span class="like_title">2569.30</span >
                </p>
        </div>
        <div class="king"  >
                <p class="like_cont">05
                   <span class="like_up">138****2536</span>
                   <span class="like_title">2569.30</span >
                   </p>
           </div>
           <div class="king"  >
                <p class="like_cont">06
                   <span class="like_up">138****2536</span>
                   <span class="like_title">2569.30</span >
                   </p>
           </div>
           <div class="king"  >
                <p class="like_cont">07
                   <span class="like_up">138****2536</span>
                   <span class="like_title">2569.30</span >
                   </p>
           </div>
           <div class="king"  >
                <p class="like_cont">08
                   <span class="like_up">138****2536</span>
                   <span class="like_title">2569.30</span >
                   </p>
           </div>
           <div class="king"  >
                <p class="like_cont">09
                   <span class="like_up">138****2536</span>
                   <span class="like_title">2569.30</span >
                   </p>
           </div>
           <div class="king" style="border-bottom: 0" >
                <p class="like_cont">10
                   <span class="like_up">138****2536</span>
                   <span class="like_title">2569.30</span >
                   </p>
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
header{
    width: 100%;
    height: 5.32rem;
    background-image: url('../assets/winners\ list-bgd.png');
    background-size: 100% 5.32rem;
}
.mouse{
    width: 100%;
    height: 1.55rem;
    background:#0D6CFCFF;
}
.like{
    width:100% ;
    height: 11rem;
}
.header_img{
    position: absolute;
    width: 0.25rem;
    height: 0.47rem;
    top: 0.93rem;
    left: 0.4rem;
}
.header_cont{
    padding-top: 0.99rem;
    text-align: center;
    font-size:0.48rem ;
    color: #FFFEFEFF;
}
.go_left{
    float: left;
    margin-left: 2.15rem;
}
.go_cont{
    font-size: 0.16rem;
    color: #EFEDEDFF;
    text-align: center;
}
.go_text{
     font-size: 0.16rem;
     color: #EFEDEDFF;
     text-align: center;
}
.go_title{
    font-size: 0.48rem;
    color: #FFFEFEFF;
    text-align: center;
}
.go_right{
    float: right;
    margin-right: 2.1rem;
}
.king{
    width: 9.2rem;
    height: 1.05rem;
    border-bottom: 0.02rem solid #F7F9FFFF;
    margin: 0 auto;
    margin-bottom:0 ;
    position: relative;
}
.like_img{
    width: 0.56rem;
    height:0.48rem;
    position: absolute;
    top:0.31rem;
    left: 0.35rem;
}
.like_title{
    font-size: 0.4rem;
    color: #121922FF;
    padding-left: 1.25rem;
}
.like_app{
    font-size: 0.32rem;
    color:#333333FF ;
    line-height: 1.05rem;
    padding-left: 1.28rem;
}
.like_add{
    font-size:0.35rem ;
    color: #7C838DFF;
    padding-left: 1.21rem;
}
.like_cont{
    font-size: 0.32rem;
    color:#333333FF ;
    line-height: 1.05rem;
    padding-left: 1.48rem;
}
.like_up{
    font-size:0.35rem ;
    color: #7C838DFF;
    padding-left: 1.48rem;
}
</style>
