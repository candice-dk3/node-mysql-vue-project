<template>
    <h1>Fruits</h1>
    <div>
        <section v-for="fruit in $store.state.fruits" :key="fruit.id">
            {{ fruit.id }}
            {{ fruit.fruit_name }}
            {{ fruit.weight }}
            {{ fruit.amount }}
            <button v-if="$cookies.get('token')" @click="addToCart()">Purchase</button>
        </section>
    </div>
</template>
<script>
export default {
    methods:{
        getFruits(){
            this.$store.dispatch('getFruits')
        },
        addToCart(){
            this.$store.dispatch('addToCart')
        }
    }
}
</script>
<style>
    
</style>