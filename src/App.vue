<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/HeaderVue.vue';
import MenuVue from './components/MenuVue.vue';

</script>
<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    menuActive(){
      this.menu = !this.menu
    }
  }
  
}
</script>
<template>
  <header>
    <div class="main">

      <HeaderVue class="headerVue" 
      @clicked="menuActive"
      
      />
      <MenuVue
    class="home_menu"
    :class="{home_menu_active: menu}"
    @click="menuActive"
    />
    </div>
    
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.main{
  background: var(--color-background);
}
.home_menu{
  overflow: hidden;
  height: 0px;
  width: 100%;
  transition: height .3s ease;
}
.home_menu_active{
  height: 100vh;
  box-shadow: 0px 0px 10px -5px var(--black);
  
  
  
}
.home_content {
  background: var(--color-background);
  color: var(--color-text);
  padding: 2em;
  width: 100%;
}
.headerVue {
  width: 100%;
}
</style>
