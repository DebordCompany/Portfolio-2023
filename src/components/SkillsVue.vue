<script>
export default {
    props: ["title", "description", "skills", "icon"]
}
</script>
<template>

    <div class="skills">
        <div class="skills_inner">
            <div class="skills_title">{{ title }}</div>
            <div class="skills_hr">
                <hr>
            </div>
            <div class="skills_description">
                <p>{{ description }}</p>
            </div>
            <div class="skills_hr">
                <hr>
            </div>
            <div class="skill_list">
                <div class="skills_list_inner" v-for="skills in skills" :key="skills">
                <p class="skills_list_p">{{ skills }}</p>
            </div>
            </div>
            
            <div class="skills_icons">
                <div class="skills_icons_inner" v-for="icon in icon" :key="icon">
                <img :src="icon" alt="">
                
            </div>
            </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
.skills{
    
}
.skills_inner{
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em;
}
.skills_title{
    font-size: 2em;
    font-weight: 800;
}
.skills_hr{
    border: 1px solid var(--black);
}
.skills_list{
    display: flex;
    flex-direction: column;
    gap: .5em;
}
.skills_list_inner{
    font-weight: 600;
}
.skills_icons{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    padding-top: 1em;
}
.skills_icons img{
    width: 40px;
    height: 40px;
}
</style>