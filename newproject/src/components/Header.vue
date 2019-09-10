<template>
        <div class="box">
            <img src="../assets/next6.png" alt="" class="box_img">
            <p class="box_text">{{title}}</p>
        </div>
</template>
<script>
export default {
  props: ['title']
}
</script>
<style lang="scss">
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
</style>
