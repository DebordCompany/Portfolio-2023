<script>
export default {
  props: ["imagenes"],
  
};
</script>
<template>
  <div class="proyects_galeria gap">
    <div
      class="proyects_galeria_inner"
      v-for="item in imagenes"
      :key="item">
      <img :src="item" alt="" />
    </div>
    
  </div>
</template>
<style lang="scss" scoped>
.proyects_galeria {
  overflow: auto;
  scroll-snap-type: mandatory x;
  display: flex;
  gap: 1em;
  @include tablet(){
    overflow: inherit;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
.proyects_galeria_inner {
  min-width: 80%;
  scroll-snap-align: center;
  display: flex;
  aspect-ratio: 1/1;
  @include tablet(){
    display: block;
   min-width: none;
   
   
  }
}
.proyects_galeria_inner img {
    
    @include tablet(){
        width: 100%;
   height: 100%;
    }
}

</style>
