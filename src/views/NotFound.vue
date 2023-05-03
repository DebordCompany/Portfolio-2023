<script setup>
import HallVueVue from "../components/HallVue.vue";
</script>
<template>
  <div class="not">
    <div class="not_inner">
      <div class="not_inner_text broad gap">Ops, ha habido un error.</div>
      <div class="not_inner_routes">
        <HallVueVue
          class="broad gap"
          item_1="Skills"
          item_2="Proyectos"
          item_3="Contacto"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.not {
  height: 80vh;
  width: 100vw;
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.not_inner {
  width: 100%;
}
.not_inner_text{
    font-size: 1.8em;
    font-weight: 100;
}
</style>
