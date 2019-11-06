<template>
  <div id="app">
    <p >{{meg}}</p>
    计数板：{{score}}
    <button @click="addup">+ </button>
     <button @click="adddown"> -</button>
     <p :title="text">{{text}}</p>
  </div>
</template>
<script>
export default {
     data() {
       return {
        score:0,
        text:'你好吗~~',
        meg:'Hello World!'
       }
     },
     methods: {
       addup(){
         this.score++;
       },
       adddown(){
        
         this.score--;
       }
     }
}
var body=document.getElementById('')
</script>
<style lang="scss" scoped>
  
</style>