<script setup>
import ProyectsFrontVueVue from "../components/ProyectsFrontVue.vue";
import Galeria from "../components/GaleriaVue.vue";
import SeoVue from "../components/SeoVue.vue";
import ProyectsFunctions from "../components/ProyectsFunctions.vue";
import proyects from "../data/proyects.json";

</script>
<template>
  <div class="proyects broad">
    <ProyectsFrontVueVue
    :img="proyects.ezpays.img"
    :title="proyects.ezpays.title"
    />
    <SeoVue class="gap"
    
    :first="proyects.ezpays.desc.content1"
    :second="proyects.ezpays.desc.content2"
    :third="proyects.ezpays.desc.content3"
    />
    <Galeria
    :imagenes="proyects.ezpays.galeria"
    />
    <ProyectsFunctions
    :functions="proyects.ezpays.functions"
    />
    <div class="proyects_contact gap">
    <a target="blank_" :href="proyects.ezpays.web" class="proyects_contact_a">WEBSITE</a>
    <a target="blank_" :href="proyects.ezpays.instagram" class="proyects_contact_a--icon icons"><img src="/img/instagram.svg" alt=""></a>
   
  </div>
  </div>
 
</template>

<style lang="scss" scoped>
.proyects {
  margin-top: 4em;
}
.proyects_contact{
  display: flex;
  gap: 1em;
  align-items: center;
  margin-bottom: var(--gap-section);
}
.proyects_contact_a{
  padding: .5em;
  background: var(--color-background-button);
  width: fit-content;
  color: var(--color-background);
}
.proyects_contact_a--icon {
  width: 40px;
  height: 40px;
}
</style>
