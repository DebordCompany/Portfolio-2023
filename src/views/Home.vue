<script setup>
import HeaderVue from "../components/HeaderVue.vue";
import FrontVue from "../components/FrontVue.vue";
import HallVue from "../components/HallVue.vue";
import SkillsVue from "../components/SkillsVue.vue";
import skills from "../data/skills.json";
</script>

<template>
  <div class="main">
    <div class="home_content">
      <HeaderVue class="headerVue" />
      <div class="home_title">
        <h1 class="home_title_h1">Graphic designer and front-end developer</h1>
      </div>
    </div>
    <FrontVue
    imagen="/img/buho_left.png"
    />
    <div class="home_content">
      <HallVue
      item_1="Skills"
      item_2="Proyectos"
      item_3="Curriculum"
      />
      <div class="home_description">
        <div class="home_description_h2">Texto para SEO</div>
        <div class="home_description_p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem veniam natus quae, iusto distinctio reprehenderit sint et facere, dolore accusantium porro doloremque perspiciatis! Minus exercitationem consectetur commodi, recusandae labore nobis, dolorem quis vitae pariatur deserunt debitis dolores est voluptas asperiores tenetur illo? Quo ipsum error, quibusdam ad molestiae ut omnis.
        </div>
      </div>
      
      
    </div>
    <FrontVue
    container="home_front_container--left"
    square="home_front_square--left"
    imagen="/img/buho_right.png"
    />
    <div class="home_content">
      <h2 class="skills_title">Skills</h2>
    </div>
    <SkillsVue
    :title="skills.design.title"
    :description="skills.design.description"
    :skills="skills.design.skills"
    :icon="skills.design.icon"
    />
  </div>
</template>
<style lang="scss" scoped>
.main{
  background: var(--color-background);
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
.home_title_h1 {
  color: var(--color-text);
  font-size: 2.5em;
  font-weight: 900;
  line-height: 1.3em;
  padding: 1em 0;
}


.home_description{
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
}
.home_description_h2{
  font-size: 2.5em;
  font-weight: 800;
}
.skills_title{
  font-size: 2.5em;
  font-weight: 800;
}
</style>
