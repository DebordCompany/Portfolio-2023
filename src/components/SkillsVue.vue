<script>
export default {
    props: ["title", "description", "skills", "link", "icon", "bg", "hr", "iconBG"]
}
</script>
<template>

    <div class="skills " :class="bg">
        <div class="skills_inner">
            <div class="skills_title">{{ title }}</div>
            <div class="skills_hr" :class="hr">
                <hr>
            </div>
            <div class="skills_description">
                <p>{{ description }}</p>
            </div>
            <div class="skills_hr" :class="hr">
                <hr>
            </div>
            <div class="skill_list">
                <div class="skills_list_inner" v-for="skills in skills" :key="skills">
                <p class="skills_list_p">{{ skills }}</p>
            </div>
            </div>
            
            <div class="skills_icons">
                <div class="skills_icons_inner" :class="iconBG" v-for="icon in icon" :key="icon">
               <img :src="icon" alt="">
                
            </div>
            </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
.skills{
    color: var(--color-text);
}
.skills--bg{
    background: var(--color-primary);
    color: var(--white-soft);
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
.skills_hr--white{
    border: 1px solid var(--white-soft);
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
.skills_icons_inner{
    width: 40px;
    height: 40px;
    filter: var(--color-icons);
    
}
.skills_icons_inner--white{
    width: 40px;
    height: 40px;
    filter: var(--filter-normal);
    
}

</style>