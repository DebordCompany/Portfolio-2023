<script setup>
import TitleVue from "../components/TitleVue.vue";
import FrontVue from "../components/FrontVue.vue";
import HallVue from "../components/HallVue.vue";
import SeoVue from "../components/SeoVue.vue";
import SkillsVue from "../components/SkillsVue.vue";
import ProyectCardVue from "../components/ProyectCardVue.vue";
import ContactVue from "../components/ContactVue.vue";
import skills from "../data/skills.json";
import seo from "../data/Seo.json"
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
  <div class="bg_puntos">
    <section class="home">
      <TitleVue class="broad home_title" text="Graphic designer and front-end developer" />
      <FrontVue class="gap desktop_none" imagen="/img/buho_left.png" />
      <HallVue
        class="broad gap desktop_none"
        item_1="Skills"
        item_2="Proyectos"
        item_3="Contacto"
      />
      <SeoVue class="broad gap home_seo"
      :title="seo.title"
      :first="seo.content1"
      :second="seo.content2"
      :third="seo.content3"
      />
      <FrontVue
        class="gap desktop_none"
        container="home_front_container--left"
        square="home_front_square--left"
        imagen="/img/buho_right.png"
      />
      <div class="home_skills gap " id="skills">
        <div class="home_skills_title">
          <h4>Skills</h4>
        </div>
        <div class="home_skills_content">
          <SkillsVue
        class="gap"
        :title="skills.design.title"
        :description="skills.design.description"
        :skills="skills.design.skills"
        :icon="skills.design.icon"
        iconBG="skills_icons_inner"
        hr="hr"
      />
      <SkillsVue
        class="gap"
        :title="skills.develop.title"
        :description="skills.develop.description"
        :skills="skills.develop.skills"
        :icon="skills.develop.icon"
        bg="skills--bg"
        hr="skills_hr--white"
        iconBG="skills_icons_inner--white"
      />
        </div>
        
      </div>
      
      <div class="broad home_proyects">
        <h2 class="gap proyects_title" id="proyects">Proyectos</h2>
        <div class="gap home_proyects_items">
          <div
            class=""
            v-for="proyectsData in proyectsData"
            :key="proyectsData"
          >
            <ProyectCardVue
              :title="proyectsData.title"
              :img="proyectsData.img"
              :minDesc="proyectsData.minDesc"
              :route="proyectsData.route"
            />
          </div>
        </div>
      </div>
      <ContactVue 
      class="home_contact"
      id="cv"
      />
      <FrontVue class="gap back" imagen="/img/buho_left.png" />
    </section>
  </div>
</template>
<style lang="scss" scoped>
.bg_puntos{
  @include tablet (){
    background: url("/img/fondo-puntos.svg");
  background-repeat: repeat ;
  background-size: 20%;
  box-shadow: 0px 0px 100px -5px rgba(0, 0, 0, 0.106);
  }
  
}
.home {
  padding-top: 2em;
  
  

  @include tablet() {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6em;
    padding-top: 4em;
  }
}
.proyects_title{
  font-size: 2.5em;
  font-weight: 800;
}
.home_contact{
  margin-top: var(--gap-section);
  @include tablet(){
    margin-bottom: var(--gap-section);
    margin-left: 2em;
  }
}
.desktop_none{
  @include tablet(){
    display: none;
  }

}
.home_title{
  @include tablet(){
    grid-column: 1/3;
    font-size: 2rem;
  }
  
}
.home_seo{
  @include tablet(){
    grid-column: 1/3;
    
  }
  
}
.home_skills{
  
  
  @include tablet(){
   
    padding-bottom: 3em;
    grid-column: 1/3;
    margin-right: 2em ;
  }
}
.home_skills_title{
  font-size: 2.5em;
  font-weight: 800;
  padding-left: var(--padding-main);
  padding-right: var(--padding-main);
}
.home_skills_content{
  display: grid;
  grid-template-columns: 1fr;
  @include tablet(){
    grid-template-columns: 1fr 1fr;
    
  }
}
.home_proyects{
  grid-column: 1/3;
}
.home_proyects_items{
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  @include tablet(){
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
.home_contact{

}
.back{
  display: none;

  @include tablet(){
    font-size: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  }
  
}
#skills{
  scroll-margin-top: 2em;

}
#proyects{
  scroll-margin-top: 2em;
  
}
#cv{
  scroll-margin-top: 2em;
  
}

</style>
