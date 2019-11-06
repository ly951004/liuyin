<template>
    <div>
       <p>计数：{{score}}</p>
      <button @click="addup">add</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            score:0
        }
    },
    methods: {
        addup(){
            this.score++;
        }
    }
}
</script>
<style lang="scss" scoped> 
</style>
