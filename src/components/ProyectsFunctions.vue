<script>
export default {
    props:["functions"]
}
</script>
<template>
    <div class="proyects_functions gap">
        <div class="proyect_functions_title">
            <h3>Funciones desempeñadas</h3>
        </div>
        <div class="proyects_functions_ul " >
            <ul >
                <li v-for="functions in functions" :key="functions">{{ functions }}</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>

.proyect_functions_title{
    font-size: 1.3em;
    font-weight: 800;
}
.proyects_functions_ul{
   padding-top: 1em;
   padding-left: 15px;
}
.proyects_functions_ul li{
    position: relative;
    
}
.proyects_functions_ul li::before{
   content: "-";
   position: absolute;
   left: -15px;
   top: 0;
   font-weight: 700;
}
</style>