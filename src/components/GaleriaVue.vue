<script>
export default {
    props: ["imagenes"]
}
</script>
<template>
    <div class="proyects_galeria">
        <div class="proyects_galeria_inner" v-for="item in imagenes" :key="item">
        <img :src="item" alt="">
    </div>
    </div>
    
</template>
<style lang="scss" scoped>
.proyects_galeria{
    overflow: auto;
    scroll-snap-type: mandatory x;
    display: flex;
    

    
}
.proyects_galeria_inner{
    min-width: 80%;
}
</style>