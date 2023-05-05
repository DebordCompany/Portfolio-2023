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
    :img="proyects.tours.img"
    :title="proyects.tours.title"
    />
    <SeoVue class="gap"
    
    :first="proyects.tours.desc.content1"
    :second="proyects.tours.desc.content2"
    :third="proyects.tours.desc.content3"
    />
    <Galeria
    :imagenes="proyects.tours.galeria"
    />
    <ProyectsFunctions
    :functions="proyects.tours.functions"
    />
    <div class="proyects_contact gap">
    <a target="blank_" :href="proyects.tours.web" class="proyects_contact_a">WEBSITE</a>
    <a target="blank_" :href="proyects.tours.instagram" class="proyects_contact_a--icon icons"><img src="/img/instagram.svg" alt=""></a>
   
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
