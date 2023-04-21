<script>
export default {
    props: ["img", "title", "minDesc"]
}
</script>
<template>
    <div class="proyects">
        <div class="proyects_inner">
            <div class="proyects_img">
                <img :src="img" alt="">
            </div>
            <div class="proyects_text">
                <div class="proyects_content">
                <h3 class="proyects_content_h3">{{ title }}</h3>
                <p class="proyects_content_p">{{ minDesc }}</p>
            </div>
            <div class="proyects_button">
                <!-- añadir router link cuando este prepradp -->
                <router-link :to="{name: 'prueba'}"><p class="proyects_button_p">INSPECCIONAR</p></router-link>
                
            </div>
            </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
.proyects{
    border: 1px solid var(--color-lines);
}
.proyects_text{
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 2em;
}
.proyects_content{
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.proyects_content_h3{
    font-size: 1.5em;
    font-weight: 600;
}

.proyects_button{
    font-weight: 600;
    padding: .8em;
    background: var(--color-background-button);
    color: var(--color-background);
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50%;
}
</style>