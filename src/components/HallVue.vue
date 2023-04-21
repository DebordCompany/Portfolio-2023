<script>
export default {
  props: ["item_1", "item_2", "item_3"],
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
};
</script>
<template>
  <div class="home_distribuidor">
    <div  @click="skills()">
      <router-link :to="{name: 'home'}" class="home_distribuidor_item"
        ><h2 class="home_distribuidor_item_h2">{{ item_1 }}</h2>
        <div class="home_distribuidor_item_arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg></div
      ></router-link>
    </div>
    <div  @click="proyects">
      <router-link class="home_distribuidor_item" :to="{name: 'home'}">
      <h2 class="home_distribuidor_item_h2">{{ item_2 }}</h2>
      <div class="home_distribuidor_item_arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
      </router-link>
      
    </div>
    <div  @click="cv">
      <router-link class="home_distribuidor_item" :to="{name: 'home'}">

        <h2 class="home_distribuidor_item_h2">{{ item_3 }}</h2>
      <div class="home_distribuidor_item_arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
      </router-link>
      
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home_distribuidor_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home_distribuidor_item_h2 {
  font-size: 2.5em;
  font-weight: 800;
  text-decoration: underline;
}
</style>
