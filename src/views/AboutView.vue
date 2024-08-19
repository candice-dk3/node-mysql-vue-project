<template>
    <div>
        <button @click="getFruits()">Get Fruits</button>
    </div>
</template>
<script>
export default {
    methods: {
        getFruits(){
        this.$store.dispatch('getFruits')
    }}
}
</script>
<style>
    
</style>