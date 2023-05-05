<script>
export default {
    props: ["img", "title"]
}
</script>
<template>
    <div class="proyects_front">
      <div class="proyects_front_img">
        <img :src="img" alt="" />
      </div>
      <div class="proyects_front_title">
        <h2>{{ title }}</h2>
      </div>
    </div>
</template>
<style lang="scss">
.proyects_front {
  position: relative;
  
}
.proyects_front_img {
 
  max-height: 30vh;
  overflow: hidden;
  filter: brightness(80%);
}

.proyects_front_title {
    position: absolute;
    bottom: 0;
    padding: 1em;
    width: 100%;
    background: rgba(47, 45, 45, 0.31);
    color: var(--white-soft);
    backdrop-filter: blur(3px);
    font-weight: 800;
    font-size: 1.5em;
    
}
</style>