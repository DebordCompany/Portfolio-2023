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
                <li class="footer_main_link_li"><a target="blank_" href="https://lasvegascafeteria.es/" class="footer_main_link_li_a">Las Vegas</a></li>
                <li class="footer_main_link_li"><a target="blank_" href="https://pildorasculinarias.com/" class="footer_main_link_li_a">Pildoras Culinarias</a></li>
                <li class="footer_main_link_li"><router-link :to="{ name: 'galeria' }">Galería</router-link></li>
                
                
            </ul>
        </div>
        <div class="footer_main_politica">
            <h4 class="footer_main_politica_h4" @click="politica = !politica">
                Politica de privacidad
            </h4>
            <p class="footer_main_politica_p" :class="{politica_active: politica}">
                En cumplimiento del Reglamento General de Protección de Datos (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 y la ley orgánica 3/2018 de 5 de diciembre de Protección de Datos Personales y de Garantía de los Derechos Digitales le informamos que los datos por Vd. proporcionados serán objeto de tratamiento por parte de Debord Company con la finalidad de prestarle el servicio solicitado y/o contratado, realizar la facturación del mismo. La base legal para el tratamiento de sus datos es la ejecución del servicio por usted contratado y/o solicitado. La oferta prospectiva de productos y servicios está basada en el consentimiento que se le solicita, sin que en ningún caso la retirada de este consentimiento condicione la ejecución del contrato. Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. Usted tiene derecho a obtener confirmación sobre si en Debord Company estamos tratando sus datos personales y por tanto tiene derecho a ejercer sus derechos de acceso, rectificación, limitación del tratamiento, portabilidad, oposición al tratamiento y supresión de sus datos mediante escrito dirigido a la dirección electrónica arriba mencionada, adjuntando copia del DNI en ambos casos, así como el derecho a presentar una reclamación ante la Autoridad de Control (aepd.es)
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