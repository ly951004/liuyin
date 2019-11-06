<template>
    <div>
           <img src="../assets/nextcopy.png" alt="" class="dataup_img">
           <p class="pass">可用资产明细</p>
                <div class="box_data">
                    <p class="pass_box">可用
                    <span class="start">(ATOMU)</span>
                    </p>
                    <strong class="list_app">1324.00000000</strong>
                </div>
                <div class="assdle">
                    <span class="assdle_obg">累计收入</span>
                    <em class="assdle_first">+1589523.00058425</em>
                </div>
            <div class="assdle_hurt">
                <span class="assdle_obg">累计支出</span>
                <em class="assdle_wend">-1589523.00058425</em>
            </div>
            <p class="list_up">收支明细</p>
            <div class="node">
                <p class="code"> 日结收益</p>
                <span class="mape">2019-08-03 00:03:00</span>
                <em class="code_mape">+19.85201200</em>
            </div>
            <div class="node">
                <p class="code"> 兑换股票</p>
                <span class="mape">2019-08-03 00:03:00</span>
                <em class="code_app">-3119.85201200</em>
            </div>
            <div class="node">
                <p class="code"> 提币</p>
                <span class="mape">2019-08-03 00:03:00</span>
                <em class="code_app">-1200.85201200</em>
            </div>
            <div class="node">
                <p class="code"> 排行榜奖励</p>
                <span class="mape">2019-08-03 00:03:00</span>
                <em class="code_mape">+19.85201200</em>
            </div>
            <div class="node" style="margin-bottom:0.51rem ">
                <p class="code"> 红包</p>
                <span class="mape">2019-08-03 00:03:00</span>
                <em class="code_mape">+19.85201200</em>
   </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
body{
    background: #F7F9FF;
    position: relative;
}
.dataup_img{
    width:0.25rem;
    height:0.47rem;
    position:absolute;
    top:0.99rem;
    left:0.56rem;
}
.pass{
    padding-top:0.85rem;
    text-align: center;
    font-size: 0.48rem;
    color:#1F1F1F;
    font-weight: bold;
 }
.box_data{
    width:9.33rem;
    height:3.84rem;
    background:#5193F8;
    margin:0.79rem auto;
    margin-bottom: 0;
    border-radius: 0.11rem;
 }
.pass_box{
    float:left;
    margin:0.81rem 0 0 0.44rem;
    font-size:0.4rem ;
    color: #FEFEFF;
    font-weight:bold ;
 }
.start{
    font-size: 0.4rem;
    color:rgba(254,254,255,0.6);
    font-weight:normal;
}
.list_app{
    float: left;
    margin: 0.68rem 0 0 0.52rem;
    font-size: 0.93rem;
    color: #FEFEFF;
    font-weight: normal;
}
.assdle{
    width: 9.25rem;
    height: 1.35rem;
    background: #fff;
    margin:0.32rem auto ;
    margin-bottom: 0;
    border-radius: 0.11rem;
}
.assdle_hurt{
    width: 9.25rem;
    height: 1.35rem;
    background: #fff;
    margin:0.02rem auto ;
    margin-bottom: 0;
    border-radius: 0.11rem;
}
.assdle_obg{
    float: left;
    margin-top: 0.41rem;
    margin-left:0.31rem ;
    font-weight:bold;
    font-size:0.4rem ;
    color:#252424;
}
.assdle_first{
    float: right;
    margin-top: 0.51rem;
    margin-right: 0.29rem;
    color: #FC536B;
    font-weight: normal;
    font-size:0.48rem ;
}
.assdle_wend{
    float: right;
    margin-top: 0.51rem;
    margin-right: 0.29rem;
    color: #4EEA9B;
    font-weight: normal;
    font-size:0.48rem ;
}
.list_up{
    padding-top: 0.14rem;
    padding-left: 0.65rem;
    padding-bottom: 0.27rem;
    font-size: 0.4rem;
    color: #868789;
}
.node {
    width: 9.33rem;
    height: 1.6rem;
    background: #FFF;
    margin: 0 auto;
    margin-bottom: 0.13rem;
    position: relative;
    border-radius: 0.13rem;
}
.code{
    float: left;
    margin-top: 0.41rem;
    margin-left: 0.33rem;
    font-size:0.4rem ;
    font-weight: bold;
    color:#252424;
}
.mape{
    top: 0.92rem;
    left:0.33rem ;
    font-size:0.32rem ;
    color:#878686 ;
    position: absolute;
}
.code_mape{
    float: right;
    margin-top:0.69rem ;
    margin-right:0.35rem ;
    font-size:0.48rem;
    font-weight: normal;
    color:#FC536B;
}
.code_app{
    float: right;
    margin-top:0.69rem ;
    margin-right:0.35rem ;
    font-size:0.48rem;
    font-weight: normal;
    color:#4EEA9B;
}
</style>
