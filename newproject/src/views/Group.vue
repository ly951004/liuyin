<template>
    <div>
      <header>
          <img src="../assets/nextcopy_black.png" alt="" class="harder">
          <p class="harder_text">可用资产明细</p>
          <div class="null"></div>
      </header>
      <div class="box"></div>
      <section>
          <div class="section_box">
              <p class="white_text">可用 <span class="white_title">(ATOMU)</span></p>
               <p class="white_cont">1324. 00000000</p>
          </div>
      </section>
      <div class="ok"></div>
      <footer>
          <div class="try">
              <p class="try_cont">累计收入</p>
              <p class="try_text">+1589523. 00058425</p>
          </div>
          <div class="try">
              <p class="try_cont">累计支出</p>
              <p class="try_title">-1589523. 00058425</p>
          </div>
          <div class="davi"><p class="davi_text">收支明细</p></div>
            <div class="dog">
              <div class="cart">
                  <p class="dog_text">日结收益</p>
                  <p class="dog_cont">2019-08-03 00:03:00</p>
              </div>
              <div class="aunt">
                  <p class="dog_title">+19. 85201200</p>
             </div>
            </div>
             <div class="dog">
              <div class="cart">
                  <p class="dog_text">兑换股票</p>
                  <p class="dog_cont">2019-08-03 00:03:00</p>
              </div>
              <div class="tiem">
                  <p class="dog_cart">-3119. 85201200</p>
             </div>
            </div>
            <div class="dog">
              <div class="cart">
                  <p class="dog_text">提币</p>
                  <p class="dog_cont">2019-08-03 00:03:00</p>
              </div>
              <div class="tiem">
                  <p class="dog_cart">-1200. 85201200</p>
             </div>
            </div>
             <div class="dog">
              <div class="cart">
                  <p class="dog_text">排行榜奖励</p>
                  <p class="dog_cont">2019-08-03 00:03:00</p>
              </div>
              <div class="aunt">
                  <p class="dog_title">+19. 85201200</p>
             </div>
            </div>
             <div class="dog">
              <div class="cart">
                  <p class="dog_text">红包</p>
                  <p class="dog_cont">2019-08-03 00:03:00</p>
              </div>
              <div class="aunt">
                  <p class="dog_title">+19. 85201200</p>
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
     height: 1.57rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     background: #F7F9FFFF;
 }
.harder{
    display: block;
    width: 0.25rem;
    height: 0.47rem;
    margin-left: 0.56rem;
}
.harder_text{
    font-size: 0.48rem;
    color: #1F1F1FFF;
    font-weight: bold;
}
.null{
    width: 0.25rem;
    height:0.47rem;
}
.box{
    width: 100%;
    height: 0.24rem;
    background: #F7F9FFFF;
}
section{
    width: 100%;
    height: 3.84rem;
    background: #F7F9FFFF;
    display: flex;
    justify-content: center;
}
.section_box{
    width: 9.33rem;
    height: 3.84rem;
    background:-webkit-linear-gradient(right,#5193f8FF,#277cfeFF);
    border-radius: 0.13rem;
    display: flex;
    flex-direction: column;
}
.ok{
    width: 100%;
    height: 0.32rem;
    background: #F7F9FFFF;
}
.white_text{
    font-size:0.4rem ;
    color: #FEFEFFFF;
    padding-top: 0.72rem;
    padding-left: 0.44rem;
}
.white_title{
    opacity: 0.6;
}
.white_cont{
    font-size: 0.93rem;
    color:#FEFEFFFF;
    padding-top: 0.47rem;
    padding-left: 0.52rem;
}
footer{
    width: 100%;
    height: 12.44rem;
    background: #F7F9FFFF;
}
.try{
    width: 9.33rem;
    height: 1.24rem;
    background: #fff;
    border-radius: 0.13rem;
    border-bottom: 0.02rem solid #F7F9FFFF;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.try_cont{
    font-size: 0.4rem;
    color: #252424FF;
    padding-left: 0.31rem;
}
.try_text{
    font-size: 0.48rem;
    color: #FC536BFF;
    padding-right: 0.32rem;
}
.try_title{
    font-size:0.48rem;
    color: #4EEA9BFF;
    padding-right: 0.32rem;
}
.davi{
    width: 9.33rem;
    height: 0.96rem;
    margin: 0 auto;
    margin-bottom: 0;
    display: flex;
    align-items: center;
}
.davi_text{
    font-size: 0.4rem;
    color: #868789FF;
    padding-left:0.28rem ;
}
.dog{
    margin: 0 auto;
    margin-bottom: 0.13rem;
    background:#fff;
    width: 9.25rem;
    height: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cart{
    width: 3.33rem;
    height: 1.6rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 0.33rem;
}
.dog_text{
    font-size:0.4rem ;
    color: #252424FF;
}
.dog_cont{
    font-size:0.32rem ;
    color: #878686FF;
}
.aunt{
    width: 3.1rem;
    height: 1.6rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 0.35rem;
}
.dog_title{
    font-size:0.43rem ;
    color: #FC536BFF;
}
.dog_cart{
    font-size: 0.43rem;
    color: #4EEA9BFF;
}
.tiem{
    width: 3.45rem;
    height: 1.6rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 0.35rem;
}
</style>
