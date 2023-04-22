<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderVue from "./components/HeaderVue.vue";
import MenuVue from "./components/MenuVue.vue";
import FooterVue from "./components/FooterVue.vue";
</script>
<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    menuActive() {
      this.menu = !this.menu;
    },
  },
};
</script>
<template>
  <div class="main_bg">
    <div class="main_inner ">
      <header>
        <div class="">
          <HeaderVue class="headerVue" @clicked="menuActive" />
          <MenuVue
            class="home_menu"
            :class="{ home_menu_active: menu }"
            @click="menuActive"
          />
        </div>
      </header>

      <RouterView />
      <FooterVue />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main_bg {
  background: var(--color-background);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main_inner{
  padding-top: 4em;
}
.home_menu {
  overflow: hidden;
  height: 0px;
  width: 100%;
  transition: height 0.3s ease;
}
.home_menu_active {
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
