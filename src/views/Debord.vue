<script setup>
import ProyectsFrontVueVue from "../components/ProyectsFrontVue.vue";
import Galeria from "../components/GaleriaVue.vue";
import SeoVue from "../components/SeoVue.vue";
import proyects from "../data/proyects.json";

</script>
<template>
  <div class="proyects broad">
    <ProyectsFrontVueVue
    :img="proyects.debord.img"
    :title="proyects.debord.title"
    />
    <SeoVue class="gap"
    :title="proyects.debord.title"
    :first="proyects.debord.desc.content1"
    :second="proyects.debord.desc.content2"
    :third="proyects.debord.desc.content3"
    />
    <Galeria
    :imagenes="proyects.debord.galeria"
    />
  </div>
</template>

<style lang="scss" scoped>
.proyects {
  margin-top: 4em;
}

</style>
