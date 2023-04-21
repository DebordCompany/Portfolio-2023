<script setup>
import HallVueVue from "./HallVue.vue";

</script>
<script>
export default {
    methods: {
    menu (event) {
      this.$emit('clicked')
      
    },
   
  }
}
</script>

<template>
    <div class="menu">
        <div class="menu_inner">
        <div class="menu_hall">
            <HallVueVue
        item_1="Skills"
        item_2="Proyectos"
        item_3="Contacto"
       
        />
        </div>
        <div class="menu_rrss">
            <div class="menu_rrss_item">
                <a href=""><img class="menu_rrss_item_img icons" src="/img/linkedin.svg" alt=""></a>
            </div>
            <div class="menu_rrss_item">
                <a href=""><img class="menu_rrss_item_img icons" src="/img/github.svg" alt=""></a>
            </div>
            <div class="menu_rrss_item">
                <a href=""><img class="menu_rrss_item_img icons" src="/img/instagram.svg" alt=""></a>
            </div>
        </div>
        
    </div>
    </div>
    
</template>
<style lang="scss" scoped>
.menu{
   background: var(--color-background); 
  color: var(--color-text);  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
    
}
.menu_inner{
    height: 100vh;
    width: 100%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    
}
.menu_rrss{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
}
.menu_rrss_item_img{
    width: 40px;
    height: 40px;
}
</style>