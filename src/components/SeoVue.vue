<script>
export default {
    props: ["title", "content"]
}
</script>
<template>
    <div class="home_description">
        <div class="home_description_h2">Sobre mí</div>
        <div class="home_description_p">
          <p>¡Hola!, mi nombre es Mario Sanz. Soy diseñador gráfico y desarrollador web. En 2017 empecé un proyecto llamado Debord Company, una marca personal que sigue creciendo a mi lado. A lo largo de mi carrera, he tenido la oportunidad de trabajar para una amplia variedad de empresas y clientes de diferentes sectores. 
</p>
<p>Como diseñador me he enfrentado a todas las situaciones imaginables manejando todo tipo de herramientas por ejemplo la suite de Adobe, como desarrollador web, me especializo en crear soluciones personalizadas utilizando diversas herramientas y tecnologías. En particular, tengo experiencia trabajando con Vue.js, un framework moderno y eficiente para la creación de aplicaciones web.</p>
<p>Este es mi portfolio personal, en el encontrareis mis datos  y todos los trabajos míos y para empresas realizados hasta el 2023.
</p>
          
        </div>
      </div>
</template>
<style lang="scss" scoped>
.home_description{
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
}
.home_description_h2{
  font-size: 2.5em;
  font-weight: 800;
}
.home_description_p{
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>