<script>
export default {
  methods: {
    menu (event) {
      this.$emit('clicked')
    }
  }
}
</script>
<template>
  <div class="header">
    <div class="header_width">
      <div class="header_inner">
      <div class="header_title">
      <p class="header_title_p"> <router-link :to="{name: 'home'}"></router-link> Debord Company</p>
    </div>
    <div class="header_menu">
      <div class="header_menu_icon icons" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi "
          viewBox="0 0 16 16"
          @click="menu"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
    </div>
    </div>
    </div>
    
    
  </div>
</template>
<style lang="scss" scoped>
.header{
  
  display: flex;
  justify-content: center;
  position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
}
.header_width{
  max-width: 1200px;
  width: 100%;
}
.header_inner {
    background: var(--color-background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    padding:  1.5em 2em;
   
    
    
}
.header_title {
    width: 100%;
}
.header_title_p {
  color: var(--color-text);
  font-weight: 600;
  font-size: 1em;
}
.header_menu{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.header_menu_icon{
  width: 32px;
  height: 32px;
}

</style>
