<script>
export default {
    data(){
        return{
            politica: false,
        }
    },
    methods: {
    skills() {
      const skills = document.querySelector("#skills");
      skills.scrollIntoView();
    },
    proyects() {
      const proyects = document.querySelector("#proyects");
      proyects.scrollIntoView();
    },
    cv() {
      const cv = document.querySelector("#cv");
      cv.scrollIntoView();
    },
  },
}
</script>

<template>
    <div class="footer">
        <div class="footer_main">
        <div class="footer_main_link">
            <ul class="footer_main_link_ul">
                <li @click="skills()" class="footer_main_link_li">Skills</li>
                <li @click="proyects()" class="footer_main_link_li">Proyectos</li>
                <li @click="cv()" class="footer_main_link_li">Contacto</li>
                <li class="footer_main_link_li"><a href="" class="footer_main_link_li_a">Las Vegas</a></li>
                <li class="footer_main_link_li"><a href="" class="footer_main_link_li_a">Pildoras Culinarias</a></li>
                
                
            </ul>
        </div>
        <div class="footer_main_politica">
            <h4 class="footer_main_politica_h4" @click="politica = !politica">
                Politica de privacidad
            </h4>
            <p class="footer_main_politica_p" :class="{politica_active: politica}">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum amet commodi nostrum sequi voluptatem cum consectetur, voluptate eos praesentium eveniet.
            </p>
        </div>
        <div class="footer_main_icons">
            <a href="" class="footer_main_icons_link"><img src="/img/github-white.svg" alt=""></a>
            <a href="" class="footer_main_icons_link"><img src="/img/linkedin-white.svg" alt=""></a>
            <a href="" class="footer_main_icons_link"><img src="/img/instagram-white.svg" alt=""></a>
        </div>
    </div> 
    </div>
   
</template>
<style lang="scss" scoped>
.footer{
    background: var(--footer-background);
    color: var(--white-soft);
    display: flex;
    
    gap: 2em;
    
}
.footer_main{
    background: var(--footer-background);
    color: var(--white-soft);
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    max-width: 1200px;
    
}
.footer_main_link_ul{
    display: flex;
    flex-direction: column;
    gap: .5em;
    font-size: 1.2em;
    font-weight: 600;
}
.footer_main_politica_h4{
    font-size: 1.2em;
    font-weight: 600;
}
.footer_main_politica_p{
    display: none;
    
}
.politica_active{
    display: flex;
}
.footer_main_icons{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    margin-bottom: 3em;

}
.footer_main_icons_link{
    width: 40px;
    height: 40px;
}
</style>