<template>
    <div class="some">
        <ul>
            <li v-for="item in list" :key="item">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[]
        }
    },
}
</script>
<style lang="scss" >
    
</style>