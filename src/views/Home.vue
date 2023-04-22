<script setup>
import TitleVue from "../components/TitleVue.vue";
import FrontVue from "../components/FrontVue.vue";
import HallVue from "../components/HallVue.vue";
import SeoVue from "../components/SeoVue.vue";
import SkillsVue from "../components/SkillsVue.vue";
import skills from "../data/skills.json";
import ProyectCardVue from "../components/ProyectCardVue.vue";
import proyectsData from "../data/proyects.json";
</script>
<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
};
</script>

<template>
  <div class="main max-width">
    <section class="wrapper">
      <TitleVue
        class="wrapper_content"
        text="Graphic designer and front-end developer"
      />
      <FrontVue class="wrapper_section" imagen="/img/buho_left.png" />
    </section>
    <section class="wrapper wrapper_section">
      <HallVue
        class="wrapper_content wrapper_section"
        item_1="Skills"
        item_2="Proyectos"
        item_3="Contacto"
      />
      <SeoVue class="wrapper_content wrapper_section" />
    </section>

    <FrontVue
      class="front--desktop wrapper_section"
      container="home_front_container--left"
      square="home_front_square--left"
      imagen="/img/buho_right.png"
    />

    <div class="skills wrapper_content wrapper_section">
      <h2 class="skills_title" id="skills">Skills</h2>
    </div>

    <div class="wrapper w">
      <SkillsVue
        :title="skills.design.title"
        :description="skills.design.description"
        :skills="skills.design.skills"
        :icon="skills.design.icon"
      />
      <SkillsVue
        :title="skills.develop.title"
        :description="skills.develop.description"
        :skills="skills.develop.skills"
        :icon="skills.develop.icon"
        bg="skills--bg"
        hr="skills_hr--white"
        iconBG="skills_icons_inner--white"
      />
    </div>
    <div class="proyects wrapper_content wrapper_section">
      <h2 class="home_proyects_title" id="proyects">Proyectos</h2>
      <div class="wrapper_loop">
        <div class="home_Proyects_items">
          <ProyectCardVue
            :title="proyectsData.debord.title"
            :img="proyectsData.debord.img"
            :minDesc="proyectsData.debord.minDesc"
          />
        </div>
      </div>
      <div class="proyects_items">
        <p class="proyects_items_p">Ver mas...</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  background: var(--color-background);
  color: var(--color-text);
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr;

  @include tablet() {
    grid-template-columns: 1fr 1fr;
  }
}
.wrapper_loop {
  display: grid;
  grid-template-columns: 1fr;

  @include tablet() {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
.front--desktop {
  display: block;
  @include tablet() {
    display: none;
  }
}
.wrapper_content {
  padding-right: var(--padding-main);
  padding-left: var(--padding-main);
}
.wrapper_section {
  padding-top: var(--gap-section);
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
  padding: var(--padding-main);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
.headerVue {
  width: 100%;
}

.skills_title {
  scroll-margin-top: 2em;
  font-size: 2.5em;
  font-weight: 800;
}
.home_proyects {
  padding-top: var(--gap-main);
  padding-bottom: var(--gap-main);
  display: flex;
  flex-direction: column;
  gap: 2em;
}
.home_proyects_title {
  scroll-margin-top: 5em;
  font-size: 2.5em;
  font-weight: 800;
}
.home_proyects_items_p {
  font-weight: 600;
}
</style>
