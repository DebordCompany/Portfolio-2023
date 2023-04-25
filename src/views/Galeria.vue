<script setup>
import imagenes from "../data/img.json"
</script>
<template>
    
<div class="galeria">
    <div class="galeria_inner">
        <div class="galeria_img" v-for="items in imagenes" :key="items">
            <img :src="items.img" :alt="items.alt">
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.galeria{
    padding: 2em;
    
}
.galeria_inner{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    overflow: hidden;
    @include tablet(){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
.galeria_img{
    padding: .5em;
    
}
</style>