<template>
    <div>
 <p :class="ok" fontSize=''>内容</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
        ok:'red',
       
        }
    },

}
</script>
<style lang="scss" scoped>
.red{
    color: red;
}

</style>
