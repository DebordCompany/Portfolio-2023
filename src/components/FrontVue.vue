<script>


export default {
    props: ["container", "imagen", "square"]
}
</script>

<template>
    <div class="home_front">
      <div class="home_front_container" :class="container">
        <img :src="imagen" alt="" class="home_front_img" />
        <div class="home_front_square" :class="square"></div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
.home_front_container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.home_front_img {
  width: 80%;
}
.home_front_square {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 90%;
  height: 100px;
  background: var(--color-primary);
  mix-blend-mode: var(--blend);
  
}
.home_front_container--left{
  justify-content: flex-start;
  align-items: flex-start;
}
.home_front_square--left{
  left: 0;
  right: inherit;
}
</style>