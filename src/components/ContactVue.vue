<script setup>
import FormVue from './FormVue.vue';
</script>
<template>
    <div class="contact">
        <div class="contact_inner">
            <div class="contact_title">
                <div class="contact_title_h1">
                    <h1>Curriculum</h1>
                </div>
                <div class="contact_title_p">
                    <p>Puedes descargar mi curriculum o contactarme a traves del formulario, por redes sociales...</p>
                </div>
                <div class="contact_title_download">
                    <a href="/img/curriculum.pdf" target="blank_" class="contact_title_download_button">Descargar</a>
                </div>
            </div>
            <div class="contact_form">
                <FormVue/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.contact{
    background: var(--color-primary);
    color: var(--white-soft);
    
}
.contact_inner{
    padding: var(--padding-main);
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.contact_title{
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.contact_title_h1{
    font-size: 2.5em;
    font-weight: 800;
}
.contact_title_download_button{
    border: 1px solid var(--white-soft);
    font-weight: 600;
    width: fit-content;
    padding: .5em;
    transition: all .3s ease ;
}
.contact_title_download_button:hover{
    background: var(--white-soft);
    color: var(--color-primary);
}
</style>